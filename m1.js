function name1()
{console.log("mouseover");}
function name2()
{console.log("mouseout");}
var a=document.getElementById("search");
a.addEventListener("mouseover",name1);
a.addEventListener("mouseout",name2);