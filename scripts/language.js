function loadEnglish() {
  document.getElementById("lang-startButton").innerHTML = "let's go";
  document.getElementById("lang-mainTitle").innerHTML = "learn";
  document.getElementById("lang-subTitle").innerHTML = "then do IT all";

  document.getElementById("lang-aboutLink").innerHTML = "about";
  document.getElementById("lang-coursesLink").innerHTML = "courses";
  document.getElementById("lang-teachingLink").innerHTML = "teaching";
  document.getElementById("lang-pricingLink").innerHTML = "pricing";
  document.getElementById("lang-reviewsLink").innerHTML = "reviews";
  document.getElementById("lang-contactLink").innerHTML = "contact";

  document.getElementById("lang-aboutLinkMobile").innerHTML = "about";
  document.getElementById("lang-coursesLinkMobile").innerHTML = "courses";
  document.getElementById("lang-teachingLinkMobile").innerHTML = "teaching";
  document.getElementById("lang-pricingLinkMobile").innerHTML = "pricing";
  document.getElementById("lang-reviewsLinkMobile").innerHTML = "reviews";
  document.getElementById("lang-contactLinkMobile").innerHTML = "contact";

  document.getElementById("lang-backToTop").innerHTML = "back to top";

  document.getElementById("lang-websiteTitle").innerHTML = "MyWebsite";

  document.getElementById("lang-titleAbout").innerHTML = "about";
  document.getElementById("lang-titleCourses").innerHTML = "courses";
  document.getElementById("lang-titleTeaching").innerHTML = "teaching";
  document.getElementById("lang-titlePricing").innerHTML = "pricing";
  document.getElementById("lang-titleReviews").innerHTML = "reviews";
  document.getElementById("lang-titleContact").innerHTML = "contact";

  document
    .getElementById("contact-textId")
    .setAttribute("placeholder", "Enter your message");
  document
    .getElementById("contact-emailId")
    .setAttribute("placeholder", "Enter your email");
  document
    .getElementById("contact-phoneId")
    .setAttribute("placeholder", "Enter your phone number");
}

function loadBosnian() {
  document.getElementById("lang-startButton").innerHTML = "pokreni";
  document.getElementById("lang-mainTitle").innerHTML = "nauči";
  document.getElementById("lang-subTitle").innerHTML = "da radiš sve";

  document.getElementById("lang-aboutLink").innerHTML = "o meni";
  document.getElementById("lang-coursesLink").innerHTML = "kursevi";
  document.getElementById("lang-teachingLink").innerHTML = "podučavanje";
  document.getElementById("lang-pricingLink").innerHTML = "cjenovnik";
  document.getElementById("lang-reviewsLink").innerHTML = "utisci";
  document.getElementById("lang-contactLink").innerHTML = "kontakt";

  document.getElementById("lang-aboutLinkMobile").innerHTML = "o meni";
  document.getElementById("lang-coursesLinkMobile").innerHTML = "kursevi";
  document.getElementById("lang-teachingLinkMobile").innerHTML = "podučavanje";
  document.getElementById("lang-pricingLinkMobile").innerHTML = "cjenovnik";
  document.getElementById("lang-reviewsLinkMobile").innerHTML = "utisci";
  document.getElementById("lang-contactLinkMobile").innerHTML = "kontakt";

  document.getElementById("lang-backToTop").innerHTML = "nazad na vrh";

  document.getElementById("lang-websiteTitle").innerHTML = "MojaStranica";

  document.getElementById("lang-titleAbout").innerHTML = "o meni";
  document.getElementById("lang-titleCourses").innerHTML = "kursevi";
  document.getElementById("lang-titleTeaching").innerHTML = "podučavanje";
  document.getElementById("lang-titlePricing").innerHTML = "cjenovnik";
  document.getElementById("lang-titleReviews").innerHTML = "utisci";
  document.getElementById("lang-titleContact").innerHTML = "kontakt";

  document
    .getElementById("contact-textId")
    .setAttribute("placeholder", "Unesite Vašu poruku");
  document
    .getElementById("contact-emailId")
    .setAttribute("placeholder", "Unesite Vašu email adresu");
  document
    .getElementById("contact-phoneId")
    .setAttribute("placeholder", "Unesite Vaš broj telefona");
}

function loadGerman() {
  document.getElementById("lang-startButton").innerHTML = "los gehts";
  document.getElementById("lang-mainTitle").innerHTML = "lerne";
  document.getElementById("lang-subTitle").innerHTML = "dann mach alles";

  document.getElementById("lang-aboutLink").innerHTML = "über";
  document.getElementById("lang-coursesLink").innerHTML = "kurse";
  document.getElementById("lang-teachingLink").innerHTML = "unterricht";
  document.getElementById("lang-pricingLink").innerHTML = "preisliste";
  document.getElementById("lang-reviewsLink").innerHTML = "bewertungen";
  document.getElementById("lang-contactLink").innerHTML = "kontakt";

  document.getElementById("lang-aboutLinkMobile").innerHTML = "über";
  document.getElementById("lang-coursesLinkMobile").innerHTML = "kurse";
  document.getElementById("lang-teachingLinkMobile").innerHTML = "unterricht";
  document.getElementById("lang-pricingLinkMobile").innerHTML = "preisliste";
  document.getElementById("lang-reviewsLinkMobile").innerHTML = "bewertungen";
  document.getElementById("lang-contactLinkMobile").innerHTML = "kontakt";

  document.getElementById("lang-backToTop").innerHTML = "zurück nach oben";

  document.getElementById("lang-websiteTitle").innerHTML = "MeineSeite";

  document.getElementById("lang-titleAbout").innerHTML = "über";
  document.getElementById("lang-titleCourses").innerHTML = "kurse";
  document.getElementById("lang-titleTeaching").innerHTML = "unterricht";
  document.getElementById("lang-titlePricing").innerHTML = "preisliste";
  document.getElementById("lang-titleReviews").innerHTML = "bewertungen";
  document.getElementById("lang-titleContact").innerHTML = "kontakt";

  document
    .getElementById("contact-textId")
    .setAttribute("placeholder", "Geben Sie Ihre Nachricht ein");
  document
    .getElementById("contact-emailId")
    .setAttribute("placeholder", "Geben Sie Ihre E-Mail Adresse ein");
  document
    .getElementById("contact-phoneId")
    .setAttribute("placeholder", "Geben Sie Ihre Telefonnummer ein");
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
