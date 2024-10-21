


function installMinecraft() {
    var link = __uv$config.prefix + __uv$config.encodeUrl("https://eaglercraft.com")
    let tempfs = JSON.parse(localStorage.getItem("fs"))

    tempfs.apps["minecraft"] = {}
    tempfs.apps.minecraft['link'] = link
    tempfs.apps.minecraft["image"] = "/assets/img/minecraft.png"
    tempfs.apps.minecraft["name"] = "Minecraft"
    tempfs.apps.minecraft["type"] = "uv"
    localStorage.setItem("fs",  JSON.stringify(tempfs)) // imagine someday i push a broken commit and accidently wipe evereyones files
    alert("Installation finished!")
}   

function uninstallMinecraft() {
    let tempfs = JSON.parse(localStorage.getItem("fs"))
    delete tempfs.apps.minecraft // praying that this dosent make a dangling pointer somewhere
    localStorage.setItem("fs", JSON.stringify(tempfs))  
}