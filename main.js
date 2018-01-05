document.addEventListener('click', function(event){

	if (!event.target.hasAttribute('data-show-password')) return;
	
	var password = document.querySelectorAll(event.target.getAttribute('data-show-password'));
	if(password.length < 1) return;

	for (var i=0; i<password.length; i++) {

	if(event.target.checked) {
	password[i].type='text';
	} else {
	password[i].type='password';
	}
	}
}, false);
