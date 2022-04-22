function copy(content) {
  content = content.trim();
  var tempInput = document.createElement("input");
  var body = document.getElementsByTagName("body")[0];
  body.appendChild(tempInput);
  tempInput.setAttribute("value", content);
  tempInput.select();
  document.execCommand("copy");
  body.removeChild(tempInput);
}
