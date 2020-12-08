"use strict";

const menu = document.querySelector(".menu-burger");

menu.onclick = function(){
    menu.classList.toggle("menu-burger--open");
    document.querySelector(".navigation").classList.toggle("navigation--open");
};
