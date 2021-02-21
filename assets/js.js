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
function mouseOver() {
  document.getElementById("subnav").classList.add("header__navbar-item-subnav-show");
}

function mouseOut() {
  document.getElementById("subnav").classList.remove("header__navbar-item-subnav-show");
}