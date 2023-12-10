
function convert() {

    var celsiusvalue = parseFloat(document.getElementById("celsius").value);
    var type = document.getElementById("type").value;

    if(type === "fahrenheit"){
        var temp = (celsiusvalue * 9/5) + 32 ;
    }if(type === "kelvin"){
        var temp = (celsiusvalue + 273.15);
    }

    document.getElementById("result").innerHTML = ( "Temperature in " + type + " -- " + temp.toFixed(2) );
}  
