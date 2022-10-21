const username = document.getElementById("username")
const password = document.getElementById("password")

const form = document.getElementById("form");
const title = document.getElementById("title");
const loader = document.getElementById("loader");

function login() {
    if(username.value == "admin",password.value == "123"){
        console.log("correct")
        loggingIn();
    }else{
        console.log("incorrect")
    }
}

function loggingIn(){
   setTimeout(hide_form,780);
   form.style.animation = "fading 1s";
   title.style.animation = "fading 1s";
}

function hide_form(){
    form.style.display = "none";
    title.style.display = "none";

    
    loader.style.animation = "fadeIn .2s";
    loader.style.visibility = "visible";
    setTimeout(loading, 4000);
}

function loading(){
  console.log("next site");
  loader.style.animation = "fading 1s";
  setTimeout(nextSite, 780);
}

function nextSite(){
  window.location.href = "mainDataBase.html";
}
