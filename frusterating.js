frustrating.js

function frustrateUser() {
  var phoneInput = document.getElementById("phoneInput");

  if (phoneInput.value.trim() === "") {
    // If the phone number is empty, shake the input field
    shakeElement(phoneInput);
    alert("Please enter a phone number!");
  } else {
    // Display a generic error message
    alert("Oops! Something went wrong. Please try again later.");
  }
}

function shakeElement(element) {
  var interval = 50;
  var distance = 5;
  var times = 4;

  for (var i = 0; i < times; i++) {
    setTimeout(function () {
      element.style.marginLeft = distance + "px";
      setTimeout(function () {
        element.style.marginLeft = "0";
      }, interval / 2);
    }, interval * i);
  }
}

html

