"use strict";

var notificationTimeout; // Declare a variable to store the timeout ID

function DisplayNotif(message, seconds) {
  console.log('seconds ', seconds);
  var notif = document.querySelector('.notification-information');

  if (!notif) {
    var notifElement = document.createElement('div');
    notifElement.className = 'notification-information';
    notifElement.style.opacity = 0;
    notifElement.innerHTML = "\n            <div class=\"header\">\n                Sesame informs you\n            </div>\n            <div class=\"message\">\n                ".concat(message, "\n            </div>\n        ");
    document.body.appendChild(notifElement);
    setTimeout(function () {
      notifElement.style.display = 'flex';
      notifElement.animate([{
        opacity: 0,
        transform: "translateY(-20px)"
      }, {
        opacity: 1,
        transform: "translateY(0)"
      }], {
        duration: 500,
        fill: "forwards"
      });
    }, 200);
  } else {
    notif.querySelector('.message').innerHTML = message;
    notif.style.display = 'flex';
    notif.animate([{
      opacity: 0,
      transform: "translateY(-20px)"
    }, {
      opacity: 1,
      transform: "translateY(0)"
    }], {
      duration: 500,
      fill: "forwards"
    });
  } // Clear the previous timeout if it exists


  clearTimeout(notificationTimeout);
  notificationTimeout = setTimeout(function () {
    console.log('hiding notif');
    document.querySelector('.notification-information').animate([{
      opacity: 1
    }, {
      opacity: 0,
      display: "none"
    }], {
      duration: 500,
      fill: "forwards"
    });
  }, seconds * 1000);
}