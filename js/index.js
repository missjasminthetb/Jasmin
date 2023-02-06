let ham = document.querySelector(".ham")
let navContent = document.querySelector(".hidden")

function hamburger(){
    navContent.classList.toggle("hidden")
    }
    
    ham.addEventListener('click',hamburger);