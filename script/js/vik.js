var ball = 0;

alert('Привет! Сейчас будет тест по Информатике');

function vopros(name, yes) {
	otvet = prompt(name)

	if (otvet == yes) {
		document.getElementById('vik').innerHTML = 'Ответ верный';
		ball = ball + 1;
	} else {
		document.getElementById('vik').innerHTML = 'Ответ неверный'
	}
}

vopros('Какая минимальная единица информации?', 'бит');
vopros('Сколько бит в 1 байте', '8')

document.getElementById('vik').innerHTML = 'Ты набрал ' + ball + ' очков';

