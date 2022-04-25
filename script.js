"use strict";

// mobile nav
const menuOpen = document.querySelector("#menu-open");
const menuClose = document.querySelector("#menu-close");
const overlay = document.querySelector("#overlay");
const menu = document.querySelector("#navigation");

// mobile dropdown
const featuresBtn = document.querySelector("#features-btn");
const featuresMenu = document.querySelector("#features-menu");
const companyBtn = document.querySelector("#company-btn");
const companyMenu = document.querySelector("#company-menu");
const featuresArrow = document.querySelector("#features-arrow");
const companyArrow = document.querySelector("#company-arrow");

// NAV OPEN CLOSE
menuOpen.addEventListener("click", (e) => {
  e.preventDefault();
  setTimeout(() => (overlay.hidden = false), 100);
  menu.classList.remove("nav-move");
});

menuClose.addEventListener("click", (e) => {
  e.preventDefault();
  setTimeout(() => (overlay.hidden = true), 100);
  menu.classList.add("nav-move");
  setTimeout(() => (featuresMenu.hidden = true), 100);
  setTimeout(() => (companyMenu.hidden = true), 100);
  setTimeout(() => (featuresArrow.src = "./images/icon-arrow-down.svg"), 100);
  setTimeout(() => (companyArrow.src = "./images/icon-arrow-down.svg"), 100);
});

// DROP MENU OPEN CLOSE
featuresBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (featuresMenu.hidden) {
    featuresMenu.hidden = false;
    featuresArrow.src = "./images/icon-arrow-up.svg";
  } else {
    featuresMenu.hidden = true;
    featuresArrow.src = "./images/icon-arrow-down.svg";
  }
});

companyBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (companyMenu.hidden) {
    companyMenu.hidden = false;
    companyArrow.src = "./images/icon-arrow-up.svg";
  } else {
    companyMenu.hidden = true;
    companyArrow.src = "./images/icon-arrow-down.svg";
  }
});
