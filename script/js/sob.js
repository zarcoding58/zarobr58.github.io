var sumClick = 10;

function onClickButton() {
	//alert('Ты нажал но кнопку');
	
	sumClick--;

	console.log(sumClick);
}

function vvod(el) {
	if (el.value == 'Давай ограбим банк') {
		alert('внимание! ограбление!');
	}
	console.log(el.value);
}

function kv() {
	for (var i = 0; i < 10; i++) {
		document.write(i*i);
		document.write(' | ');
	}
}