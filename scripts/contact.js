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

function sendEmail(e) {
  e.preventDefault();
  createRequest().then((result) => {
    if (result) alert("Email sent");
  });
}
