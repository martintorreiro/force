const burguerMenu = document.getElementById("burguer-menu");
const mobileMenu = document.getElementById("mobile-menu");

const dropDownContainer = document.getElementById("dropdown-container");
const dropDownMenu = document.getElementById("dropdown-menu");

dropDownContainer.addEventListener("mouseover", (event) => {
  dropDownMenu.classList.add("dropdown-hover");
});

dropDownContainer.addEventListener("mouseout", (event) => {
  dropDownMenu.classList.remove("dropdown-hover");
});

burguerMenu.addEventListener("click", (e) => {
  if (mobileMenu.classList.contains("mobile-menu_open")) {
    mobileMenu.classList.remove("mobile-menu_open");
  } else {
    mobileMenu.classList.add("mobile-menu_open");
  }
});
