"use strict";

document.addEventListener('DOMContentLoaded', function () {
  localStorage.setItem('display', 'line');

  if (localStorage.getItem('theme') === null) {
    localStorage.setItem('theme', 'black');
  }

  if (localStorage.getItem('article_view') === null) {
    localStorage.setItem('article_view', true);
  }

  if (localStorage.getItem('language') === null) {
    localStorage.setItem('language', "EN");
    location.reload();
  }

  ChangeFont(localStorage.getItem('theme'));

  var display_result = function display_result() {
    console.log('e');
  };

  function DisplayParameters() {
    return regeneratorRuntime.async(function DisplayParameters$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(display_ui_by_file('parameters.txt', display_result));

          case 2:
            ChangeFont(localStorage.getItem('theme'));
            ArticleManagement(localStorage.getItem('article_view') === 'true', "switch");

          case 4:
          case "end":
            return _context.stop();
        }
      }
    });
  }

  DisplayParameters();
  setTimeout(function () {
    SetLanguageForHome();
    console.log(location.href + "link");
    var link = location.href;

    if (link.includes('sesame/index.html#search?=') || link.includes('sesame/#search?=')) {
      var searchParams = new URLSearchParams(link.split('?')[1]);
      var content = searchParams.get(""); // Remove leading and trailing whitespace

      content = content.trim(); // Remove single quotes from both ends of the string (if present)

      content = content.replace(/^'|'$/g, '');
      content = content.replace(/-/g, ' ');
      console.log(content);
      Search(content);
    }
  }, 500);
  document.querySelector('.search-button').addEventListener('click', function () {
    Search();
  });
  document.addEventListener('keydown', function (event) {
    var Input = document.querySelector('.search-input input');

    if (event.key === 'Enter') {
      Search();
    } else if ((event.key === 'p' || event.key === 'P') && Input && document.activeElement != Input) {
      TriggerParameterView();
    }
  });
  window.addEventListener('scroll', function () {
    var scrollY = window.scrollY;
    var article = document.querySelector('.sesame-informative');

    if (scrollY > 20) {
      if (article) {
        article.style.top = "80px";
      }
    } else {
      if (article) {
        article.style.top = "130px"; // Initial position when at the top
      }
    }
  });
  document.addEventListener("click", function (event) {
    var ev = event.target;
    fetch("https://raw.githubusercontent.com/W0lfan/W0lfan.github.io/main/sesame/database/mods.json").then(function (response) {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      return response.json();
    }).then(function (data) {
      var mods = data;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = mods[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var mod = _step.value;

          if (mod.name === ev.id.replace('load-', "")) {
            DownLoad(githubToRaw(mod.link.url), mod.name);
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
    })["catch"](function (error) {
      console.error('Fetch error:', error);
    });
  });
});