"use strict";

var Loader = {
  loader: '',
  create: function create(main, value) {
    var loader = document.querySelector('.loader');
    this.loader = loader;

    if (!loader) {
      loader = document.createElement('div');
      loader.classList.add('loader');
      loader.innerHTML = "\n                <div class=\"loader-msg\"></div>\n                <div class=\"loader-animate\">\n                    <div class=\"loader-big-dot\">\n                        <div class=\"loader-dot\"></div>\n                    </div>\n                </div>\n            ";
      main.appendChild(loader);
    }

    loader.style.display = "flex";
    loader.querySelector('.loader-msg').innerHTML = value;
  },
  hide: function hide() {
    document.querySelector('.loader').style.display = "none";
  }
};

function formatSpace(string) {
  return string.toLowerCase().replace(/ /g, '-');
}

var added_items = [];
var mouseIn = false;
var CHECKS = {
  "check": '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Z"/></svg>',
  "uncheck": '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m424-312 282-282-56-56-226 226-114-114-56 56 170 170ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Z"/></svg>'
};
var DATAS = {};

function Form(data) {
  goBack.style.display = "flex";

  function GenerateData() {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = data.form[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var D = _step.value;

        if (D.inner_code) {
          if (D.inner_code.length === 1) {
            DATAS["".concat(D.inner_code[0])] = '';
          } else if (D.id != "links") {
            (function () {
              var primary = D.inner_code[0];
              DATAS["".concat(primary)] = {};
              D.inner_code.forEach(function (el) {
                DATAS["".concat(primary)]["".concat(el)] = '';
              });
            })();
          } else {
            DATAS['links'] = [{
              id: '',
              src: ''
            }, {
              id: '',
              src: ''
            }, {
              id: '',
              src: ''
            }, {
              id: '',
              src: ''
            }, {
              id: '',
              src: ''
            }];
          }
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    console.log(DATAS + "isBasic");
  }

  GenerateData();
  added_items = [];
  mouseIn = false;
  var container = document.querySelector('.datas-gathering');
  container.innerHTML = "";
  Loader.create(container, "Loading form");
  var form = document.createElement('div');
  form.classList.add('form-container');
  container.appendChild(form);
  var j = 1;
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    var _loop = function _loop() {
      var qst = _step2.value;
      var div = document.createElement('div');
      var header = document.createElement('div');
      var input = document.createElement('div');
      div.classList.add('container-question');
      div.id = "question-".concat(formatSpace(qst.name));
      header.classList.add('question-header');
      header.innerHTML += "\n            <div class=\"title\">\n                ".concat(qst.name, "\n            </div>\n        ");

      if (qst.need) {
        header.innerHTML += "\n                <div class=\"asterik-item\">\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" viewBox=\"0 -960 960 960\" width=\"24\"><path d=\"M410-120v-238L204-239l-70-121 206-120-206-119 70-121 206 119v-239h140v239l206-119 70 121-206 119 206 120-70 121-206-119v238H410Z\"/></svg>\n                </div>\n            ";
      }

      var inputName = void 0;
      inputName = "".concat(formatSpace(qst.name), "-input");

      if (qst.inner_code) {
        inputName = "".concat(qst.inner_code[0], "-input");

        if (qst.id === "links") {
          inputName = "".concat(qst.inner_code[0], "-").concat(qst.name.toLowerCase());
        }
      }

      input.classList.add('fill-input');
      input.id = "".concat(formatSpace(data.name), "-").concat(formatSpace(qst.name));
      inputElement = document.createElement('input');
      inputElement.setAttribute('type', 'text');
      inputElement.setAttribute('placeholder', qst.description || 'Enter a value');
      inputElement.id = inputName;
      inputElement.readOnly = true;
      input.appendChild(inputElement);
      setTimeout(function () {
        inputName = document.getElementById(inputName);
        inputName.addEventListener('input', function () {
          var name = this.id;
          var value = this.value;
          var linkId = name.replace('links-', '');
          var targetElement;
          var errorMessage = "The value is not a valid link";

          if (qst.isLink) {
            if (!value.includes('https://')) {
              if (name.includes('pfp')) {
                if (value.includes('cdn.discordapp.com')) {
                  targetElement = document.querySelector("#user-profile-picture .info-box");
                }
              } else if (!name.includes('discord') && !value.includes('https://')) {
                targetElement = document.querySelector("#user-".concat(linkId, " .info-box"));
              }
            }

            if (targetElement) {
              targetElement.innerHTML = errorMessage;
              targetElement.style.color = "rgb(184, 40, 40)";
              targetElement.style.display = "flex";
            } else {
              if (name.includes('pfp')) {
                document.querySelector("#user-profile-picture .info-box").style.display = "none";
              } else {
                document.querySelector("#user-".concat(linkId, " .info-box")).style.display = "none";
              }
            }
          }

          if (name.includes('links')) {
            var CheckDatas = function CheckDatas() {
              DATAS['links'].forEach(function (link) {
                // Check if an object with the same id exists in DATAS['links']
                var objectExists = DATAS['links'].some(function (value) {
                  return value.id === linkId;
                }); // Check if the object exists at a specific index in DATAS

                var objectAtIndex = DATAS['links'].findIndex(function (value) {
                  return value.id === linkId;
                });

                if (!objectExists && link.id == '') {
                  link.id = linkId;
                  link.src;
                  return;
                } else if (objectExists) {
                  DATAS['links'][objectAtIndex].id = linkId;
                  DATAS['links'][objectAtIndex].src = value;
                }
              });
            };

            CheckDatas();
          } else {
            name = name.replace('-input', '');
            DATAS[name] = value;
          }
        });
        inputName.readOnly = false;
      }, 1000);
      input.innerHTML += "<div style=\"display:none\" class=\"info-box\"></div>";

      if (qst.link_database) {
        var inputId = "".concat(formatSpace(data.name), "-").concat(formatSpace(qst.name));
        input.addEventListener('mouseout', function () {
          mouseIn = false;
          setTimeout(function () {
            if (document.querySelector("#".concat(inputId, " .search-result")) && mouseIn === false) {
              document.querySelector("#".concat(inputId, " .search-result")).style.display = 'none';
            }
          }, 1000);
        });
        input.addEventListener('mouseover', function () {
          if (!mouseIn) mouseIn = true;
        });
        input.addEventListener('input', function _callee() {
          return regeneratorRuntime.async(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  fetch('https://raw.githubusercontent.com/W0lfan/SesameAPI/main/api/building.js').then(function (response) {
                    return response.text();
                  }).then(function (buildingCode) {
                    eval(buildingCode);
                    console.log(qst);
                    var id = qst.id.toLowerCase();
                    console.log('ID:', id);
                    var value = document.querySelector("#".concat(inputId, " input")).value;
                    FetchDataFromDatabase(id, [value]).then(function (data_result) {
                      var infoBox = document.querySelector("#".concat(inputId, " .info-box"));

                      if (document.querySelector("#".concat(inputId, " .search-result"))) {
                        document.querySelector("#".concat(inputId, " .search-result")).innerHTML = '';
                      }

                      if (data_result.length > 0) {
                        if (id === "users" || id == "ships" && !qst.query_sesame_content) {
                          if (data_result.some(function (item) {
                            return item.name.toLowerCase() === value;
                          })) {
                            if (id === "users") {
                              infoBox.innerHTML = "".concat(value, " is a Sesame user");

                              if (data.name.toLowerCase() === "user") {
                                infoBox.style.color = "#B82828";
                              } else {
                                infoBox.style.color = "#309330";
                              }
                            } else if (id === "ships") {
                              infoBox.innerHTML = "".concat(value, " is not available");
                              infoBox.style.color = "#B82828";
                            }
                          } else {
                            if (id === "users") {
                              infoBox.innerHTML = "".concat(value, " is not a Sesame user");

                              if (qst.same_result) {
                                infoBox.style.color = "#B82828";
                              } else {
                                infoBox.style.color = "#309330";
                              }
                            } else if (id === "ships") {
                              infoBox.innerHTML = "".concat(value, " is available");
                              infoBox.style.color = "#309330";
                            }
                          }

                          console.log('RESULT', data_result);
                          infoBox.style.display = "flex";
                        } else {
                          if (!document.querySelector("#".concat(inputId, " .search-result"))) {
                            input.innerHTML += "<div class=\"search-result\"></div>";
                          }

                          data_result.forEach(function (element) {
                            // Access the search result container
                            var searchResultContainer = document.querySelector("#".concat(inputId, " .search-result")); // Display the search result container

                            searchResultContainer.style.display = "flex"; // Check if the element's name matches the search value and hasn't been added already

                            if (element.name.toLowerCase().includes(value)) {
                              // Create a new selection div
                              var selection = document.createElement('div');
                              selection.classList.add('item-to-select'); // Add a click event listener to the selection div

                              selection.addEventListener('click', function () {
                                console.log('e');

                                if (added_items.includes(formatSpace(element.name)) != true) {
                                  console.log(element.name + " added"); // Create a delete div with an SVG icon

                                  var del = document.createElement('div');
                                  del.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm80-160h80v-360h-80v360Zm160 0h80v-360h-80v360Z"/></svg>';
                                  del.classList.add('del'); // Create a selected div to display the selected item

                                  var selected = document.createElement('div');
                                  selected.classList.add('item-selected');
                                  selected.id = formatSpace(element.name);
                                  selected.innerHTML = "<div class=\"name\">".concat(element.name, "</div>"); // Add a click event listener to the delete div

                                  del.addEventListener('click', function () {
                                    document.getElementById(formatSpace(element.name)).remove();
                                    added_items.splice(added_items.indexOf(element.name), 1);
                                  }); // Append the delete div to the selected div

                                  selected.appendChild(del); // Append the selected div to the infoBox

                                  document.querySelector("#".concat(inputId, " .info-box")).appendChild(selected); // Display the infoBox

                                  document.querySelector("#".concat(inputId, " .info-box")).style.display = "flex"; // Add the element's name to the added_items array

                                  added_items.push(formatSpace(element.name));
                                  console.log(added_items);
                                }
                              }); // Set the HTML content of the selection div

                              selection.innerHTML = "\n                                                    ".concat(element.img && id != "ships" ? "<img src=\"".concat(element.img, "\">") : '', "\n                                                    ").concat(element.links && id != "ships" ? "<img style=\"border-radius:50%\" src=\"".concat(element.links.picture, "\">") : '', "\n                                                    <div class=\"name\">").concat(element.name, "</div>\n                                                "); // Append the selection div to the search result container

                              searchResultContainer.appendChild(selection);
                            }
                          });
                        }
                      }
                    })["catch"](function (error) {
                      console.error('Error fetching data:', error);
                    });
                  });

                case 1:
                case "end":
                  return _context.stop();
              }
            }
          });
        });
      }

      div.appendChild(header);

      if (qst.type && qst.type === "check") {
        input.innerHTML = "";
        var i = 1;
        qst.checks.forEach(function (check) {
          var div = document.createElement('div');
          div.classList.add('check-list');
          console.log(qst.inner_code[i]);
          div.innerHTML = "\n                    <div class=\"name\">\n                        ".concat(check.name, "\n                    </div>\n                    <div class=\"icon icon-").concat(formatSpace(check.name), "\" id=\"check-").concat(qst.inner_code[i], "\">\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" viewBox=\"0 -960 960 960\" width=\"24\"><path d=\"M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Z\"/></svg>\n                    </div>\n                ");
          DATAS["about"]["".concat(qst.inner_code[i])] = false;
          div.addEventListener('click', function () {
            console.log('clicked');
            var icon = document.querySelector(".icon-".concat(formatSpace(check.name)));
            var id = icon.id;
            var next = !id.includes("uncheck") ? "uncheck" : "check";
            console.log(id);
            DATAS["about"]["".concat(next === "uncheck" ? id.replace("check-", '') : id.replace("uncheck-", ''))] = id === "check" ? false : true;
            icon.id = next;
            icon.innerHTML = CHECKS[next];
          });
          i++;
          input.appendChild(div);
        });
      }

      div.appendChild(input);
      form.appendChild(div);
      j++;
    };

    for (var _iterator2 = data.form[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var inputElement;

      _loop();
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  Loader.hide();
  var process = document.createElement('div');
  process.classList.add("process-button");
  var processInnerDiv = document.createElement('div');
  processInnerDiv.className = 'process';
  var nameDiv = document.createElement('div');
  nameDiv.className = 'name';
  nameDiv.textContent = 'Process';
  var iconDiv = document.createElement('div');
  iconDiv.className = 'icon';
  iconDiv.innerHTML = "\n        <svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" viewBox=\"0 -960 960 960\" width=\"24\"><path d=\"M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z\"/></svg>\n    ";
  process.addEventListener('click', function () {
    if (DATAS.code) {
      DATAS.code = DATAS.code.replace(/[;]*$/, '');
      DATAS.code = DATAS.code.replace(/[']*$/, '');
      DATAS.code = DATAS.code.replace(/'/, '');
      var firstEqualsIndex = DATAS.code.indexOf('=');

      if (firstEqualsIndex !== -1) {
        // Extract the portion of the string after the '=' sign
        DATAS.code = DATAS.code.substring(firstEqualsIndex + 1);
      }

      console.log(DATAS.code);
      DATAS.code = [JSON.parse(DATAS.code)];
    }

    DownLoadCode("".concat(js_beautify(JSON.stringify(DATAS), {
      indent_size: 2
    })), "Linkel - ".concat(DATAS.name));
  });
  processInnerDiv.appendChild(nameDiv);
  processInnerDiv.appendChild(iconDiv);
  process.appendChild(processInnerDiv);
  container.appendChild(process);
}