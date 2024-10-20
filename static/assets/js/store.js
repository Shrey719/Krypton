import "./filesystem.js"

function installMinecraft() {
    var link = __uv$config.prefix + __uv$config.encodeUrl("https://eaglercraft.com")
    var currentApps = JSON.parse(localStorage.getItem("/apps/"))
    if (!currentApps.includes("minecraft")) { // You have to assume that anything that can go wrong, will go wrong
        currentApps.push("minecraft")
    }
    localStorage.setItem("/apps/minecraft/link", link)
    localStorage.setItem("/apps/minecraft/image", "/assets/img/minecraft.png")
    localStorage.setItem("/apps/minecraft/name", "Minecraft")
    localStorage.setItem("/apps/minecraft/type", "uv")
    localStorage.setItem("/apps/minecraft/", "['link', 'image', 'name', 'type']")
    localStorage.setItem("/apps/", JSON.stringify(currentApps))
    alert("Installation finished!")
}   

function uninstallMinecraft() {
    var currentApps = JSON.parse(localStorage.getItem("/apps/"))
    const index = currentApps.indexOf("minecraft");
    if (index > -1) { 
      currentApps.splice(index, 1); 
    }
    localStorage.setItem("/apps/", JSON.stringify(currentApps))
    localStorage.removeItem("/apps/minecraft/link")
    localStorage.removeItem("/apps/minecraft/")
    localStorage.removeItem("/apps/minecraft/image")
    localStorage.removeItem("/apps/minecraft/name")
    localStorage.removeItem("/apps/minecraft/type")
    alert("Uninstallation finished!")
}

function installVoid() {
    createFolder("/apps/", "void/")
    createF("/apps/void/link")
    editFile("/apps/void/link", __uv$config.prefix + __uv$config.encodeUrl("https://void.radio.am"))
    createF("/apps/void/", 'img')
    editFile("/apps/void/img", "/assets/img/void.png")
    localStorage.setItem("/apps/void/name", "Void Games")
}