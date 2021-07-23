var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1700,
  speedAsDuration: true,
});

document.addEventListener("scroll", function (e) {
  if (window.scrollY > 0) {
    let content = document.getElementById("content");
    var topValue = Number(
      content.style.top.substring(0, content.style.top.length - 1)
    );
    if (topValue < 4) {
      document.getElementById("startButtons").classList.add("none");
      document.getElementById("navigation").classList.remove("none");
      document.getElementById("toTop").classList.remove("none");
    } else {
      document.getElementById("startButtons").classList.remove("none");
      document.getElementById("navigation").classList.add("none");
      document.getElementById("toTop").classList.add("none");
    }
  }
  if (window.innerWidth <= 600 && topValue < 4) {
    document.getElementById("mobileNavId").classList.remove("none");
    document.getElementById("desktopNavId").classList.add("none");
  } else {
    document.getElementById("mobileNavId").classList.add("none");
    document.getElementById("desktopNavId").classList.remove("none");
  }
});
