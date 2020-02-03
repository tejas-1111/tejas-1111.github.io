var slide=-1;
var slide0=-1;
var i=0;
var j=0;
window.onload = function() {
    this.tops();
    this.next();
    this.next0();
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

var names=[
    "Book 1: A Game of Thrones",
    "Book 2: A Clash of Kings",
    "Book 3: A Storm of Swords",
    "Book 4: A feast for Crows",
    "Book 5: A Dance with Dragons"
]

var quotes=[
    "UNIX is very simple, it just needs a genius to understand its simplicity.",
    "There is nothing more deceptive than an obvious fact.",
    "Insanity is doing the same thing over and over again and expecting a different result.",
    "Good Players win races, great ones break records, Legends change the game",
    "The first principle is that you must not fool yourself and you are the easiest person to fool."
]

var quoters=[
    "Dennis Ritchie",
    "Arthur Conan Doyle",
    "Albert Einstein",
    "Anonymous",
    "Richard Feynman"
]

function next()
{ 
    slide++;
    slide=slide%5;
    slides=document.getElementsByClassName("slides");
    for(var i=0; i < 5;i++)
    {
        slides[i].style.display="none";
    }
    slides[slide].style.display="block";
    document.getElementById("bookname").innerHTML=names[slide];
}

function typeWriter()
{
    if (j < quoters[slide0].length) {
        document.getElementById("name").innerHTML += quoters[slide0].charAt(j);
        j++;
        setTimeout(typeWriter, 75);
        return;
      }
      setTimeout(typeWriter1, 200);
}

function typeWriter1(){
    if (i < quotes[slide0].length) {
     document.getElementById("quotes").innerHTML += quotes[slide0].charAt(i);
     i++;
     setTimeout(typeWriter1, 75);
     return;
   }
}

function next0()
{
    i=0;
    j=0;
    document.getElementById("quotes").innerHTML="";
    document.getElementById("name").innerHTML="";
    slide0++;
    slide0=slide0%5;
    slides0=document.getElementsByClassName("slides0");
    for(var k=0; k < 5;k++)
    {
        slides0[k].style.display="none";
    }
    slides0[slide0].style.display="block";
    typeWriter();
}

const loaded = () => {

    const form_submit_button = document.querySelector(".form-submit-button");

    let table_count = localStorage.getItem("table_count");

    if (table_count == null)
        table_count = 0;

    if (table_count != 0) {
        let table = document.querySelector(".myTable");
        for (let i = 1; i <= table_count; i++) {
            let row = table.insertRow();
            let table_data = JSON.parse(localStorage.getItem(i));

            let name_cell = row.insertCell();
            name_cell.innerHTML = table_data.td_name;
            let skill_cell = row.insertCell();
            skill_cell.innerHTML = table_data.td_skill;
            let skill_level_cell = row.insertCell();
            skill_level_cell.innerHTML = table_data.td_skill_level;
            let comment_cell = row.insertCell();
            comment_cell.innerHTML = table_data.td_comment;
        }
    }

    form_submit_button.onclick = () => {

        table_count++;

        localStorage.setItem("table_count", table_count);

        let name = document.querySelector("#first-name").value;
        let skill = document.querySelector("#skill").value;
        let skill_level = document.querySelector("#skill-level").value;
        let comment = document.querySelector("#skill-comment").value;

        let table = document.querySelector(".myTable");
        let row = table.insertRow();

        let name_cell = row.insertCell();
        name_cell.innerHTML = name;
        let skill_cell = row.insertCell();
        skill_cell.innerHTML = skill;
        let skill_level_cell = row.insertCell();
        skill_level_cell.innerHTML = skill_level;
        let comment_cell = row.insertCell();
        comment_cell.innerHTML = comment;

        let table_data = {
            td_name: name,
            td_skill: skill,
            td_skill_level: skill_level,
            td_comment: comment
        };

        localStorage.setItem(table_count, JSON.stringify(table_data));
        return false;
    }

}


window.addEventListener("DOMContentLoaded", loaded);