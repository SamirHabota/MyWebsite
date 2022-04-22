function openMobileNav() {
  var burger = document.getElementById("burger");
  var links = document.getElementById("links");
  var quit = document.getElementById("quit");
  burger.style.padding = "40px 40px 200vw 200vw";
  setTimeout(() => {
    links.style.display = "flex";
  }, 300);
  quit.style.display = "inline";
}

function closeMobileNav() {
  var burger = document.getElementById("burger");
  var links = document.getElementById("links");
  var quit = document.getElementById("quit");
  burger.style.padding = "12px 12px 20px 20px";
  links.style.display = "none";
  quit.style.display = "none";
}
