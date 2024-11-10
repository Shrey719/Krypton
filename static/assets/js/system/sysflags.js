let rootfs = JSON.parse(localStorage.getItem("fs"))

function setDevmodeDisabled() {
rootfs.sys.systemFlags = {
	allowJavascriptTerm: false, // no js term 
	allowRootfsEditing: false, // rootfs write protected by default
	rescueModeOnRootFSCor: false // if something happens to the rootfs, kick back to the oobe
}

localStorage.setItem("fs", JSON.stringify(rootfs))
}

function setDevmodeEnabled() {

rootfs.sys.systemFlags = {
	allowJavascriptTerm: true,
	allowRootfsEditing: true, // people with the ability to edit the rootfs CAN toggle this flag/change the flag in any way they want
	rescueModeOnRootFSCor: true // if something happens to the rootfs, kick to rescue mode
}

localStorage.setItem("fs", JSON.stringify(rootfs))
}
