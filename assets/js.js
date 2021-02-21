/* Scroll change color */

window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header__navbar-scroll").classList.add("scroll_change-color");
  } else {
    document.getElementById("header__navbar-scroll").classList.remove("scroll_change-color");
  }
}

/* Show subnav */

/* Main */
function mouseOverMain() {
  document.querySelector(".header__navbar-main").classList.add("header__navbar-item-subnav-show");
}

function mouseOutMain() {
  document.querySelector(".header__navbar-main").classList.remove("header__navbar-item-subnav-show");
}

/* Shop */
function mouseOverShop() {
  document.querySelector(".header__navbar-shop").classList.add("header__navbar-item-subnav-show");
}

function mouseOutShop() {
  document.querySelector(".header__navbar-shop").classList.remove("header__navbar-item-subnav-show");
}