import { initScrollReveal } from "./scrollReveal.js";
initScrollReveal();

const btnMobile = document.querySelector('#btn-mobile');
const itemMenu = document.querySelectorAll('.item-menu')

btnMobile.addEventListener('click',() =>{
  hideOrShowMenu();
  changeButton(btnMobile);
})

itemMenu.forEach(element => [
  element.addEventListener('click', () => {
    hideOrShowMenu();
    changeButton(btnMobile);
  })
]);

const changeButton = (button) =>{
  if(button.classList.contains("fa-bars")){
    button.classList.remove("fa-bars");
    button.classList.add("fa-times");
  }else{
    button.classList.remove("fa-times");
    button.classList.add("fa-bars");
  }
}

const hideOrShowMenu = () => {
  const nav = document.querySelector('.nav');
  nav.classList.toggle("active");
}

