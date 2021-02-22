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

/* Product */
function mouseOverProduct() {
  document.querySelector(".header__navbar-product").classList.add("header__navbar-item-subnav-show");
}

function mouseOutProduct() {
  document.querySelector(".header__navbar-product").classList.remove("header__navbar-item-subnav-show");
}

/* Pages */
function mouseOverPages() {
  document.querySelector(".header__navbar-pages").classList.add("header__navbar-item-subnav-show");
}

function mouseOutPages() {
  document.querySelector(".header__navbar-pages").classList.remove("header__navbar-item-subnav-show");
}

/* Journal */
function mouseOverJournal() {
  document.querySelector(".header__navbar-journal").classList.add("header__navbar-item-subnav-show");
}

function mouseOutJournal() {
  document.querySelector(".header__navbar-journal").classList.remove("header__navbar-item-subnav-show");
}

/*  */

