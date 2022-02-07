import { initScrollReveal } from "./scrollReveal.js";
initScrollReveal();

const btnMobile = document.querySelector('#btn-mobile');
btnMobile.addEventListener('click',() =>{
  const nav = document.querySelector('.nav');
  nav.classList.toggle("active");
  changeButton(btnMobile);
})

const changeButton = (button) =>{
  if(button.classList.contains("fa-bars")){
    button.classList.remove("fa-bars");
    button.classList.add("fa-times");
  }else{
    button.classList.remove("fa-times");
    button.classList.add("fa-bars");
  }
}

