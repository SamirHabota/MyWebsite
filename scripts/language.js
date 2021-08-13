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
  document.getElementById("sendMailButtonId").innerHTML = "send";

  document.getElementById("lang-reachMe").innerHTML = "reach me";
  document.getElementById("lang-phoneApps").innerHTML =
    "Phone, WhatsApp, Viber, Telegram:";
  document.getElementById("lang-website").innerHTML = "website";
  document.getElementById("lang-p1").innerHTML =
    "The website was a solo project";
  document.getElementById("lang-p2").innerHTML =
    "All inspiration is open source";
  document.getElementById("lang-p3").innerHTML =
    "It's source code can be found on GitHub";
  document.getElementById("lang-socials").innerHTML = "socials";
  document.getElementById("lang-copyright").innerHTML =
    "samir habota with OctoDev © 2021";

  document
    .getElementById("officialPhoneNumberId")
    .setAttribute("title", "Cick to copy");

  document
    .getElementById("lang-moreReviews")
    .setAttribute("title", "more reviews");

  document
    .getElementById("lang-reviewLink")
    .setAttribute(
      "href",
      "https://www.evernote.com/shard/s574/sh/299847b1-e430-55c5-5dce-a21a0ceb6793/19af8f5f0ead2f8709a8be8d1c1053df"
    );

  document.getElementById("lang-aboutText").innerHTML =
    "My name is Habota Samir and during my many years of experience in the IT industry as well as teaching I gained the necessary experience of transferring knowledge in a very intuitive and interesting way, noticed the advantages and disadvantages of various teaching techniques, and built my tutoring based on successful impressions and achievements. About my background, I am an engineer of information technologies with 9 years of active programming, 6 years of tutoring and 3 years of active work in the industry under my belt. My way of teaching is unique and guarantees a new and better view of the wide world of programming.";

  document.getElementById("lang-teachingText").innerHTML =
    "The teaching itself seeks to adapt to the best way for the client to understand everything. The tutoring is a combination of visual metaphors, explanations and making concrete examples, tasks and projects. Each topic and area of teaching is explained to the smallest details, until the client himself feels that he has understood the area and is ready to continue, which is one of the different and special conventions of the lectures. Depending on the situation and the client's requirements, lectures are held in a private location live or within an online classroom, one on one or in a group. All arrangements are very flexible, in order to create the most productive atmosphere for the client.";

  var array = document.getElementsByClassName("lang-courseProgrammingTheory");
  for (var i = 0; i < array.length; i++) {
    array.item(i).innerHTML = "Programming theory";
  }

  array = document.getElementsByClassName("lang-courseApiTheory");
  for (var i = 0; i < array.length; i++) {
    array.item(i).innerHTML = "REST API theory";
  }

  array = document.getElementsByClassName("lang-courseDatabases");
  for (var i = 0; i < array.length; i++) {
    array.item(i).innerHTML = "Relational databases theory";
  }

  array = document.getElementsByClassName("lang-courseHosting");
  for (var i = 0; i < array.length; i++) {
    array.item(i).innerHTML = "Hosting services";
  }

  array = document.getElementsByClassName("lang-courseGit");
  for (var i = 0; i < array.length; i++) {
    array.item(i).innerHTML = "Source Control: Git and GitHub";
  }
}

