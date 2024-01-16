console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	console.log('form submit');
	alert('form has been submitted');
}




let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);


const mouseovr = document.querySelector('#img');
mouseovr.addEventListener('mouseover', evt => {
	evt.preventDefault();
	alert('you tingle my jingles')
});