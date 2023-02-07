
function buttonClick7()
{
    document.getElementById("screenID").innerHTML += 7;

}
function buttonClick8()
{
    document.getElementById("screenID").innerHTML += 8;

}
function buttonClick9()
{
    document.getElementById("screenID").innerHTML += 9;

}
function buttonClick1()
{
    document.getElementById("screenID").innerHTML += 1;

}
function buttonClick2()
{
    document.getElementById("screenID").innerHTML += 2;
}
function buttonClick3()
{
    document.getElementById("screenID").innerHTML += 3;

}
function buttonClick4()
{
    document.getElementById("screenID").innerHTML += 4;

}
function buttonClick5()
{
    document.getElementById("screenID").innerHTML += 5;

}
function buttonClick6()
{
    document.getElementById("screenID").innerHTML += 6;

}
function buttonClickClear()
{
    document.getElementById("screenID").innerHTML ="";

}function buttonClickDvd()
{
    document.getElementById("screenID").innerHTML += document.getElementById("btnDvd").innerHTML;

}
function buttonClickMlp()
{
    document.getElementById("screenID").innerHTML += document.getElementById("btnMlp").innerHTML;

}
function buttonClickMin()
{
    document.getElementById("screenID").innerHTML += document.getElementById("btnMin").innerHTML;

}
function buttonClickPlus()
{
    document.getElementById("screenID").innerHTML += document.getElementById("btnPlus").innerHTML;

}
function buttonClick0()
{
    document.getElementById("screenID").innerHTML += 0;

}

function buttonClickEqual()
{
    let a = document.getElementById("screenID").innerText;
    
    if (a.indexOf("-") !== -1)
    {
       const x1 =  a.substring(0,a.indexOf("-"));
       const x2 =  a.substring(a.indexOf("-")+1);;

       
       const x3 = parseFloat(x1);
       
       const x4 = parseFloat(x2);
       
       
       document.getElementById("screenID").innerText = parseFloat(x3-x4);
    
    }
    if (a.indexOf("+") !== -1)
    {
       let x1 =  a.substring(0,a.indexOf("+"));
       let x2 =  a.substring(a.indexOf("+")+1);

       x1 = x1.replace(" ","");
       let x3 = parseFloat(x1,10);
       let x4 = parseFloat(x2,10);
       
       document.getElementById("screenID").innerText = x3+x4;
    
    }
    if (a.indexOf("/") !== -1)
    {
       let x1 =  a.substring(0,a.indexOf("/"));
       let x2 =  a.substring(a.indexOf("/")+1);

       x1 = x1.replace(" ","");
       let x3 = parseFloat(x1,10);
       let x4 = parseFloat(x2,10);
       
       document.getElementById("screenID").innerText = x3 / x4;
    
    }
    if (a.indexOf("*") !== -1)
    {
       let x1 =  a.substring(0,a.indexOf("*"));
       let x2 =  a.substring(a.indexOf("*")+1);

       x1 = x1.replace(" ","");
       let x3 = parseFloat(x1,10);
       let x4 = parseFloat(x2,10);
       
       document.getElementById("screenID").innerText = x3 * x4;
    
    }

}
