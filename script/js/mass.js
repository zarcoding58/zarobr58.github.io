function massiv() {
	var data = [];
	b = confirm('Хотите ввести значение массива?');
	while (b==true) {
		data.push(prompt('введите значение элемента'));	
	b = confirm('Хотите ввести значение массива?');
	}
	return data;
}

var div = document.createElement('div');
var text ='';

function n() {
	text = text + 'Привет!';
	div.innerHTML = text;
	document.body.append(div);
}

var data2=[];

for (var i = 0; i < 20; i++) {
	data2[i] = Math.round(Math.random(6, 24)*100);
}



var max;
var min;
var sum = 0;
max = data2[0];
min = data2[0];

for (var i = 0; i < data2.length; i++) {
	if (max < data2[i]) {
		max = data2[i]
	}
	if (min > data2[i]) {
		min = data2[i]
	}
}

for (el of data2) {
	sum = sum + el;
}

document.write(data2 + '**** max = '+ max + '**** min = ' + min + '**** сумма = ' + sum);