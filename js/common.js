let search = document.querySelector('.search');
let container = document.querySelector('.container');
let error = document.querySelector('.error');

let districts = 'lubin_pl5 lubartow_pl2 lublin_pl2 teresin_pl2'.toUpperCase().split(' ');


console.log(districts)

search.addEventListener('keyup', event => {
	let _search = search.value.toUpperCase();

	container.innerHTML = '';

	districts.forEach( value => {

		if(_search === value.substring(0, _search.length) && _search.length > 0){
			let tempArray = value.split('_');

			let li = document.createElement('li');
			li.innerHTML = `<b>${_search}</b>${tempArray[0].substring(_search.length)}<span class="dist">${tempArray[1]}</span>`;

			container.appendChild(li);
		} 

		if(container.innerHTML == '' && _search.length > 0){
			error.style.display = 'block';
		} else {
			error.style.display = 'none';
		}

	});
});



	// let str = str2.split(' ');

	// if(search.value === str[0].substring(0, search.value.length) && search.value.length > 0)
	// 	container.innerHTML = `<b>${search.value}</b>${str[0].substring(search.value.length)} <span>${str[1]}</span>`;

	// else if(search.value.length == 0)
	// 	container.innerHTML = '';

	// else
	// 	container.innerHTML = `<i>ERROR</i>`;