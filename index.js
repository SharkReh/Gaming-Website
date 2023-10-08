// All Variables
const Sidebar = document.getElementById("MySidebar");
const Closebtn = document.getElementById("icon");
const Desktop = document.getElementsByClassName("ForDesktop");
const SidebarForGames = document.getElementById("SidebarForGames");
// const Profil = document.getElementById("ForProfil");
const SearchbarIcon = document.getElementById("IconForSearchbar");
const Searchbar = document.getElementById("SearchbarText");
const Xmark = document.getElementById("XmarkForSearchbar");
const Cartbtn = document.getElementById("CartButton");
const Wishlistbtn = document.getElementById("WiButton");
const AngleDown = document.getElementById("fullDown");
const Subtheme = document.getElementById("ForSubtheme");
const Subtheme2 = document.getElementById("ForSubtheme2");
const AngleDown2 = document.getElementById("fullDownSupport");
const SupportSubtheme = document.getElementById("Support-Subtheme");
const SupportSubtheme2 = document.getElementById("Support-Subtheme2");
const ScrollingUp = document.getElementById("scroll-up");
const ChevronRight = document.getElementById("Chevron-Right");
const SearchIcon = document.getElementById("SearchbarSearchIcon");
const Language = document.getElementById("Language-Container");
const ForLanguage = document.getElementById("ForLanguage-Container");
const AnglesUp = document.getElementById("angles-up");
let Counter = document.getElementById("CartCounter");
let CounterWiList = document.getElementById("WiCounter");
let counter2 = 0;
let counter1 = 0;
// For Wishlist Counter
Wishlistbtn.addEventListener("click", WiList);
function WiList() {
  counter2 += 1;
  CounterWiList.textContent = counter2;
  CounterWiList.style.fontSize = "19px";
  CounterWiList.style.padding = "0 5px";
  CounterWiList.style.color = "white";
  CounterWiList.style.borderColor = "red";
  CounterWiList.style.borderRadius = "100px";
}
// For Cart Counter
Cartbtn.addEventListener("click", Cart);
function Cart() {
  counter1 += 1;
  Counter.textContent = counter1;
  Counter.style.fontSize = "19px";
  Counter.style.padding = "0 5px";
  Counter.style.color = "white";
  Counter.style.borderColor = "red";
  Counter.style.borderRadius = "100px";
}
// Removing Searchbar
function RemoveSearchbar() {
  Searchbar.style.width = "0%";
  Searchbar.style.padding = "0px";
  Searchbar.style.paddingLeft = "0px";
  Searchbar.style.transition = "0.3s";
  Xmark.style.fontSize = "0px";
  SearchIcon.style.fontSize = "0px";
}
// Add a Searchbar
function ForSearchbar() {
  SearchIcon.style.fontSize = "23px";
  Xmark.style.fontSize = "32px";
  Searchbar.style.width = "19%";
  Searchbar.style.padding = "14px";
  Searchbar.style.paddingLeft = "13px";
}
// For rotating the Profil
/*Profil.addEventListener("click", profil);
function profil() {
  Profil.style.transform = "rotateX(360deg)";
  Profil.style.transition = "0.5s";
}*/
// For opening the Searchbar
function forOpen() {
  Sidebar.style.width = "1000px";
  Closebtn.style.marginLeft = "0px";
}
// For closing a Searchbar
function forClose() {
  Sidebar.style.width = "0px";
  Closebtn.style.marginLeft = "0px";
}
// Darkmode Code
function darkmode() {
  let element = document.body;
  element.classList.toggle("dark-mode");
}
// For Games Searchbar Code
SidebarForGames.style.display = "none";
function IconPC() {
  SidebarForGames.style.width = "190px";
  SidebarForGames.style.height = "30%";
  SidebarForGames.style.display = "block";
}

function PCclose() {
  SidebarForGames.style.width = "0px";
  SidebarForGames.style.height = "0%";
}

AngleDown.addEventListener("click", function (open) {
  AngleDown.classList.toggle("full");
  Subtheme.classList.toggle("open");
  Subtheme2.classList.toggle("open");
});
AngleDown2.addEventListener("click", function () {
  AngleDown2.classList.toggle("fullSupport");
  SupportSubtheme.classList.toggle("openSupport");
  SupportSubtheme2.classList.toggle("openSupport");
});
// When the user scroll down 20 pixels from the top, show the button
window.onscroll = function () {
  Scroll();
};
function Scroll() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    ScrollingUp.style.display = "block";
  } else {
    ScrollingUp.style.display = "none";
  }
}

// Scroll to the top of the button, when the user clicked
function ScrollUp() {
  document.body.scrollTop = 0; // Safari
  document.documentElement.scrollTop = 0; // Chrome, Firefox, IE and Opera
}

Language.addEventListener("click", function (openForLanguage) {
  ForLanguage.classList.toggle("openForLanguage");
  AnglesUp.classList.toggle("openAnglesUp");
});
