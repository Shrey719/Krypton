function setup() {
    let tempfs = JSON.parse(localStorage.getItem("fs"))
    tempfs.settings["theme"]= "dark"
    tempfs.settings["searchEngine"] = "https://www.google.com/search?q="
}
if (localStorage.getItem("setup") == null) {
setup()
localStorage.setItem("setup", true)
}
