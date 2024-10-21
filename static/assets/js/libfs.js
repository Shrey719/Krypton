function updateObj(obj, str) {
    const [keyPath, value] = str.split(":");
    const keys = keyPath.split(".");

    let current = obj;
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (i === keys.length - 1) {
            current[key] = value; 
        } else {
            if (!current[key]) {
                current[key] = {};
            }
            current = current[key]; 
        }
    }
}

function createFile (location) {
    /*
    location = "bin.bash.examplepckg:helloworld"
    would set bin/bash/example to helloworld 
    */

    let files = JSON.parse(localStorage.getItem("fs"))
    updateObj(files, location)
    localStorage.setItem("fs", JSON.stringify(files))
} 