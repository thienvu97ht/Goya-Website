/* Scroll */

window.onscroll = function() {showProduct()};

function showProduct() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementById("header__navbar-scroll").classList.add("scroll__change-color");
    document.querySelector(".app__container-product").classList.add("scroll__show-product");
  } else {
    document.getElementById("header__navbar-scroll").classList.remove("scroll__change-color");
  }

  if (document.body.scrollTop > 590 || document.documentElement.scrollTop > 590) {
    document.querySelector(".app__container-selling").classList.add("scroll__show-product");
  } 

  if (document.body.scrollTop > 1700 || document.documentElement.scrollTop > 1700) {
    document.querySelector(".container__trending").classList.add("scroll__show-product");
  } 

  if (document.body.scrollTop > 2350 || document.documentElement.scrollTop > 2350) {
    document.querySelector(".container__visit").classList.add("scroll__show-product");
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

