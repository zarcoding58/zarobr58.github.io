var dlina;
var den;

alert('Привет! Это Спотривный калькулятор');

dlina = Number(prompt('Введите начальную дистанцию'));
den = prompt('Введите количество дней');

for (var i = 0; i < den; i++) {
	dlina = dlina + dlina/100;
}

document.getElementById('z').innerHTML = 'Длина через ' + den + ' дней ' + dlina + ' метров';