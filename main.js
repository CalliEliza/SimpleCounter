function CountFive() {
  	var text = "";
    var i = 0;
    while ( i < 6 ) {
      text += "<br>The number is " + i;  
      i++;
    }
  document.getElementById("OneToFive").innerHTML = text;
}

function Clear() {
    text = "";
		document.getElementById("OneToFive").innerHTML = text;
}