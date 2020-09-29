
// const ki = document.getElementById('Ki');
// console.log(ki);
// const mycell = document.getElementById('mycell');


// function Conversion() {
//     const F=ki.value;
//     mycell.value= F*2.20462262185;
//     localStorage.setItem("Kilogram",ki.value);
//     localStorage.setItem("Pounds",mycell.value);
// };
function displayValue(a) {
	if(a>=0){
		document.getElementById('mycell').value = convertToPounds(a);
	}
	else{
		window.alert("Please provide a positive number");
		document.getElementById('ki').value = 0;
	}
}

function convertToPounds(a) {
	
	s = a*2.20462262185;
	//document.getElementById('mycell').value=s;
	return s;
}
