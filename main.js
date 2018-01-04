document.addEventListener('click', function(event){
	if (!event.target.hasAttribute('data-show-password')) return;
	
	var password = document.querySelector(event.target.getAttribute('data-show-password'));
	if(!password) return;

	if(event.target.checked) {
	password.type='text';
	} else {
	password.type='password';
		}
}, false);