var i = 0;
		var flag1;
		var id1;
		function movie() {
			eval("document.images[1].src='im0" + i + ".jpg';");
			eval("document.images[0].src='im0" + i + ".jpg';");
			if (i == 0) document.getElementById("bus").innerHTML = 'Сессия напоминает сбор автографов у истеричных эстрадных звёзд.';
			if (i == 1) document.getElementById("bus").innerHTML = 'Только во время сессии и узнаешь, что в Интернете есть не всё…';
			if (i == 2) document.getElementById("bus").innerHTML = 'У студента два состояния: есть и спать. Но есть еще третье — сессия. Это когда не есть и не спать';
			if (i == 3) document.getElementById("bus").innerHTML = 'Я, конечно, очень хочу лета, но ради экзаменов я могу подождать и подольше.';
			if (i == 4) document.getElementById("bus").innerHTML = 'Во время сессии институт из существительного превращается в местоимение';
			i++;
			if (i > 4) i = 0;
			id1 = setTimeout("movie();", 5000);
		}