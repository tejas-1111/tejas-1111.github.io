window.onload = function() {
    this.tops();
};
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

function typeWriter() {
   if (i < txt.length) {
    document.getElementById("t1").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    return;
  }
  else if(i==txt.length)
  {
      this.typeWriter2();
  }
}