function loadBosnian() {
  document.getElementById("lang-startButton").innerHTML = "započni";
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

  document.getElementById("sendMailButtonId").innerHTML = "pošalji";

  document.getElementById("lang-reachMe").innerHTML = "do mene";
  document.getElementById("lang-phoneApps").innerHTML =
    "Telefon, WhatsApp, Viber, Telegram:";
  document.getElementById("lang-website").innerHTML = "stranica";
  document.getElementById("lang-p1").innerHTML =
    "stranica je bila solo projekat";
  document.getElementById("lang-p2").innerHTML =
    "sva inspiracija je open source";
  document.getElementById("lang-p3").innerHTML =
    "source code se može naći na GitHub-u";
  document.getElementById("lang-socials").innerHTML = "mreže";
  document.getElementById("lang-copyright").innerHTML =
    "samir habota sa OctoDev © 2021";

  document
    .getElementById("officialPhoneNumberId")
    .setAttribute("title", "kliknuti za kopiranje");

  document
    .getElementById("lang-moreReviews")
    .setAttribute("title", "još utisaka");

  document
    .getElementById("lang-reviewLink")
    .setAttribute(
      "href",
      "https://www.evernote.com/shard/s574/sh/299847b1-e430-55c5-5dce-a21a0ceb6793/19af8f5f0ead2f8709a8be8d1c1053df"
    );

  document.getElementById("lang-aboutText").innerHTML =
    "Moje ime je Habota Samir i tokom svog dugogodišnjeg iskustva u IT industriji kao i podučavanju sam stekao neophodno iskustvo i znanje o prenošenju gradiva na veoma intuitivan i zanimljiv način, uočio prednosti i nedostatke raznih tehnika podučavanja, te izgradio svoj način na osnovu uspješnih utisaka i postignutih rezultata. O mojoj pozadini bih naglasio da sam diplomirani inžinjer informacijskih tehnologija uz 9 godina aktivnog programiranja, 6 godina predavanja i 3 godine aktivnog rada u industriji. Način predavanja je jedinstven i garantuje novi i kvalitetniji pogled na široki svijet programiranja.";

  document.getElementById("lang-teachingText").innerHTML =
    "Samo podučavanje se nastoji prilagoditi najboljem načinu shvatanja klijenta. Nastava je kombinacija vizuelnih metafora, objašnjenja i izrade konkretnih primjera, zadataka i projekata. Svaka tema i oblast podučavanja se prelazi u najsitnije detalje, dok klijent sam ne osjeti da je oblast shvatio i ne bude spreman nastaviti dalje, što je jedna od drugačijih i posebnih konvencija predavanja. U zavisnosti od situacije i zahtjeva klijenta, predavanja se održavaju na privatnoj lokaciji uživo ili unutar online učionice, jedan na jedan ili u grupi. Svi dogovori su maksimalno fleksibilni, kako bi se stvorila najproduktivnija atmosfera za klijenta.";

  var array = document.getElementsByClassName("lang-courseProgrammingTheory");
  for (var i = 0; i < array.length; i++) {
    array.item(i).innerHTML = "Teorija programiranja";
  }

  array = document.getElementsByClassName("lang-courseApiTheory");
  for (var i = 0; i < array.length; i++) {
    array.item(i).innerHTML = "REST API teorija";
  }

  array = document.getElementsByClassName("lang-courseDatabases");
  for (var i = 0; i < array.length; i++) {
    array.item(i).innerHTML = "Teorija relacionih baza";
  }

  array = document.getElementsByClassName("lang-courseHosting");
  for (var i = 0; i < array.length; i++) {
    array.item(i).innerHTML = "Hosting servisi";
  }

  array = document.getElementsByClassName("lang-courseGit");
  for (var i = 0; i < array.length; i++) {
    array.item(i).innerHTML = "Source Control: Git i GitHub";
  }
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

  document.getElementById("sendMailButtonId").innerHTML = "senden";

  document.getElementById("lang-reachMe").innerHTML = "erreiche mich";
  document.getElementById("lang-phoneApps").innerHTML =
    "Telefon, WhatsApp, Viber, Telegram:";
  document.getElementById("lang-website").innerHTML = "seite";
  document.getElementById("lang-p1").innerHTML =
    "die seite war ein solo projekt";
  document.getElementById("lang-p2").innerHTML =
    "alle inspiration ist open source";
  document.getElementById("lang-p3").innerHTML =
    "der source code ist auf GitHub";
  document.getElementById("lang-socials").innerHTML = "soziale";
  document.getElementById("lang-copyright").innerHTML =
    "samir habota mit OctoDev © 2021";

  document
    .getElementById("officialPhoneNumberId")
    .setAttribute("title", "anklicken zum kopieren ");

  document
    .getElementById("lang-moreReviews")
    .setAttribute("title", "mehr bewertungen");

  document
    .getElementById("lang-reviewLink")
    .setAttribute(
      "href",
      "https://www.evernote.com/shard/s574/sh/299847b1-e430-55c5-5dce-a21a0ceb6793/19af8f5f0ead2f8709a8be8d1c1053df"
    );

  document.getElementById("lang-aboutText").innerHTML =
    "Mein Name ist Habota Samir und während meiner langjährigen Erfahrung in der IT-Branche sowie in der Lehre habe ich die nötige Erfahrungen eingesammelt, Wissen sehr intuitiv und interessant zu vermitteln, die Vor- und Nachteile verschiedener Unterrichtstechniken erkannt und meine Nachhilfe aufgebaut basierend auf erfolgreichen Eindrücken und Leistungen. Über meinen Hintergrund bin ich ein Ingenieur für Informationstechnologien mit 9 Jahren aktiver Programmierung, 6 Jahren im Unterricht und 3 Jahren aktiver Arbeit in der Industrie. Meine Art zu unterrichten ist einzigartig und garantiert einen neuen und besseren Blick auf die weite Welt des Programmierens.";

  document.getElementById("lang-teachingText").innerHTML =
    "Das Verständnis von dem Unterricht selbst wird bestmöglich dem Klienten angepasst. Der Unterricht ist eine Kombination aus visuellen Metaphern, Erklärungen und konkreten Beispielen, Aufgaben und Projekten. Jedes Thema und Lehrgebiet wird bis ins kleinste Detail erklärt, bis der Klient selbst das Gefühl hat, das Gebiet verstanden zu haben und bereit ist, weiterzumachen, was eine der unterschiedlichen und besonderen Konventionen der Vorlesung ist. Je nach Situation und Kundenwunsch werden die Vorträge an einem privaten Ort live oder in einem Online-Klassenraum, einzeln oder in der Gruppe gehalten. Alle Arrangements sind maximal flexibel, um die produktivste Atmosphäre für den Kunden zu erschaffen.";

  var array = document.getElementsByClassName("lang-courseProgrammingTheory");
  for (var i = 0; i < array.length; i++) {
    array.item(i).innerHTML = "Programmiertheorie";
  }

  array = document.getElementsByClassName("lang-courseApiTheory");
  for (var i = 0; i < array.length; i++) {
    array.item(i).innerHTML = "REST API Theorie";
  }

  array = document.getElementsByClassName("lang-courseDatabases");
  for (var i = 0; i < array.length; i++) {
    array.item(i).innerHTML = "Relationale Datenbanken Theorie";
  }

  array = document.getElementsByClassName("lang-courseHosting");
  for (var i = 0; i < array.length; i++) {
    array.item(i).innerHTML = "Hosting";
  }

  array = document.getElementsByClassName("lang-courseGit");
  for (var i = 0; i < array.length; i++) {
    array.item(i).innerHTML = "Source Control: Git und GitHub";
  }
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
