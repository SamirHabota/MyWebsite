document.addEventListener("DOMContentLoaded", function (event) {
  document.getElementById("lang-backToTop").innerHTML =
    window.innerWidth <= 600 ? "top" : "back to top";
});
