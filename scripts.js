function generateText() {
  document.getElementById("label").innerHTML = "";

  var text = document.getElementById("displaytext");
  var userText = text.elements["name"].value;

  document.getElementById("label").innerHTML = userText;

  if (document.getElementById("header_1").checked) {
    document.getElementById("label").style.font = "bold 2em serif";
  } else if (document.getElementById("header_2").checked) {
    document.getElementById("label").style.font = "bold 1.5em serif";
  } else if (document.getElementById("header_3").checked) {
    document.getElementById("label").style.font = "bold 1.17em serif";
  } else if (document.getElementById("header_4").checked) {
    document.getElementById("label").innerHTML = "bold 1em serif";
  } else if (document.getElementById("header_5").checked) {
    document.getElementById("label").style.font = "bold .83em serif";
  } else if (document.getElementById("header_6").checked) {
    document.getElementById("label").style.font = "bold .67em serif";
  }
}
