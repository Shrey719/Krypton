export function createF(location, name) {
	if (localStorage.getItem(location) == null) {
		console.error("ERR:FNF - Location specified does not exist")
		return "ERR:FNF"
	}
	try {
	let x = JSON.parse(localStorage.getItem(location))
	x.push(name)
	localStorage.setItem(location, x)
	}
	catch (e) {
		console.error("ERR:FCI - Exception thrown in creating file")
		return 'ERR:FCI'
	}
}
export function createFolder(location, name) {
	if (localStorage.getItem(location) == null) {
		console.error("ERR:FNF - Location specified does not exist")
		return "ERR:FNF"
	}
	try {
	let x = JSON.parse(localStorage.getItem(location))
	x.push(name)
	localStorage.setItem(location, x)
	localStorage.setItem(location+x, "[]")
	}
	catch (e) {
		console.error("ERR:FCI - Exception thrown in creating file")
		return 'ERR:FCI'
	}
}
export function editFile(location, newcontents) {
	if (localStorage.getItem(location == null)){
		console.error(`ERR:FNF - File not found "${location}"`)
		return "ERR:FNF"
	}
	localStorage.setItem(location, newcontents)
}


