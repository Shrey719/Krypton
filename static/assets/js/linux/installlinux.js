let fs = JSON.parse(localStorage.getItem("fs")) // yes, this will interact directly with the fs (no wrappers)

fs.bin.bash["mkdir"] = {}
fs.bin.bash.mkdir.main = function(str) {
    let obj = JSON.parse(localStorage.getItem("fs"))
    const keys = str.split(".");

    let current = obj;
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (i === keys.length - 1) {
            current[key] = {}; 
        } else {
            if (!current[key]) {
                current[key] = {};
            }
            current = current[key]; 
        }
    }
    return obj

}