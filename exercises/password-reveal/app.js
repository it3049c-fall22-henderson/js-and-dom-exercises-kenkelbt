// 🤖: create 2 constants with references to the password input and the reveal button from the DOM
const inptPassword = document.getElementById("password");
const btnReveal = document.getElementById("togglePassword");

// 🤖: Create an Event Listener on the password reveal button
// 🤖: The event listener should toggle the password field attribute between `password` and `text` to change the visibility of the password field content.
btnReveal.addEventListener("click", function(){

	var inptType = inptPassword.getAttribute("type");

	if(inptType == "password")
	{
		inptType = "text";
	}
	else
	{
		inptType = "password";
	}

	inptPassword.setAttribute("type", inptType);

	this.classList.toggle("bi-eye");

});

// Provided for you - prevent form submit
const form = document.querySelector("form");
form.addEventListener('submit',function(e){
	e.preventDefault();
});