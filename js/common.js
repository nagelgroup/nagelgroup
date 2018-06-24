let search = document.querySelector('.search');
let container = document.querySelector('.container');
let error = document.querySelector('.error');

let districts = 'lubin_pl5 lubartow_pl2 lublin_pl2 teresin_pl2 warka_warshawa konstancin-jeziorna_warshawa choroszcz_bialystok turek_pl6 gadki-koninko_pl6 laskarzew_siedlce kutno_lodz sokolow-podlaski_siedlce drobin_plock kalisz_pl6 buk_pl6 fabianki_wloclawec brzeg_pl5 slawkow_pl4 zukowo_pl8 mielec_pl2 malmoe_pl4 chmielow_pl2 pcim_pl4 legnickie-pole_pl5 lancut_pl2 wroclaw_pl5 nowa-wies-wroclawska_pl5 opole_pl5 gliwice_pl4 pinzow_pl4 pruszcz-gdanski_pl8 ostroda_pl8 myslowice_pl4 swadzim_pl6 plewiska_pl6 niepruszewo_pl6 lochowo_pl6 slawa_pl6 szczecin_pl6 dlugoleka_pl5 mirkow_pl5 walbrzych_pl5 gdansk_pl8 grudziadz_pl8 skarbimierz_pl5 wojnicz_pl4 tychy_pl4 skorcz_pl8 kolobrzeg_pl6 komorniki_pl6 katy-wroclawskie_pl5 lisia-gora_pl4 grodkow_pl4 kobylanka_pl6 glogow_pl6 klobuck_pl4 chorzow_pl4 bochnia_pl4 krotoszin_pl6 jastrowie_pl6 bedzin_pl4 podrzewie_pl6 gniezno_pl6 gorzow-wielkopolski_pl6 modlinica_pl4 krakow_pl4'.toUpperCase().split(' ');
districts.sort((a, b) => {
	return a > b? 1 : -1;
})
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

		if(container.innerHTML == '' && _search.length > 0)
			error.style.display = 'block';
		else 
			error.style.display = 'none';

		if(_search === '_ILOSC')
			container.innerHTML = `<span class="ilosc">${districts.length} miast</span>`;

	});
});