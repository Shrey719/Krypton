function printuf(input) {
	return {
		EXIT_CODE: 0, 
		OUTPUT: input,	
	}
}

function sysfetch() {
	try {
	let avalibleCores = navigator.hardwareConcurrency;
	let osver = localStorage.getItem("version")
		return {
		EXIT_CODE: 0, 
		OUTPUT: `Avalible cores: ${avalibleCores}\n Krypton Version: ${osver}`
	}
	} catch (e) {
		return {
		EXIT_CODE: 1,
		OUTPUT: "Error in fetching system " + e
		}
	}
}
