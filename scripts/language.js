function loadEnglish() {
  document.getElementById("lang-startButton").innerHTML = "let's go";
  document.getElementById("lang-mainTitle").innerHTML = "learn";
  document.getElementById("lang-subTitle").innerHTML = "then do IT all";
}

function loadBosnian() {
  document.getElementById("lang-startButton").innerHTML = "pokreni";
  document.getElementById("lang-mainTitle").innerHTML = "nauči";
  document.getElementById("lang-subTitle").innerHTML = "onda radi sve";
}

function loadGerman() {
  document.getElementById("lang-startButton").innerHTML = "los gehts";
  document.getElementById("lang-mainTitle").innerHTML = "lerne";
  document.getElementById("lang-subTitle").innerHTML = "dann mach alles";
}

function onToggleClick() {
  $(".lang-flag").click(function () {
    $(".language-dropdown").toggleClass("open");
  });
}

function changeLanguage() {
  $("ul.lang-list li").click(function () {
    $("ul.lang-list li").removeClass("selected");
    $(this).addClass("selected");
    if ($(this).hasClass("lang-en")) {
      $(".language-dropdown")
        .find(".lang-flag")
        .addClass("lang-en")
        .removeClass("lang-ger")
        .removeClass("lang-bih");
      loadEnglish();
    } else if ($(this).hasClass("lang-bih")) {
      $(".language-dropdown")
        .find(".lang-flag")
        .addClass("lang-bih")
        .removeClass("lang-ger")
        .removeClass("lang-en");
      loadBosnian();
    } else {
      $(".language-dropdown")
        .find(".lang-flag")
        .addClass("lang-ger")
        .removeClass("lang-en")
        .removeClass("lang-bih");
      loadGerman();
    }
    $(".language-dropdown").removeClass("open");
  });
}

$(document).ready(function () {
  onToggleClick();
  changeLanguage();
});
