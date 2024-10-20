import createF from "./filesystem.js"

function setupRootfs() { // will wipe the rootfs
    localStorage.setItem("/", JSON.stringify(["etc", "home","run", "bin", "usr", "sbin", "proc", "lib", "sys", "root", "apps", "settings"]))
    localStorage.setItem("/bin/", JSON.stringify(["sh"]))
    localStorage.setItem("/bin/sh/", JSON.stringify([]))
}

function installDNF() { // same thing as apt or pacman, but fedora
    console.log("installing dnf")
    try {
    localStorage.getItem('/bin/sh/')
    let temp_dev_sh = JSON.parse(localStorage.getItem("/bin/sh/"))
    temp_dev_sh.push("dnf")
    localStorage.setItem("/bin/sh/", JSON.stringify(temp_dev_sh))
    localStorage.setItem("/bin/sh/dnf", 
        `async function install(pckgLocation, pckgName) {
            try {
            let pckg = await fetch(pckgLocation)
            var pckg_all = await pckg.text()
            }
            catch (e) {
                console.error('Error ERR:DINT:NTWK was thrown when installing package "' + pckgName + '"')
                console.error("Aborting install process")
                return "ERR:DINT:NTWK"
            }
            try {
                localStorage.setItem("/bin/sh/"+pckgName, pckg_all)
            }
            catch (e) {
                console.error('Error ERR:DINT was thrown when installing package "' + pckgName + '"')
                console.error("Aborting install process")
                localStorage.removeItem('/bin/sh/' + pckgName)
                return "ERR:DINT"
            }
        }
        function uninstall(pckgName) {
            console.log("Uninstalling...")
            localStorage.removeItem("/bin/sh/" + pckgName)
            console.log("Uninstalled")
        }
        `
    )
    } catch (e) {
        console.error(`Error ERR:DINT thrown when installing DNF (${e}). Aborting install`)
        localStorage.removeItem("/bin/sh/dnf")
        return "ERR:DINT"
    }
    console.log('dnf installed')
}

function installBaseApps() {
    createFolder("/bin/sh/", "cat")
}