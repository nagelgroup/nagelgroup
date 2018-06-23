let search = document.querySelector('.search');
let container = document.querySelector('.container');

search.addEventListener('keyup', event => {
	container.innerHTML = search.value;
});