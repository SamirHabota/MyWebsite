const apiLink = "https://octoemailsender.herokuapp.com/contactMe";
const apiKey = "d0e8eeac-fa43-4380-8bfd-095c3116835f";

function createEmailBody() {
  return {
    subject: "OctoDev email request",
    text: document.getElementById("contact-textId").value,
    email: document.getElementById("contact-emailId").value,
    phone: document.getElementById("contact-phoneId").value,
  };
}

function createRequest() {
  var xhr = new XMLHttpRequest();

  xhr.open("POST", apiLink, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("Api-Key", apiKey);

  xhr.send(JSON.stringify(createEmailBody()));

  xhr.onreadystatechange = function () {
    if (xhr.readyState == XMLHttpRequest.DONE) {
      console.log("done");
    }
  };
}

function sendEmail(e) {
  e.preventDefault();
  createRequest();
}
