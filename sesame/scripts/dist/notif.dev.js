"use strict";

var notificationTimeout; // Declare a variable to store the timeout ID

function DisplayNotif(message, seconds) {
  console.log('seconds ', seconds);
  var notif = document.querySelector('.notification-information');

  if (!notif) {
    var notifElement = document.createElement('div');
    notifElement.className = 'notification-information';
    notifElement.style.opacity = 0;
    notifElement.style.display = "flex";
    notifElement.innerHTML = "\n            <div class=\"header\">\n                ".concat(LanguageValues.pop.sesame_says, "\n            </div>\n            <div class=\"message\">\n                ").concat(message, "\n            </div>\n        ");
    document.body.appendChild(notifElement);
  }

  setTimeout(function () {
    console.log('animate notif');
    document.querySelector('.message').innerHTML = message;
    document.querySelector('.notification-information').style.opacity = 1;
    document.querySelector('.notification-information').style.zIndex = 100;
  }, 200); // Clear the previous timeout if it exists

  clearTimeout(notificationTimeout);
  notificationTimeout = setTimeout(function () {
    console.log('hiding notif');
    document.querySelector('.notification-information').style.opacity = 0;
    document.querySelector('.notification-information').style.zIndex = -1;
  }, seconds * 1000);
}