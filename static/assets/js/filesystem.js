function setuprootfs() {
	return JSON.stringify({
	 var: {
 
	 },
	 home: {
 
	 },
	 run: {
 
	 },
	 etc: {
 
	 }, 
	 bin: {
		 bash: {
			wget: {}
		 }
	 },
	 usr: {
 
	 },
	 sbin: {
 
	 },
	 proc: {
 
	 },
	 lib: {
 
	 },
	 sys: {
 
	 },
	 root: {
 
	 },
	 settings: {},
	 apps: {}
	} )
 }

console.log("Creating rootfs...")
localStorage.setItem("fs", setuprootfs())
let rootFS = JSON.parse(localStorage.getItem("fs"))
console.log("Rootfs created... Creating dnf")
rootFS.bin.bash["wget"] = {}
rootFS.bin.bash.wget['main'] =  `function(url) {
 	let resp = "";
    fetch(url, {
        method: 'GET'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("ERR:NTWK - Response was not ok");
        }
        return response.text(); 
    })
    .then(data => {
        resp =  data; 
    })
    .catch(error => {
        return 'Error fetching (ERR:CORS)'
    });
	return resp
}`
localStorage.setItem("fs", JSON.stringify(rootFS))					