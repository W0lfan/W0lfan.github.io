"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var fonts = {
  "--background-color-left": {
    black: "#232323",
    white: "#ffffff"
  },
  "--backgrounds": {
    black: "#181818",
    white: "#f0f0f0"
  },
  "--backgrounds-lighter": {
    black: "#1F1F1F",
    white: "#dbdbdb"
  },
  "--black-coloring": {
    black: "#181818b3",
    white: "#616161b3"
  },
  "--black-lighter": {
    black: "#ffffff1a",
    white: "#bdbdbd1a"
  },
  "--coloring": {
    black: "white",
    white: "rgb(46, 45, 45)"
  },
  "--color-light": {
    black: "#ffffffb3",
    white: "#000000b3"
  },
  "--color-lighter": {
    black: "#ffffff1a",
    white: "#4747471a"
  },
  "--color-super-light": {
    black: "#ffffff06",
    white: "#ffffff06"
  },
  "--light-hovering": {
    black: "#ffffff1a",
    white: "#ffffff1a"
  }
};
var param_view = false;
var languagesNB;

function TriggerParameterView() {
  var content = document.querySelector('.parameters-content');
  var parent = document.querySelector('.parameters');
  param_view = !param_view;
  content.style.display = !param_view ? "none" : "flex ";
  parent.style.backgroundColor = !param_view ? "rgba(0,0,0,0)" : "var(--backgrounds)";
  parent.style.borderColor = !param_view ? "rgba(0,0,0,0)" : "var(--backgrounds-lighter)";
  parent.style.width = !param_view ? "fit-content" : "300px";
  parent.style.height = !param_view ? "fit-content" : "180px";
  setTimeout(function () {
    SyncParam();
    GetAvailableLanguages();
    parent.querySelector('.menu').addEventListener('mouseover', function () {
      parent.querySelector('.menu').style.height = languagesNB * 30 + "px";
    });
    parent.querySelector('.menu').addEventListener('mouseout', function () {
      parent.querySelector('.menu').style.height = 30 + "px";
    });
  }, 200);
}

function ChangeDisplayThemeParameter() {
  if (document.querySelector("#switch-theme-".concat(localStorage.getItem('theme'))) && document.querySelector("#switch-theme-".concat(localStorage.getItem('theme') === "black" ? "white" : "black"))) {
    document.querySelector("#switch-theme-".concat(localStorage.getItem('theme'))).style.backgroundColor = 'var(--color-lighter)';
    document.querySelector("#switch-theme-".concat(localStorage.getItem('theme') === "black" ? "white" : "black")).style.backgroundColor = 'rgba(0,0,0,0)';
  }
}

function ChangeFont(font) {
  for (var _i = 0, _Object$entries = Object.entries(fonts); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];

    document.documentElement.style.setProperty(key, value[font]);
  }

  localStorage.setItem('theme', font);
  ChangeDisplayThemeParameter(font);
}

function ArticleManagement(value) {
  var Switch = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var articles = document.querySelectorAll('.sesame-informative');

  if (value === false) {
    document.querySelector("#switch-article-hide").style.backgroundColor = 'var(--color-lighter)';
    document.querySelector("#switch-article-view").style.backgroundColor = 'rgba(0,0,0,0)';

    if (Switch === true) {
      articles.forEach(function (article) {
        article.animate([{
          opacity: 1
        }, {
          opacity: 0,
          display: "none"
        }], {
          duration: 200,
          fill: "forwards"
        });
      });
      document.querySelector('.results-container').style.marginLeft = "auto";
      document.querySelector('.results-container').style.marginRight = "auto";
      document.querySelector('.results-container').style.width = "90%";
      document.querySelector('.results .infos').style.display = "none";
      document.querySelector('.results-container').style.paddingLeft = "0px";
    }
  } else {
    if (Switch) {
      articles.forEach(function (article) {
        article.animate([{
          opacity: 0,
          display: "flex"
        }, {
          opacity: 1
        }], {
          duration: 200,
          fill: "forwards"
        });
      });
      document.querySelector("#switch-article-view").style.backgroundColor = 'var(--color-lighter)';
      document.querySelector("#switch-article-hide").style.backgroundColor = 'rgba(0,0,0,0)';
      document.querySelector('.results-container').style.marginLeft = "10px";
      document.querySelector('.results-container').style.marginRight = "unset";
      document.querySelector('.results-container').style.width = "calc(100% - 550px)";
      document.querySelector('.results .infos').style.display = "none";
      document.querySelector('.results-container').style.paddingLeft = "0px";
    }
  }

  if (Switch == true) {
    localStorage.setItem('article_view', value);
  }
}