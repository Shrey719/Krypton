 fs = JSON.parse(localStorage.getItem("fs")) // yes, this will interact directly with the fs (no wrappers)

    fs.bin.bash["mkdir"] = {}
        // so the way this works is mkdir(home/usr/example/folder)
    fs.bin.bash.mkdir.main = function(str) {
            let obj = JSON.parse(localStorage.getItem("fs"))
            const keys = str.split("/");

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
            localStorage.setItem("fs", JSON.stringify(obj)) 

        }

fs.bin.bash["touch"] = {}
fs.bin.bash.touch.main = function(loc) {
    let obj = JSON.parse(localStorage.getItem("fs"))
    const keys = loc.split("/");

    let current = obj;
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (i === keys.length - 1) {
            current[key] = ""; 
        } else {
            if (!current[key]) {
                current[key] = {};
            }
            current = current[key]; 
        }
    }
    localStorage.setItem("fs", JSON.stringify(obj)) 

}

delete fs // manual things (and also no more conflicts  )