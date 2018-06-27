let search = document.querySelector('.search');
let container = document.querySelector('.container ul');
let error = document.querySelector('.error');

let districts = 'strzegowo_mlawa nadarzyn_pod-sciana brwinow_pod-sciana tomaszow-mazowiecki_pod-sciana tuliszkow_pl6 nowy-tomysl_pl6 nowy-sacz_pl4 zielona-gora_pl6 wodzislaw-slaski_pl4 zuromin_plock ruda-slaska_pl4 krasnystaw_pl2 zamosc_pl2 chelm_pl2 tomaszow-lubelski_pl2 gorlice_pl4 charna_pl2 kornik_pl6 tarnobrzeg_pl4 wolborz_pod-sciana motycz_pl2 przemysl_pl2 pniewy_pl6 slupsk_pl8 kolbaskowo_pl6 konopnica_pl2 elk_bialystok lutomiersk_bialystok jezow_bialystok trzebieszow_siedelce opoczno_radom belchatow_lodz ostroleka_wyszkow warszowice_pl4 brojce_bialystok strzelce_bialystok paezniew_pod-sciana lucmierz_bialystok poddebice_bialystok stare-miasto_pl6 jaslo_pl2 brzesc-kujawski_wloclawek strezelce_lodz malbork_pl8 krosniewice_lodz widawa_lodz ciechocinek_wloclawek makow-mazowiecki_mlawa pakosc_pl6 grzybowi_pl6 skierniewice_lodz stara-biala_plock nowa-sucha_lodz glowno_lodz koluszki_lodz rawa-mazowiecka_lodz kostrzyn-wielkopolski_pl6 piaski_pl2 aleksandrow-kujawski_wloclawek somianka_wyszkow tegoborze_pl4 chorkowka_pl2 tarnowo-podgorne_pl6 winnica_mlawa torun_pl6 bielsk-podlaski_bialystok chwaszczyno_pl8 nowa-deba_pl2 gniew_pl8 rzeszow_pl2 pabianice_lodz szaflary_pl4 sosnowiec_pl4 katowice_pl4 tyczepy_pl4 jastrowie_pl6 puck_pl8 olsztyn_pl8 ożarów-mazowiecki_warszawa koszalin_pl8 branszczyk_wyszkow smętowo-graniczne_pl8 zakrzew_radom krotoszyn_pl6 kobierzyce_pl5 zabia-wola_pl8 grodzisk-mazowiecki_warszawa lomianki_warszawa wiazowna_warszawa marki_warszawa jarocin_pl6 zgierz_lodz lubin_pl5 lubartow_pl2 lublin_pl2 teresin_pl2 warka_siedelce konstancin-jeziorna_warszawa choroszcz_bialystok turek_pl6 gadki-koninko_pl6 laskarzew_siedlce kutno_lodz sokolow-podlaski_siedlce drobin_plock kalisz_pl6 buk_pl6 fabianki_wloclawek brzeg_pl5 slawkow_pl4 zukowo_pl8 mielec_pl2 malmoe_pl4 chmielow_pl2 pcim_pl4 legnickie-pole_pl5 lancut_pl2 wroclaw_pl5 nowa-wies-wroclawska_pl5 opole_pl5 gliwice_pl4 pinzow_pl4 pruszcz-gdanski_pl8 ostroda_pl8 myslowice_pl4 swadzim_pl6 plewiska_pl6 niepruszewo_pl6 lochowo_pl6 slawa_pl6 szczecin_pl6 dlugoleka_pl5 mirkow_pl5 walbrzych_pl5 gdansk_pl8 grudziadz_pl8 skarbimierz_pl5 wojnicz_pl4 tychy_pl4 skorcz_pl8 kolobrzeg_pl6 komorniki_pl6 katy-wroclawskie_pl5 lisia-gora_pl4 grodkow_pl4 kobylanka_pl6 glogow_pl6 klobuck_pl4 chorzow_pl4 bochnia_pl4 bedzin_pl4 podrzewie_pl6 gniezno_pl6 gorzow-wielkopolski_pl6 modlinica_pl4 krakow_pl4'.toUpperCase().split(' ');

districts.sort((a, b) => {
	return a > b? 1 : -1;
});


search.addEventListener('keyup', event => {
	let _search = search.value.toUpperCase();

	container.innerHTML = '';
	
	districts.forEach( value => {

		if(_search === value.substring(0, _search.length) && _search.length > 0){
			let tempArray = value.split('_');

			let li = document.createElement('li');

			li.innerHTML = `<b>${ _search }</b>${ tempArray[0].substring(_search.length) }<span class="dist">${ tempArray[1] }</span>`;

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

let header = document.querySelector('.header');
let wrapper_bg = document.querySelector('.wrapper_bg');

search.addEventListener('focus', event => {
	header.className = 'header header_active';
	wrapper_bg.style.opacity = '0';
	setTimeout(e => header.style.position = 'fixed', 200);
});

search.addEventListener('blur', event => {
	if(container.innerHTML == ''){
		header.className = 'header';
		header.style.position = 'static';
		
		setTimeout(E => wrapper_bg.style.opacity = '1', 130);

		search.value = '';		error.style.display = 'none';
	}
		
});



//проверка на разность городов

// for(let i = 0; i <= districts.length; i++) {
// 	for(let j = 0; j < i; j++) {
// 		if(districts[i] === districts[j])
// 			console.log(i + ' ' + districts[i])
// 	}
// }
