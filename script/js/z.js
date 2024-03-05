var dlina;
var den;

alert('Привет! Это спортивный калькулятор');

dlina = Number(prompt('Введите начальную дистанцию'));
den = prompt('введите количество дней');

for (var i = 0; i < den; i++) {
	dlina = dlina + dlina/100;
}

document.getElementById('z').innerHTML = 'Длина дистанции через ' + den + ' дней = ' + dlina + ' метров';

