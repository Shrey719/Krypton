document.addEventListener("DOMContentLoaded", renderInstalledApps)
function renderInstalledApps() {
let Apps = JSON.parse(localStorage.getItem("/apps/"))
for (i = 0; i < Apps.length; i++) {
    current_obj = Apps[i]
    let current_obj_img = localStorage.getItem("/apps/" + current_obj + "/image")
    let current_obj_name = localStorage.getItem("/apps/" + current_obj + "/name")
    let current_obj_link = localStorage.getItem("/apps/" + current_obj + "/link")
    let current_obj_type = localStorage.getItem("/apps/" + current_obj + "/type")
    let current_obj_payload = localStorage.getItem("/apps/" + current_obj + "/payload")
    if (current_obj_type == "uv") {
        let image_of = document.createElement("img")
        let redirc_of = document.createElement("button") 
        let title_of = document.createElement("label")
        let of_div = document.createElement("div") 
        image_of.src = current_obj_img
        image_of.style.height = "5vh"
        image_of.style.width = "3vw"
        redirc_of.style.backgroundColor = "transparent"
        redirc_of.style.border = "none"
        redirc_of.style.color = "white"
        redirc_of.id = current_obj_name 
        title_of.for = current_obj_name
        title_of.innerHTML = "<br>"+current_obj_name+"<br>"
        console.log(redirc_of.onclick)
        redirc_of.onclick = function() {
            openApp(current_obj_link)
        }
        console.log(redirc_of.onclick)
        redirc_of.appendChild(image_of)
        of_div.appendChild(redirc_of)
        of_div.appendChild(title_of)
        of_div.style = `
            margin-left: 1.5rem
        `
        if (current_obj_img != null) {
            document.getElementById("apps_installed").appendChild(of_div)
        } // Idk if the installer does coke or smth
    }
    if (current_obj_type == "js") {
        let image_of = document.createElement("img")
        let redirc_of = document.createElement("button")
        image_of.src = current_obj_img
        image_of.style.height = "5vh"
        image_of.style.width = "3vw"
        redirc_of.style.backgroundColor = "transparent"
        redirc_of.style.border = "none"
        redirc_of.style.color = "white"
        redirc_of.style.padding = "10px"
        redirc_of.onclick = function() {eval(current_obj_payload)}
        redirc_of.appendChild(image_of)
        if (current_obj_img!= null) {
            document.getElementById("apps_installed").appendChild(redirc_of)
        }
    }
} 
}

function openApp(url) {
    if (document.getElementById("appShowing") !== null) {
        removeCurrentApp()
    }
    document.getElementById("CurrentApp").display = "block"
    let frame = document.createElement("iframe")
    frame.src = url;
    frame.id = 'appShowing';
    frame.height = "100%";
    frame.width = "100%";
    frame.allowtransparency = "true"
    frame.style.background = "white"
    frame.style.border = "none"
    document.getElementById("CurrentApp").appendChild(frame);
    document.getElementById("CurrentApp").style.visibility = "visible";
    document.getElementById("appHeader").style.visibility = "visible";
    const apps_i = document.getElementById('apps_installed');
        while (apps_i.firstChild) {
            apps_i.removeChild(apps_i.firstChild);
        }
}

function removeCurrentApp() {
    document.getElementById("appShowing").remove()
    document.getElementById("appHeader").style.visibility = "hidden"   
    renderInstalledApps()
}

//    <iframe id="my-iframe" is="ChemicalIFrame" src="/~/uv/hvtrs8%2F-ezaopne%2Ccmm" height="100%" width="100%"></iframe>
