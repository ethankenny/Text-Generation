function generateText() {
  document.getElementById("label").innerHTML = "";

  var text = document.getElementById("displaytext");
  var userText = text.elements["name"].value;

  document.getElementById("label").innerHTML = userText;

  //Header Size Changer
  if (document.getElementById("header_1").checked) {
    document.getElementById("label").style.font = "2em serif";
  } else if (document.getElementById("header_2").checked) {
    document.getElementById("label").style.font = "1.5em serif";
  } else if (document.getElementById("header_3").checked) {
    document.getElementById("label").style.font = "1.17em serif";
  } else if (document.getElementById("header_4").checked) {
    document.getElementById("label").style.font = "1em serif";
  } else if (document.getElementById("header_5").checked) {
    document.getElementById("label").style.font = ".83em serif";
  } else if (document.getElementById("header_6").checked) {
    document.getElementById("label").style.font = ".67em serif";
  }

  //Color Changer
  if (document.getElementById("red_check").checked) {
    document.getElementById("label").style.color = "red";
  } else if (document.getElementById("orange_check").checked) {
    document.getElementById("label").style.color = "orange";
  } else if (document.getElementById("yellow_check").checked) {
    document.getElementById("label").style.color = "yellow";
  } else if (document.getElementById("green_check").checked) {
    document.getElementById("label").style.color = "green";
  } else if (document.getElementById("blue_check").checked) {
    document.getElementById("label").style.color = "blue";
  } else if (document.getElementById("purple_check").checked) {
    document.getElementById("label").style.color = "purple";
  }

  //Extra Styles Changer
  if (document.getElementById("bold_check").checked) {
    document.getElementById("label").style.fontWeight = "bold";
  } if (document.getElementById("italics_check").checked) {
    document.getElementById("label").style.fontStyle = "italic";
  }

  if (document.getElementById("underline_check").checked) {
    if (document.getElementById("strikethrough_check").checked) {
      document.getElementById("label").style.textDecoration = "underline line-through";
    } else {
      document.getElementById("label").style.textDecoration = "underline";
    }
  } else if (document.getElementById("strikethrough_check").checked) {
    document.getElementById("label").style.textDecoration = "line-through";
  }
}
