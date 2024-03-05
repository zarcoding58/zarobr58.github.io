var i = 0;
var d = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

function race() {
	var t = '';
	for (var a = 0; a <= d[i]; a++) {
		t = t + '<div class="time"></div>';
		document.getElementById('load').innerHTML = t;	

		i++;

		if (i == d.length) {
			i = 0;
		}
	}
	setTimeout(race, 180);
	
}

function race2() {
	var t2 = '';
	for (var a = 0; a <= d[i]; a++) {
		t2 = t2 + '<div class="time2"></div>';
		document.getElementById('load2').innerHTML = t2;	

		i++;

		if (i == d.length) {
			i = 0;
		}
	}
	setTimeout(race2, 200);
	
}

function race3() {
	var t3 = '';
	for (var a = 0; a <= d[i]; a++) {
		t3 = t3 + '<div class="time3"></div>';
		document.getElementById('load3').innerHTML = t3;	

		i++;

		if (i == d.length) {
			i = 0;
		}
	}
	setTimeout(race3, 200);
	
}

function race4() {
	var t4 = '';
	for (var a = 0; a <= d[i]; a++) {
		t4 = t4 + '<div class="time4"></div>';
		document.getElementById('load4').innerHTML = t4;	

		i++;

		if (i == d.length) {
			i = 0;
		}
	}
	setTimeout(race4, 200);
	
}

function race5() {
	var t5 = '';
	for (var a = 0; a <= d[i]; a++) {
		t5 = t5 + '<div class="time5"></div>';
		document.getElementById('load5').innerHTML = t5;	

		i++;

		if (i == d.length) {
			i = 0;
		}
	}
	setTimeout(race5, 200);
	
}

function race6() {
	var t6 = '';
	for (var a = 0; a <= d[i]; a++) {
		t6 = t6 + '<div class="time6"></div>';
		document.getElementById('load6').innerHTML = t6;	

		i++;

		if (i == d.length) {
			i = 0;
		}
	}
	setTimeout(race6, 200);
	
}

function race7() {
	var t7 = '';
	for (var a = 0; a <= d[i]; a++) {
		t7 = t7 + '<div class="time7"></div>';
		document.getElementById('load7').innerHTML = t7;	

		i++;

		if (i == d.length) {
			i = 0;
		}
	}
	setTimeout(race7, 200);
	
}

function race8() {
	var t8 = '';
	for (var a = 0; a <= d[i]; a++) {
		t8 = t8 + '<div class="time8"></div>';
		document.getElementById('load8').innerHTML = t8;	

		i++;

		if (i == d.length) {
			i = 0;
		}
	}
	setTimeout(race8, 200);
	
}

function race9() {
	var t9 = '';
	for (var a = 0; a <= d[i]; a++) {
		t9 = t9 + '<div class="time9"></div>';
		document.getElementById('load9').innerHTML = t9;	

		i++;

		if (i == d.length) {
			i = 0;
		}
	}
	setTimeout(race9, 200);
	
}

function race10() {
	var t3 = '';
	for (var a = 0; a <= d[i]; a++) {
		t10 = t10 + '<div class="time10"></div>';
		document.getElementById('load10').innerHTML = t10;	

		i++;

		if (i == d.length) {
			i = 0;
		}
	}
	setTimeout(race10, 200);
	
}

race();
race2();
race3();
race4();
race5();
race6();
race7();
race8();
race9();
race10();

