		//NHL Team Array
		var xmlhttp = new XMLHttpRequest();
		var url = "nhlArray.txt";

		xmlhttp.onreadystatechange = function() {
		    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
		        var nhlArr = JSON.parse(xmlhttp.responseText);
		        myFunction(nhlArr);
		    }
		};
		xmlhttp.open("GET", url, true);
		xmlhttp.send();

		function myFunction(arr1) {
		    var out = "";
		    var i;
		    for(i = 0; i < arr1.length; i++) {
		        out += arr1[i].display + '<br>';
		    }
		    document.getElementById("nhl-teams").innerHTML = out;
		};

        //NBA Team Array
		var xmlhttp = new XMLHttpRequest();
		var url = "nbaArray.txt";

		xmlhttp.onreadystatechange = function() {
		    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
		        var nbaArr = JSON.parse(xmlhttp.responseText);
		        myFunction(nbaArr);
		    }
		};
		xmlhttp.open("GET", url, true);
		xmlhttp.send();

		function myFunction(arr2) {
		    var out = "";
		    var i;
		    for(i = 0; i < arr2.length; i++) {
		        out += arr2[i].display + '<br>';
		    }
		    document.getElementById("nba-teams").innerHTML = out;
		};


        //NFL Team Array
		var xmlhttp = new XMLHttpRequest();
		var url = "nflArray.txt";

		xmlhttp.onreadystatechange = function() {
		    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
		        var nflArr = JSON.parse(xmlhttp.responseText);
		        myFunction(nflArr);
		    }
		};
		xmlhttp.open("GET", url, true);
		xmlhttp.send();

		function myFunction(arr3) {
		    var out = "";
		    var i;
		    for(i = 0; i < arr3.length; i++) {
		        out += arr3[i].display + '<br>';
		    }
		    document.getElementById("nfl-teams").innerHTML = out;
		};

		//MLB Team Array
		var xmlhttp = new XMLHttpRequest();
		var url = "mlbArray.txt";

		xmlhttp.onreadystatechange = function() {
		    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
		        var mlbArr = JSON.parse(xmlhttp.responseText);
		        myFunction(mlbArr);
		    }
		};
		xmlhttp.open("GET", url, true);
		xmlhttp.send();

		function myFunction(arr4) {
		    var out = "";
		    var i;
		    for(i = 0; i < arr4.length; i++) {
		        out += arr4[i].display + '<br>';
		    }
		    document.getElementById("mlb-teams").innerHTML = out;
		};