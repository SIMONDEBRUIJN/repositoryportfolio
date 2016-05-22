"use strict";

var titel = "jQuery - de 'basis'";

//commentaar
//verschillende types 
var uitkomst1 = 4 * 5 + 10;
var uitkomst2 = 4 * (5 + 10);
var jaOfNeen = true;
var lijst = [1,2,3];

//conditie
if(jaOfNeen === true)
    {
        document.write("ja<br>");        
        
    }
else
    {
        document.write("neen<br>");  
        
    }
//functies
function telOp()
{
    return uitkomst1 + uitkomst2
    
}

document.write(uitkomst1 + " en " + uitkomst2 + "<br>");
document.write(telOp().toString());