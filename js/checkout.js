// Exercise 7

function validate() {
	let error = 0;
	// Get the input fields
	let fName = document.getElementById("fName");
	let fEmail = document.getElementById("fEmail");
	let fAddress = document.getElementById("fAddress");
	let fLastN = document.getElementById("fLastN");
	let fPassword = document.getElementById("fPassword");
	let fPhone = document.getElementById("fPhone");

	// Get the error elements
	let errorName = document.getElementById("errorName");
	let errorEmail = document.getElementById("errorEmail");
	let errorPhone = document.getElementById("errorPhone");
	let errorLastN = document.getElementById("errorLastN");
	let errorPassword = document.getElementById("errorPassword");
	let errorAdress = document.getElementById("errorAddress");

	let regExpName=/([A-Z])\w+/g;
	let regExpLastN=/([A-Z])\w+/g;
	let regExpEmail= /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi;
	let regExpPhone=/\d/g;  
	let regExpAdress=/./g;
	let regExpPassword=/^[A-Za-z0-9]*$/g;
	
	let expMail=regExpEmail.test(fEmail.value);
	
	// Validate fields entered by the user: name, phone, password, and email
	
		if (fName.value.length<4 || !(regExpName.test(fName.value))) {
			error++;
			fName.style.border="2px solid red";
			errorName.innerHTML = "This field is required and must have, at least, 3 characters only letters";
			errorName.style.display="block";
		}
		else{
			fName.style.border="2px solid green";
		}

		if (fLastN.value.length<4 || !(regExpLastN.test(fLastN.value))) {
			error++;
			fLastN.style.border="2px solid red";
			errorLastN.innerHTML = "This field is required and must have, at least, 3 characters only letters";
			errorLastN.style.display="block";
		}
		else{
			fLastN.style.border="2px solid green";
		}

		if (fAddress.value.length<4 || !(regExpAdress.test(fAddress.value))) {
			error++;
			fAddress.style.border="2px solid red";
			errorAdress.innerHTML = "This field is required and must have, at least, 3 characters";
			errorAdress.style.display="block";
		}
		else{
			fAddress.style.border="2px solid green";
		}
		
		if ( !(expMail) || fEmail.length<4) {
			error++;
			fEmail.style.border="2px solid red";
			errorEmail.innerHTML = "This field is required and must contain an '@' and have, at least, 3 characters";
			errorEmail.style.display="block";
		}
		else{
			fEmail.style.border="2px solid green";
		}

		if (!(regExpPhone.test(fPhone.value)) || fPhone.value.length != 9 ) {
			error++;
			fPhone.style.border="2px solid red";
			errorPhone.innerHTML = "Invalid phone number!! Must be 9 digits with no letters";
			errorPhone.style.display="block";
		}
		else{
			fPhone.style.border="2px solid green";
		}
		
		console.log(fPassword.value);
		if ( fPassword.value.length<4 || !(regExpPassword.test(fPassword.value))) {				
			error++;
			fPassword.style.border="2px solid red";
			errorPassword.innerHTML = "Enter a correct password,4-8 numbers o letters";
			errorPassword.style.display="block";
		}
		else{
			fPassword.style.border="2px solid green";
		}
	
	if (error > 0) {
		alert("Error");
	} else {
		alert("OK");
	}
	
}