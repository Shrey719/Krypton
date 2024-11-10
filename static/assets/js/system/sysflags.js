let rootfs = JSON.parse(localStorage.getItem("fs"))

rootfs.sys.systemFlags = {
	allowJavascriptTerm: false, // no js term 
	allowRootfsEditing: false, // rootfs write protected by default
	rescueModeOnRootFSCorruption: true; // if something happens to the rootfs, kick back to the oobe/rescue mode;
}
