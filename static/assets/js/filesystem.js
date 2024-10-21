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
localStorage.setItem("fs", JSON.stringify(rootFS))					