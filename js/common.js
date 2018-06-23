let search = document.querySelector('.search');
let container = document.querySelector('.container li');

let array = 'lubin_pl5 lublin_pl2 teresin_pl2'.split(' ');

let str2 = 'teresin pl2';
search.addEventListener('keyup', event => {
	let str = str2.split(' ');
	if(search.value === str[0].substring(0, search.value.length) && search.value.length > 0)
		container.innerHTML = `<b>${search.value}</b>${str[0].substring(search.value.length)} <span>${str[1]}</span>`;
	else if(search.value.length == 0)
		container.innerHTML = '';
	else
		container.innerHTML = `<i>ERROR</i>`;
});