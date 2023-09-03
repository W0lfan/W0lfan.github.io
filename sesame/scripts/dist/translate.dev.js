"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function fetchData(url) {
  return fetch(url).then(function (response) {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return response.json();
  });
}

var LanguageValues = GetLanguage(localStorage.getItem('language'));

function GetAvailableLanguages() {
  function GetLanguages() {
    var L, menu, keyToMove, key, temp, i, _loop, _i, _Object$entries;

    return regeneratorRuntime.async(function GetLanguages$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(fetchData('https://raw.githubusercontent.com/W0lfan/SesameAPI/main/translate/languages.json'));

          case 2:
            L = _context.sent;
            menu = document.querySelector('.parameter .action .menu');
            keyToMove = null; // Find the key associated with the given value

            _context.t0 = regeneratorRuntime.keys(L);

          case 6:
            if ((_context.t1 = _context.t0()).done) {
              _context.next = 13;
              break;
            }

            key = _context.t1.value;

            if (!(L.hasOwnProperty(key) && L[key] === localStorage.getItem('language'))) {
              _context.next = 11;
              break;
            }

            keyToMove = key;
            return _context.abrupt("break", 13);

          case 11:
            _context.next = 6;
            break;

          case 13:
            if (keyToMove) {
              temp = L[keyToMove];
              delete L[keyToMove];
              L = _objectSpread(_defineProperty({}, keyToMove, temp), L);
            }

            i = 0;
            languagesNB = Object.keys(L).length;

            _loop = function _loop() {
              var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
                  key = _Object$entries$_i[0],
                  value = _Object$entries$_i[1];

              var div = document.createElement('div');
              div.className = 'language';
              div.id = value;
              div.textContent = key;

              if (i > 0) {
                div.addEventListener('click', function () {
                  switchLanguage(value);
                });
              } else {
                i++;
              }

              menu.appendChild(div);
            };

            for (_i = 0, _Object$entries = Object.entries(L); _i < _Object$entries.length; _i++) {
              _loop();
            }

          case 18:
          case "end":
            return _context.stop();
        }
      }
    });
  }

  GetLanguages();
}

function switchLanguage(id) {
  localStorage.setItem('language', id);
  location.reload();
}

function SyncParam() {
  var parameters = document.querySelectorAll('.parameters-content .parameter');

  for (var _i2 = 0; _i2 < parameters.length; _i2++) {
    parameters[_i2].querySelector('.header .title .name').innerHTML = LanguageValues.parameters.titles[_i2];
    parameters[_i2].querySelector('.header .description').innerHTML = LanguageValues.parameters.descriptions[_i2];
  }
}

function SetLanguageForHome() {
  try {
    var header_suggested_search = document.getElementsByClassName('infos-type');
    var suggested_search = document.getElementsByClassName('search-suggestion');

    if (typeof LanguageValues !== 'undefined' && LanguageValues.home) {
      if (suggested_search) {
        document.querySelector('.pick-a-type .top').innerHTML = LanguageValues.home.scroll_menu.top;

        for (var _i3 = 0; _i3 < suggested_search.length; _i3++) {
          suggested_search[_i3].innerHTML = LanguageValues.home.scroll_menu.click_query[_i3];
        }
      }

      if (header_suggested_search) {
        for (var _i4 = 0; _i4 < header_suggested_search.length; _i4++) {
          header_suggested_search[_i4].innerHTML = LanguageValues.home.scroll_menu.infos_items[_i4];
        }
      }

      document.querySelector('.search-input input').setAttribute('placeholder', LanguageValues.home.input_placeholder);
      DirectLink();
    }
  } catch (error) {
    console.error('An error occurred:', error);
    SetLanguageForHome();
  }
}

function GetLanguage(id) {
  function returnLanguage() {
    return regeneratorRuntime.async(function returnLanguage$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(fetchData("https://raw.githubusercontent.com/W0lfan/SesameAPI/main/translate/".concat(id, ".json")));

          case 2:
            LanguageValues = _context2.sent;

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    });
  }

  returnLanguage();
}