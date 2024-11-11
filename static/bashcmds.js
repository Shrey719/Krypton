function printuf(input) {
	return {
		EXIT_CODE: 0, 
		OUTPUT: input,	
	}
}

function sysfetch() {
	try { 
		let avalibleCores =  navigator.hardwareConcurrency;
		let osver = localStorage.getItem("version")
		
	} catch(e) {
		return {
			EXIT_CODE: 1,
			OUTPUT: `Error in fetching system contents`
		}
	}
	return {
		EXIT_CODE: 0, 
		OUTPUT: `Avalible cores: ${avlibleCores} \n Krypton Version: ${osver}`
	}
}
