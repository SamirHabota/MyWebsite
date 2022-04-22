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

  document.getElementById("lang-pricingProgrammingTheory").innerHTML =
    "Programming theory";
  document.getElementById("lang-pricingApiTheory").innerHTML =
    "REST API theory";
  document.getElementById("lang-pricingDatabases").innerHTML =
    "Relational databases theory";
  document.getElementById("lang-pricingGit").innerHTML =
    "Source Control: Git and GitHub";
  document.getElementById("lang-pricingHosting").innerHTML = "Hosting services";

  document.getElementById("lang-priceAnnouncement").innerHTML =
    "Price for one 60 minute lecture, with one meeting lasting minimally two lectures";

  array = document.getElementsByClassName(
    "lang-courseProgrammingTheoryContent"
  );
  for (var i = 0; i < array.length; i++) {
    array.item(i).innerHTML =
      "Learn everything there is to know about basic and advanced programing, in the most intuitive way.";
  }

  array = document.getElementsByClassName("lang-courseCCppContent");
  for (var i = 0; i < array.length; i++) {
    array.item(i).innerHTML =
      "One of the most utilised and multi-purpose programming languages used for hardware development, building operating systems, browsers etc.";
  }

  array = document.getElementsByClassName("lang-courseCsharpContent");
  for (var i = 0; i < array.length; i++) {
    array.item(i).innerHTML =
      "One of the founding options for modern multi-purpose programming, with web, server, desktop, game and mobile development integration and much more.";
  }

  array = document.getElementsByClassName("lang-courseHtmlCssJsContent");
  for (var i = 0; i < array.length; i++) {
    array.item(i).innerHTML =
      "The holy trinity of frontend development and website building, the foundation for every modern frontend framework.";
  }

  array = document.getElementsByClassName("lang-courseApiTheoryContent");
  for (var i = 0; i < array.length; i++) {
    array.item(i).innerHTML =
      "Get to know and understand the modern internet, its protocols and the intricate ways of data travel.";
  }

  array = document.getElementsByClassName("lang-courseDotnetContent");
  for (var i = 0; i < array.length; i++) {
    array.item(i).innerHTML =
      "Combine your knowledge, and build almost every type of software with one of the most powerful and versatile multi-purpose framework.";
  }

  array = document.getElementsByClassName("lang-courseNodeJsContent");
  for (var i = 0; i < array.length; i++) {
    array.item(i).innerHTML =
      "Get straight into building server side software with one of the most utilized programming language.";
  }

  array = document.getElementsByClassName("lang-courseDatabaseTheoryContent");
  for (var i = 0; i < array.length; i++) {
    array.item(i).innerHTML =
      "Create and understand your own entities, relationships and databases, get to know normalization and graph creation.";
  }

  array = document.getElementsByClassName("lang-courseMSSQLContent");
  for (var i = 0; i < array.length; i++) {
    array.item(i).innerHTML =
      "Get proficient with data, analytics, querying and learn the backbone of every successful application.";
  }

  array = document.getElementsByClassName("lang-courseReactContent");
  for (var i = 0; i < array.length; i++) {
    array.item(i).innerHTML =
      "Learn one of the most popular and fastest growing frontend frameworks and libraries using jsx and tsx syntax.";
  }

  array = document.getElementsByClassName("lang-courseAngularContent");
  for (var i = 0; i < array.length; i++) {
    array.item(i).innerHTML =
      "Build stable and enterprise applications using TypeScript, with Google's main frontend framework.";
  }

  array = document.getElementsByClassName("lang-courseGithubContent");
  for (var i = 0; i < array.length; i++) {
    array.item(i).innerHTML =
      "Manage and control your code with the most powerful tool and must have skill for every serious developer.";
  }

  array = document.getElementsByClassName("lang-courseBootstrapContent");
  for (var i = 0; i < array.length; i++) {
    array.item(i).innerHTML =
      "Build fast and responsive sites with the most popular HTML, CSS, and JS library.";
  }

  array = document.getElementsByClassName("lang-courseHostingContent");
  for (var i = 0; i < array.length; i++) {
    array.item(i).innerHTML =
      "Host your applications to the web using modern hosting solutions like Heroku, Azure, Netlify etc.";
  }

  document.getElementById("lang-bigReviewOne").innerHTML =
    "'Very patient, clear, likes to explain and shows that he knows and enjoys what he is doing, which is primarily programming and logical thinking in order to write clean and beautiful code.'";
  document.getElementById("lang-bigReviewTwo").innerHTML =
    "'Extremely professional lecturer, has a huge amount of patience and understanding. Everything is explained in the smallest details and nothing remains unsaid.'";
  document.getElementById("lang-bigReviewThree").innerHTML =
    "'He approaches and explains more difficult to understand concepts in his own way, which makes the material easier and more understandable.'";

  document.getElementById("lang-bigReviewOneTitle").innerHTML =
    "over 30 happy clients and growing";
  document.getElementById("lang-bigReviewTwoTitle").innerHTML =
    "6 jobs in the industry acquired";
  document.getElementById("lang-bigReviewThreeTitle").innerHTML =
    "12 main colleges exams passed";
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

  document.getElementById("lang-pricingProgrammingTheory").innerHTML =
    "Teorija programiranja";
  document.getElementById("lang-pricingApiTheory").innerHTML =
    "REST API teorija";
  document.getElementById("lang-pricingDatabases").innerHTML =
    "Teorija relacionih baza";
  document.getElementById("lang-pricingGit").innerHTML =
    "Source Control: Git i GitHub";
  document.getElementById("lang-pricingHosting").innerHTML = "Hosting servisi";

  document.getElementById("lang-priceAnnouncement").innerHTML =
    "Cijena za jedan čas od 60 minuta, sa minimalno dva časa po sastanku";

  array = document.getElementsByClassName(
    "lang-courseProgrammingTheoryContent"
  );
  for (var i = 0; i < array.length; i++) {
    array.item(i).innerHTML =
      "Nauči sve što treba znati o osnovnom i naprednom programiranju, na najintuitivniji način.";
  }

  array = document.getElementsByClassName("lang-courseCCppContent");
  for (var i = 0; i < array.length; i++) {
    array.item(i).innerHTML =
      "Jedan od najčešće korištenih i višenamjenskih programskih jezika koji se koristi za razvoj hardvera, izgradnju operativnih sistema, internet pretraživača itd.";
  }

  array = document.getElementsByClassName("lang-courseCsharpContent");
  for (var i = 0; i < array.length; i++) {
    array.item(i).innerHTML =
      "Jedna od glavnih opcija za moderno višenamjensko programiranje, sa integracijom za web, server, desktop, gaming i mobilni razvoj uz još mnogo izbora.";
  }

  array = document.getElementsByClassName("lang-courseHtmlCssJsContent");
  for (var i = 0; i < array.length; i++) {
    array.item(i).innerHTML =
      "Sveto trojsvo frontend development-a i kreiranja web stranica, kao i osnova za svaki moderni frontend framework.";
  }

  array = document.getElementsByClassName("lang-courseApiTheoryContent");
  for (var i = 0; i < array.length; i++) {
    array.item(i).innerHTML =
      "Imaj priliku upoznati i razumjeti moderni internet, njegove protokole i načine protoka podataka.";
  }

  array = document.getElementsByClassName("lang-courseDotnetContent");
  for (var i = 0; i < array.length; i++) {
    array.item(i).innerHTML =
      "Kombinuj svoje znanje i kreiraj skoro bilo koji tip softvera sa jednim od najmoćnijih i svestranih višenamjenskih framework-a.";
  }

  array = document.getElementsByClassName("lang-courseNodeJsContent");
  for (var i = 0; i < array.length; i++) {
    array.item(i).innerHTML =
      "Direktno započni izradu server softvera sa jednim od najčešće korištenih programskih jezika.";
  }

  array = document.getElementsByClassName("lang-courseDatabaseTheoryContent");
  for (var i = 0; i < array.length; i++) {
    array.item(i).innerHTML =
      "Kreiraj vlastite entite, relacije i baze podataka i upoznaj se sa procesima normalizacije i kreiranja grafova.";
  }

  array = document.getElementsByClassName("lang-courseMSSQLContent");
  for (var i = 0; i < array.length; i++) {
    array.item(i).innerHTML =
      "Upoznaj se sa podacima, analitikom, upitima i nauči temelj svake uspješne aplikacije.";
  }

  array = document.getElementsByClassName("lang-courseReactContent");
  for (var i = 0; i < array.length; i++) {
    array.item(i).innerHTML =
      "Nauči jedan od najpopularnijih i najbrže rastućih frontend framework-a i biblioteka koristeći jsx i tsx sintaksu.";
  }

  array = document.getElementsByClassName("lang-courseAngularContent");
  for (var i = 0; i < array.length; i++) {
    array.item(i).innerHTML =
      "Izradi stabilne i poslovne aplikacije koristeći TypeScript, s Googleovim glavinm frameworkom.";
  }

  array = document.getElementsByClassName("lang-courseGithubContent");
  for (var i = 0; i < array.length; i++) {
    array.item(i).innerHTML =
      "Upravljaj i kontroliši svoj kôd najmoćnijim alatom i vještinom za svakog ozbiljnog programera.";
  }

  array = document.getElementsByClassName("lang-courseBootstrapContent");
  for (var i = 0; i < array.length; i++) {
    array.item(i).innerHTML =
      "Izradi brze i responzivne web stranice s najpopularnijom HTML, CSS i JS bibliotekom.";
  }

  array = document.getElementsByClassName("lang-courseHostingContent");
  for (var i = 0; i < array.length; i++) {
    array.item(i).innerHTML =
      "Hostiraj svoje aplikacije na web koristeći moderna hosting rješenja poput Heroku, Azure, Netlify itd.";
  }

  document.getElementById("lang-bigReviewOne").innerHTML =
    "'Jako strpljiv, jasan, voli da objašnjava i vidi se da zna i uživa u onome što radi, a to je prije svega programiranje I logičko razmišljanje u cilju što boljeg pisanja koda.'";
  document.getElementById("lang-bigReviewTwo").innerHTML =
    "'Izuzetno profesionalan predavač, ima ogromnu količinu strpljenja i razumijevanja. Sve se objašnjava u najsitnije detalje i ništa ne ostaje nedorečeno.'";
  document.getElementById("lang-bigReviewThree").innerHTML =
    "'Teže razumljive pojmove približava i objašnjava na sebi svojstven način što gradivo čini lakšim i razumljivijim. Sve preporuke i pohvale.'";

  document.getElementById("lang-bigReviewOneTitle").innerHTML =
    "preko 30 zadovoljnih klijenata";
  document.getElementById("lang-bigReviewTwoTitle").innerHTML =
    "stečeno 6 poslova u industriji";
  document.getElementById("lang-bigReviewThreeTitle").innerHTML =
    "12 glavnih fakultativnih ispita položeno";
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

  document.getElementById("lang-pricingProgrammingTheory").innerHTML =
    "Programmiertheorie";
  document.getElementById("lang-pricingApiTheory").innerHTML =
    "REST API Theorie";
  document.getElementById("lang-pricingDatabases").innerHTML =
    "Relationale Datenbanken Theorie";
  document.getElementById("lang-pricingGit").innerHTML =
    "Source Control: Git und GitHub";
  document.getElementById("lang-pricingHosting").innerHTML = "Hosting";

  document.getElementById("lang-priceAnnouncement").innerHTML =
    "Preis für einen 60-minütigen Vortrag, wobei eine Sitzung mindestens zwei Vorträge umfasst";

  array = document.getElementsByClassName(
    "lang-courseProgrammingTheoryContent"
  );
  for (var i = 0; i < array.length; i++) {
    array.item(i).innerHTML =
      "Lerne alles von den Grundlagen bis zum fortgeschrittenen Programmieren, auf die intuitivste Weise.";
  }

  array = document.getElementsByClassName("lang-courseCCppContent");
  for (var i = 0; i < array.length; i++) {
    array.item(i).innerHTML =
      "Eine der am häufigsten verwendeten und vielseitigsten Programmiersprachen für Hardwareentwicklung, erstellungen von Betriebssystemenen, Browsern usw.";
  }

  array = document.getElementsByClassName("lang-courseCsharpContent");
  for (var i = 0; i < array.length; i++) {
    array.item(i).innerHTML =
      "Eine der Gründungsoptionen für moderne Mehrzweckprogrammierung, mit Web-, Server-, Desktop-, Spiele- und Mobile-Entwicklungsintegration und vielem mehr.";
  }

  array = document.getElementsByClassName("lang-courseHtmlCssJsContent");
  for (var i = 0; i < array.length; i++) {
    array.item(i).innerHTML =
      "Die heiligen Drei für Frontend-Entwicklung und Website-Erstellung, die Grundlage für jedes moderne Frontend-Framework.";
  }

  array = document.getElementsByClassName("lang-courseApiTheoryContent");
  for (var i = 0; i < array.length; i++) {
    array.item(i).innerHTML =
      "Lernen Sie das moderne Internet, seine Protokolle und die Wege des Datenverkehrs kennen und verstehen.";
  }

  array = document.getElementsByClassName("lang-courseDotnetContent");
  for (var i = 0; i < array.length; i++) {
    array.item(i).innerHTML =
      "Kombinieren Sie Ihr Wissen und erstellen Sie fast jede Art von Software mit einem der leistungsstärksten und vielseitigsten Mehrzweck-Frameworks.";
  }

  array = document.getElementsByClassName("lang-courseNodeJsContent");
  for (var i = 0; i < array.length; i++) {
    array.item(i).innerHTML =
      "Steigen Sie direkt in die Entwicklung von serverseitigen Software mit einem der am häufigst verwendeten Programmiersprachen ein.";
  }

  array = document.getElementsByClassName("lang-courseDatabaseTheoryContent");
  for (var i = 0; i < array.length; i++) {
    array.item(i).innerHTML =
      "Erstellen Sie Ihre eigenen Entitäte, Beziehungen und Datenbanken, lernen Sie Normalisierung und Diagrammerstellung kennen.";
  }

  array = document.getElementsByClassName("lang-courseMSSQLContent");
  for (var i = 0; i < array.length; i++) {
    array.item(i).innerHTML =
      "Machen Sie sich mit Daten, Analysen und Abfragen vertraut und lernen Sie das Rückgrat jeder erfolgreichen Applikation kennen.";
  }

  array = document.getElementsByClassName("lang-courseReactContent");
  for (var i = 0; i < array.length; i++) {
    array.item(i).innerHTML =
      "Lernen Sie eines der beliebtesten und am schnellsten wachsenden Frontend-Frameworks und Bibliotheken mit jsx- und tsx-Syntax kennen.";
  }

  array = document.getElementsByClassName("lang-courseAngularContent");
  for (var i = 0; i < array.length; i++) {
    array.item(i).innerHTML =
      "Erstellen Sie stabile Applikationen mit TypeScript, mit dem wichtigsten Frontend-Framework von Google.";
  }

  array = document.getElementsByClassName("lang-courseGithubContent");
  for (var i = 0; i < array.length; i++) {
    array.item(i).innerHTML =
      "Verwalten und kontrollieren Sie Ihren Code mit dem leistungsstärksten Tool für jeden ernsthaften Programmierer.";
  }

  array = document.getElementsByClassName("lang-courseBootstrapContent");
  for (var i = 0; i < array.length; i++) {
    array.item(i).innerHTML =
      "Erstellen Sie schnelle und reaktionsschnelle Websites mit der beliebtesten HTML-, CSS- und JS-Bibliothek.";
  }

  array = document.getElementsByClassName("lang-courseHostingContent");
  for (var i = 0; i < array.length; i++) {
    array.item(i).innerHTML =
      "Hosten Sie Ihre Applikationen im Web mit modernen Hosting-Lösungen wie Heroku, Azure, Netlify usw.";
  }

  document.getElementById("lang-bigReviewOne").innerHTML =
    "'Sehr geduldig, klar, erklärt gerne und zeigt dass er weiß und Spaß daran hat, was in erster Linie Programmieren und logisches Denken ist.'";
  document.getElementById("lang-bigReviewTwo").innerHTML =
    "'Sehr professioneller Dozent, hat viel Geduld und Verständnis. Alles wird bis ins kleinste Detail erklärt und nichts bleibt ungesagt.'";
  document.getElementById("lang-bigReviewThree").innerHTML =
    "'Er nähert sich und erklärt schwieriger verständliche Konzepte auf seine Weise, was den Stoff einfacher und verständlicher macht. Alle Empfehlungen und Komplimente.'";

  document.getElementById("lang-bigReviewOneTitle").innerHTML =
    "über 30 zufriedene Kunden und wachsend";
  document.getElementById("lang-bigReviewTwoTitle").innerHTML =
    "6 Arbeitsplätze in der Branche erworben";
  document.getElementById("lang-bigReviewThreeTitle").innerHTML =
    "12 Hauptschulprüfungen bestanden";
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
