var txt1="Hello my name is Tejas Chaudhari";
var txt2="I am currently pursuing a dual degree ( B.Tech. + M.S. ) from : ";
var txt3="IIT Hyderab";
var txt4="IIIT Hyderabad";
var txt5="¯\_(ツ)_/¯"
var i=0; 
var j=txt2.length/2;
var k=(txt2.length/2)-1;
var l=2;
var f=0;

window.onload = function() {
    this.counter();
    this.tops();
    this.typeWriter1();
};

function counter()
{
  let count = localStorage.getItem("count");
  count++;
  document.getElementById("counter").innerHTML=count;
  localStorage.setItem("count",count);
}

function tops()
{
    var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
this.topFunction = function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
}

function typeWriter1() {
   if (i < txt1.length) {
    document.getElementById("t1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter1, 100);
    return;
  }
  if(i===txt1.length){
    i=0;
    setTimeout(typeWriter2, 100);
    return;
  }
}

function typeWriter2() {
if (k>=0) {
   document.getElementById("t2").innerHTML = txt2.charAt(k) + document.getElementById("t2").innerHTML + txt2.charAt(j);
   k--;
   j++;
   setTimeout(typeWriter2, 150);
   return;
 }
 if(k===-1){
   k=0;
   m=0;
   setTimeout(typeWriter3, 100);
   return;
 }
}

function typeWriter3() {
  if(i<txt3.length && f===0)
  {
    document.getElementById("t3").innerHTML += txt3.charAt(i);
    i++;
    setTimeout(typeWriter3, 100);
    return;
  }
  if(f===0)
  {
    f=1;
  }
  if(f===1)
  {
    f=2;
    setTimeout(typeWriter3, 500);
    return;
  }
  if(i>l && f===2)
  {
    document.getElementById("t3").innerHTML =  document.getElementById("t3").innerHTML.substr(0,i-1);
    i--;
    setTimeout(typeWriter3, 150);
    return;
  }
  if(f===2)
  {
    f=3;
  }
  if(i<txt4.length && f===3)
  {
    document.getElementById("t3").innerHTML += txt4.charAt(i);
    i++;
    setTimeout(typeWriter3, 100);
    return;
  }
  if(i===txt4.length)
  {
    i=0;
    setTimeout(typeWriter4, 100);
    return;
  }
}

function typeWriter4(){
  if (i < txt5.length) {
    document.getElementById("t4").innerHTML += txt5.charAt(i);
    i++;
    setTimeout(typeWriter4, 100);
    return;
  }
}
