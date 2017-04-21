function generateText() {
  document.getElementById("one").innerHTML = "";
  document.getElementById("two").innerHTML = "";
  document.getElementById("three").innerHTML = "";
  document.getElementById("four").innerHTML = "";
  document.getElementById("five").innerHTML = "";
  document.getElementById("six").innerHTML = "";

  var text = document.getElementById("displaytext");
  var userText = text.elements["name"].value;

  if (document.getElementById("header_1").checked) {
    document.getElementById("one").innerHTML = userText;
  } else if (document.getElementById("header_2").checked) {
    document.getElementById("two").innerHTML = userText;
  } else if (document.getElementById("header_3").checked) {
    document.getElementById("three").innerHTML = userText;
  } else if (document.getElementById("header_4").checked) {
    document.getElementById("four").innerHTML = userText;
  } else if (document.getElementById("header_5").checked) {
    document.getElementById("five").innerHTML = userText;
  } else if (document.getElementById("header_6").checked) {
    document.getElementById("six").innerHTML = userText;
  }
}
