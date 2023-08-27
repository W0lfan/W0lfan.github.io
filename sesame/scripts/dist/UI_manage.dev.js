"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function display_ui_by_file(type, act_back, part) {
  var response, text, parent;
  return regeneratorRuntime.async(function display_ui_by_file$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!part) {
            part = document.body;
          }

          _context.next = 3;
          return regeneratorRuntime.awrap(fetch("uis/".concat(type)));

        case 3:
          response = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(response.text());

        case 6:
          text = _context.sent;
          parent = document.createElement('div');
          parent.innerHTML = text;
          parent.addEventListener('load', function () {
            act_back();
            console.log('The parent is fully loaded!');
          });
          part.innerHTML += text;

        case 11:
        case "end":
          return _context.stop();
      }
    }
  });
}

var check_ui_display = function check_ui_display() {
  var status = localStorage.getItem('display');
  document.querySelector(".view-".concat(status)).style.backgroundColor = "var(--backgrounds-lighter)";
};

var trigger_search = [];

function ManageQuerySearch(element) {
  var id = element.id; // Toggle the id in the array

  if (trigger_search.includes(id)) {
    trigger_search = trigger_search.filter(function (triggeredId) {
      return triggeredId !== id;
    });
    element.style.backgroundColor = "var(--backgrounds-lighter)";
    document.querySelectorAll(".".concat(id, "-result")).forEach(function (el) {
      el.style.display = 'flex';
    });
    document.querySelector("#".concat(id, " span")).innerHTML = Metrics[id];
    document.querySelector("".concat(id, "-swipe-scroll")).style.display = "flex";
  } else {
    trigger_search.push(id);
    element.style.backgroundColor = "var(--backgrounds)";
    document.querySelectorAll(".".concat(id, "-result")).forEach(function (el) {
      el.style.display = 'none';
    });
    document.querySelector("#".concat(id, " span")).innerHTML = '0';
    document.querySelector("#".concat(id, "-metrics span")).innerHTML = '0';
    document.querySelector("".concat(id, "-swipe-scroll")).style.display = "none";
  } // Update element's background color
  // Perform search using Search function

}

var ManageDisplay = function ManageDisplay() {
  var status = localStorage.getItem('display');
  var toDisplayBack = document.querySelectorAll('.mod-result');

  if (status === "grid") {
    localStorage.setItem('display', 'line');
    toDisplayBack.forEach(function (el) {
      el.classList.remove('result-grid');
      el.classList.add('result-line'); // Use a different class name for line display
    });
    document.querySelector('.results-container').classList.remove("grid-display");
    document.querySelector('.results-container').classList.add("line-display");
    document.querySelector('.view-line').style.backgroundColor = "var(--backgrounds-lighter)";
    document.querySelector('.view-grid').style.backgroundColor = "var(--backgrounds)";
  } else {
    localStorage.setItem('display', 'grid');
    toDisplayBack.forEach(function (el) {
      el.classList.add('result-grid');
      el.classList.remove('result-line'); // Use a different class name for line display
    });
    document.querySelector('.results-container').classList.add("grid-display");
    document.querySelector('.results-container').classList.remove("line-display");
    document.querySelector('.view-line').style.backgroundColor = "var(--backgrounds)";
    document.querySelector('.view-grid').style.backgroundColor = "var(--backgrounds-lighter)";
  }
  /*
  if (search_input == "Official Mods") {
      Search('Official Mods',false,'mods',[],'official',[1,2])
  } else if (search_input == "All Mods") {
      Search('All Mods',false,'mods');
  } else if (search_input == "All communities") {
      Search('All communities',false,'communities')
  }  else if (search_input == "All Users") {
      Search('All Users',false,'users')
  } else if (search_input == "Official Contributors") {
      Search('Official Contributors',false,'users',trigger_search,'isContrib',true)
  } else if (search_input == "Sesame Team") {
      Search('Sesame Team',false,'users',trigger_search,'isSesame',true)
  }else {
      Search(search_input, false, false,trigger_search);
  }*/

};

function githubToRaw(githubUrl) {
  var regex = /github\.com\/([^\/]+)\/([^\/]+)\/blob\/([^\/]+)\/(.+)/;
  var match = githubUrl.match(regex);

  if (match) {
    var _match = _slicedToArray(match, 5),
        user = _match[1],
        repo = _match[2],
        branch = _match[3],
        path = _match[4];

    return "https://raw.githubusercontent.com/".concat(user, "/").concat(repo, "/").concat(branch, "/").concat(path);
  } else {
    console.error("Invalid GitHub URL format");
    return null;
  }
}

function wrapCodeWithSyntaxHighlighting(codeLines) {
  var highlightingRules = [{
    regex: /\.ace_numeric\b/,
    "class": "ace_numeric"
  }, {
    regex: /\.ace_boolean\b/,
    "class": "ace_boolean"
  }, {
    regex: /\.ace_string\b/,
    "class": "ace_string"
  }, {
    regex: /\.ace_type\b/,
    "class": "ace_type"
  }, {
    regex: /\.ace_function\b/,
    "class": "ace_function"
  }, {
    regex: /\.ace_keyword\b/,
    "class": "ace_keyword"
  }, {
    regex: /\.ace_escape\b/,
    "class": "ace_escape"
  }, {
    regex: /\.ace_variable .ace_language\b/,
    "class": "ace_variable ace_language"
  }, {
    regex: /\.ace_comment\b/,
    "class": "ace_comment"
  }];
  return codeLines.map(function (line) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = highlightingRules[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var rule = _step.value;

        if (line.match(rule.regex)) {
          return "<span class=\"".concat(rule["class"], "\">").concat(line, "</span><br>");
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

    return "".concat(line, "<br>");
  }).join('');
}

function formatArray(array) {
  return array.map(function (item) {
    return "".concat(item);
  }).join(', ');
}

var article_view = true;

function ManageArticle() {
  var article_parent = document.querySelector('.sesame-informative');
  var show = document.getElementById('show-article');
  var hide = document.getElementById('hide-article');

  if (article_view === true) {
    hide.style.display = "none";
    show.style.display = "flex";
    article_parent.style.height = "0.1px"; // Set initial value before transition

    article_parent.style.borderRadius = "20px";
  } else {
    hide.style.display = "flex";
    show.style.display = "none";
    article_parent.style.borderRadius = "10px";
    article_parent.style.height = article.height; // Set full height before transition
  }

  article_view = !article_view;
}