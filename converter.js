const ki = document.getElementById('Ki');
console.log(ki);
const mycell = document.getElementById('mycell');


function Conversion() {
    const F=ki.value;
    mycell.value= F*2.20462262185;
    localStorage.setItem("Kilogram",ki.value);
    localStorage.setItem("Pounds",mycell.value);
};

function msg(){
    var x=document.getElementById("gmail");
    if(x.value==""){
        alert("fill the box");

    }
}
