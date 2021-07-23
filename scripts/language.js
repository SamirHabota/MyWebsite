function loadEnglish() {
  console.log("english");
}

function loadBosnian() {
  console.log("bosnian");
}

function loadGerman() {
  console.log("german");
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
  loadEnglish();
  changeLanguage();
});
