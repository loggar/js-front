if (CSS.supports("display: grid")) {
  document.getElementsByClassName("main").style.display = "grid";
} else {
  document.getElementsByClassName("main").style.display = "flex";
}
