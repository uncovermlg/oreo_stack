var str=document.getElementById("string").value;
var o=0;
var re=0;
var A=[]; //array to carry the stacking order;

function clear(){
o=0;
re=0;
A=[];
}

function valid(exp){

for (var x=0;x<exp.length;x++){
if ( exp[x] == 'o' || (exp[x] == 'r' && exp[x+1]=='e') ){
    if (exp[x]=='o'){
    o++;
    A.push(0);
    }
    else if (exp[x]=='r' && exp[x+1]=='e'){
    re++;
    x++;
    A.push(1);
    }}
else if (exp[x] == 'e' && exp[x-1]=='r') continue;
else{
alert("Enter a proper expression");
clear();
break;}
}
}
function stack(){
clear();
str=document.getElementById("string").value;
str= str.toLowerCase();
//alert(str);
valid(str);
//alert(re);
//alert(o);
//alert(A);
build();
}

function build(){
var src;

for(var i=0;i<A.length;i++){

var pic = document.createElement("img");
pic.setAttribute("alt", src);
pic.setAttribute("width", "150");
pic.setAttribute("height", "50");

var p = document.createElement("p");
console.log(i);
if (A[i]==0)
src="oreo.png";
else
src="cream.png";
pic.setAttribute("src", src);
//document.body.appendChild(pic);
//document.getElementById("i").appendChild(pic);
document.getElementById("image").appendChild(pic);
}
}