"use strict";

var goBack;
window.addEventListener('DOMContentLoaded', function () {
  goBack = document.querySelector('.go-back');
  goBack.style.display = "none";
  goBack.addEventListener('click', function () {
    location.reload();
  });
  var script = document.createElement('script');
  script.src = 'https://raw.githubusercontent.com/W0lfan/SesameAPI/main/api/building.js';
  script.type = 'text/javascript'; // Append the script element to the document's head or body

  document.head.appendChild(script);
  var linkel = {
    integration: document.querySelector('.linkel-container')
  };

  if (company.name && company.src.website) {
    var datasGatheringDiv = document.createElement("div");
    var pick = document.createElement("div");
    var informationDiv = document.createElement("div");
    var SVGDiv = document.createElement("div");
    datasGatheringDiv.classList.add("datas-gathering");
    pick.classList.add("check_choose");
    informationDiv.classList.add("information");
    SVGDiv.classList.add("SVG-Medium");

    var _loop = function _loop(i) {
      var choice = company.datas[i];
      var DIV = document.createElement("div");
      DIV.id = choice.name + "_formating_choice";
      DIV.classList.add("choice_format");
      DIV.innerHTML += "\n                <div class=\"frm-choice\">\n                    <div class=\"frm-name\">\n                        ".concat(choice.name, "\n                    </div>\n                    <div class=\"frm-description\">\n                        ").concat(choice.description, "\n                    </div>\n                </div>\n            ");
      DIV.animate([{
        opacity: 0
      }, {
        opacity: 1
      }], {
        duration: 1000,
        fill: "forwards",
        delay: 200 * i
      });
      DIV.addEventListener('click', function () {
        Form(choice);
      });
      pick.appendChild(DIV);
    };

    for (var i = 0; i < company.datas.length; i++) {
      _loop(i);
    }

    SVGDiv.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/></svg>';
    informationDiv.innerHTML = "\n            <a href=\"".concat(company.src.website, "\">").concat(company.name, "</a> datas gathering is not affiliated with Linkel\n        ");
    var div = document.createElement('div');
    div.className = "back-to-website";
    div.innerHTML = "Go back to ".concat(company.name);
    div.addEventListener('click', function () {
      window.location = company.src.website;
    });
    datasGatheringDiv.appendChild(pick);
    datasGatheringDiv.appendChild(div);
    datasGatheringDiv.appendChild(informationDiv);
    linkel.integration.appendChild(datasGatheringDiv);
  }
});