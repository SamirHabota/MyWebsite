const successColor = "#8ae6d4";
const errorColor = "#FF7F60";
const apiLink = "https://octoemailsender.herokuapp.com/contactMe";

function createEmailBody() {
  return {
    subject: "OctoDev email request",
    text: document.getElementById("contact-textId").value,
    email: document.getElementById("contact-emailId").value,
    phone: document.getElementById("contact-phoneId").value,
  };
}

function createRequest() {
  return new Promise((resolve) => {
    var xhr = new XMLHttpRequest();

    xhr.open("POST", apiLink, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(createEmailBody()));

    xhr.onreadystatechange = function () {
      if (xhr.readyState == XMLHttpRequest.DONE) {
        resolve(true);
      }
    };
  });
}

function clearForm() {
  document.getElementById("contact-textId").value = "";
  document.getElementById("contact-emailId").value = "";
  document.getElementById("contact-phoneId").value = "";
}

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
  const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,6}$/im;
  return re.test(String(phone).toLowerCase());
}

function validateForm() {
  var text = document.getElementById("contact-textId").value;
  var email = document.getElementById("contact-emailId").value;
  var phone = document.getElementById("contact-phoneId").value;

  if (text === "") {
    notification(getTextErrorMessage(), 2000, errorColor);
    return false;
  }

  if (email === "" || !validateEmail(email)) {
    notification(getEmailErrorMessage(), 2000, errorColor);
    return false;
  }

  if (phone === "" || !validatePhone(phone)) {
    notification(getPhoneErrorMessage(), 2000, errorColor);
    return false;
  }

  return true;
}

function sendEmail(e) {
  e.preventDefault();

  if (validateForm()) {
    createRequest().then((result) => {
      if (result) {
        clearForm();
        notification(getNotificationSuccessMessage(), 3000, successColor);
      }
    });
  }
}

//notification work below
function notification(text, duration, color) {
  showNotification(text, color);
  setTimeout(() => {
    hideNotification();
  }, duration);
}

function showNotification(text, color) {
  var element = document.getElementById("notificationId");
  element.style.background = color;
  document.getElementById("notificationText").innerHTML = text;
  var op = 0.1; // initial opacity
  element.style.display = "block";
  var timer = setInterval(function () {
    if (op >= 1) {
      clearInterval(timer);
    }
    element.style.opacity = op;
    element.style.filter = "alpha(opacity=" + op * 100 + ")";
    op += op * 0.1;
  }, 10);
}

function hideNotification() {
  var element = document.getElementById("notificationId");
  var op = 1; // initial opacity
  var timer = setInterval(function () {
    if (op <= 0.1) {
      clearInterval(timer);
      element.style.display = "none";
    }
    element.style.opacity = op;
    element.style.filter = "alpha(opacity=" + op * 100 + ")";
    op -= op * 0.1;
  }, 50);
}

function getNotificationSuccessMessage() {
  if (
    document
      .getElementsByClassName("lang-flag")[0]
      .classList.contains("lang-en")
  )
    return "Your request has been sent. You will receive an answer shortly.";
  else if (
    document
      .getElementsByClassName("lang-flag")[0]
      .classList.contains("lang-bih")
  )
    return "Vaša zahtjev je poslan. Očekujte odgovor veoma brzo.";
  else if (
    document
      .getElementsByClassName("lang-flag")[0]
      .classList.contains("lang-ger")
  )
    return "Ihre Botschaft wurde gesendet. Erwarten Sie ihre Antwort sehr schnell. ";
}

function getTextErrorMessage() {
  if (
    document
      .getElementsByClassName("lang-flag")[0]
      .classList.contains("lang-en")
  )
    return "Please enter in your message first.";
  else if (
    document
      .getElementsByClassName("lang-flag")[0]
      .classList.contains("lang-bih")
  )
    return "Molimo da prvo unesete Vašu poruku.";
  else if (
    document
      .getElementsByClassName("lang-flag")[0]
      .classList.contains("lang-ger")
  )
    return "Bitte geben Sie zuerst Ihre Nachricht ein.";
}

function getEmailErrorMessage() {
  if (
    document
      .getElementsByClassName("lang-flag")[0]
      .classList.contains("lang-en")
  )
    return "Please enter a valid email first.";
  else if (
    document
      .getElementsByClassName("lang-flag")[0]
      .classList.contains("lang-bih")
  )
    return "Molimo da uneste validnu email adresu.";
  else if (
    document
      .getElementsByClassName("lang-flag")[0]
      .classList.contains("lang-ger")
  )
    return "Bitte geben Sie zuerst eine gültige E-Mail-Adresse ein.";
}

function getPhoneErrorMessage() {
  if (
    document
      .getElementsByClassName("lang-flag")[0]
      .classList.contains("lang-en")
  )
    return "Please enter a valid phone number first.";
  else if (
    document
      .getElementsByClassName("lang-flag")[0]
      .classList.contains("lang-bih")
  )
    return "Molimo da uneste validan broj telefona.";
  else if (
    document
      .getElementsByClassName("lang-flag")[0]
      .classList.contains("lang-ger")
  )
    return "Bitte geben Sie zuerst eine gültige Telefonnummer ein.";
}
