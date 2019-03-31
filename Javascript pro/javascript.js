
	var object = document.getElementById("object");
	var up = document.getElementById('up');
	var down = document.getElementById('down');

	up.onclick = function(){

		if (object.className == "btn btn-danger btn-lg down"){
			object.className = "btn btn-success btn-lg";
			object.innerHTML = "Not motivated to code?"
		}
	}
	down.onclick = function(){
			object.className = "btn btn-danger btn-lg down";
			object.innerHTML = "Eat some more. Lol"
	}
	
