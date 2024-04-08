
var calcBtn = document.querySelector(".calc")
var resetBtn = document.querySelector(".reset")


function validateInputs() {
    var countOfWarb = document.getElementById("count-warb").value;
    var numberOfWarb = document.getElementById("warb").value;
    var sokingOfWarb = document.getElementById("soaking-warb").value;
    var countOfWeft = document.getElementById("count-weft").value;
    var numberOfWeft = document.getElementById("weft").value;
    var sokingOfWeft = document.getElementById("soaking-weft").value;

    if (isNaN(countOfWarb) || isNaN(numberOfWarb) || isNaN(sokingOfWarb) || isNaN(countOfWeft) || isNaN(numberOfWeft) || isNaN(sokingOfWeft) ||
        countOfWarb <= 0 || numberOfWarb <= 0 || sokingOfWarb <= 0 || countOfWeft <= 0 || numberOfWeft <= 0 || sokingOfWeft <= 0) {
        alert("Please enter valid numeric values greater than zero for all inputs.");
        return false; 
    }

    
    return true;
}


var calcBtn = document.querySelector(".calc");
calcBtn.onclick = function() {
    if (validateInputs()) { 
        calcWeight();
    }
}


var resetBtn = document.querySelector(".reset");
resetBtn.onclick = function() {
    location.reload(); 
}


function calcWeight(){
    var selctList = document.getElementById("select-list").value;
    var countOfWarb = document.getElementById("count-warb");
    var numberOfWarb = document.getElementById("warb")
    var sokingOfWarb = document.getElementById("soaking-warb")
   

    

if(selctList === "cotton"){
    whightOfWarb =((numberOfWarb.value) * 100 * (sokingOfWarb.value) * 453.6)/(840*.91*(countOfWarb.value))
    
}else if(selctList === "linen") {
    whightOfWarb =((numberOfWarb.value) * 100 * (sokingOfWarb.value) * 453.6)/(300*.91*(countOfWarb.value))
}else if(selctList === "wool") {
    whightOfWarb =((numberOfWarb.value) * 100 * (sokingOfWarb.value) * 453.6)/(560*.91*(countOfWarb.value))
    
}else if(selctList === "metric") {
    whightOfWarb =((numberOfWarb.value) * 100 * (sokingOfWarb.value) * 1)/(countOfWarb.value)
}
else if(selctList === "denier") {
    whightOfWarb =((numberOfWarb.value) * 100 * (sokingOfWarb.value) * (countOfWarb.value))/(9000)
}
else if(selctList === "tex") {
    whightOfWarb =((numberOfWarb.value) * 100 * (sokingOfWarb.value) * (countOfWarb.value))/(1000)
}

else if(selctList === "detex") {
    whightOfWarb =((numberOfWarb.value) * 100 * (sokingOfWarb.value) * (countOfWarb.value))/(10000)
}

    var selctListWeft = document.getElementById("select-list-weft").value;
    var countOfWeft = document.getElementById("count-weft");
    var numberOfweft = document.getElementById("weft")
    var sokingOfWweft = document.getElementById("soaking-weft")
   

if(selctListWeft === "cotton"){
    whightOfWeft =((numberOfweft.value) * 100 * (sokingOfWweft.value) * 453.6)/(840*.91*(countOfWeft.value))

}else if(selctListWeft === "linen") {
    whightOfWeft =((numberOfweft.value) * 100 * (sokingOfWweft.value) * 453.6)/(300*.91*(countOfWeft.value))
}else if(selctListWeft === "wool") {
    whightOfWeft =((numberOfweft.value) * 100 * (sokingOfWweft.value) * 453.6)/(560*.91*(countOfWeft.value))
    
}else if(selctListWeft === "metric") {
    whightOfWeft =((numberOfweft.value) * 100 * (sokingOfWweft.value) * 1)/(countOfWeft.value)
}
else if(selctListWeft === "denier") {
    whightOfWeft =((numberOfweft.value) * 100 * (sokingOfWweft.value) * (countOfWeft.value))/(9000)
}
else if(selctListWeft === "tex") {
    whightOfWeft =((numberOfweft.value) * 100 * (sokingOfWweft.value) * (countOfWeft.value))/(1000)
}

else if(selctListWeft === "detex") {
    whightOfWeft =((numberOfweft.value) * 100 * (sokingOfWweft.value) * (countOfWeft.value))/(10000)
}

var whight =Math.floor( whightOfWarb + whightOfWeft) ;
var result = document.querySelector(".result");
 
result.innerHTML ="the whight is "+ whight+ " g/m²" 
return whightOfWarb + whightOfWeft ;
}



