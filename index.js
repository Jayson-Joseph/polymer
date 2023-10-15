const menuBtn = document.getElementsByClassName("header__menu-btn")[0]
const headerNav = document.getElementsByClassName("header__nav")[0]

const menuToggle = () => {
  menuBtn.classList.toggle("header__menu-btn--active")
  headerNav.classList.toggle("header__nav--active")
}

menuBtn.addEventListener("click", menuToggle)