"use strict";

/*

    Sesame Database API Dev Log

    📅 Created: Aug. 9, 2023
    🔄 Last Update: Aug. 27, 2023

 */
var __Path__ = "https://raw.githubusercontent.com/W0lfan/sesame/main/database/";
var __LINKS__ = {
  codes: "codes.json",
  users: "users.json",
  mods: "mods.json",
  communities: "communities.json",
  ships: "ships.json"
};
var __Version__ = "0.0.1";

function fetchData(url) {
  return fetch(url).then(function (response) {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return response.json();
  });
}

function FetchDataFromDatabase(directory, gathering) {
  var path, content, gathering_available;
  return regeneratorRuntime.async(function FetchDataFromDatabase$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (__LINKS__.hasOwnProperty(directory)) {
            _context.next = 3;
            break;
          }

          console.error("Error: \"".concat(directory, "\" key not found in the object.\nAvailable keys: ").concat(Object.keys(__LINKS__).join(", ")));
          return _context.abrupt("return");

        case 3:
          path = __Path__ + directory + ".json";
          console.log('New request to the Sesame database. Fetching from ' + path);
          _context.prev = 5;
          _context.next = 8;
          return regeneratorRuntime.awrap(fetchData(path));

        case 8:
          content = _context.sent;
          console.log("Sesame Database - Z".concat(directory, ".json\nFound ").concat(content.length, " replies. Extracting datas."));

          if (!(gathering === 1)) {
            _context.next = 15;
            break;
          }

          console.log("Returning all datas from ".concat(directory, ".json."));
          return _context.abrupt("return", content);

        case 15:
          gathering = gathering.map(function (value) {
            return value.toLowerCase();
          });
          gathering_available = content.filter(function (item) {
            return gathering.some(function (gather) {
              return item.name.toLowerCase().includes(gather) || item.description && item.description.toLowerCase().includes(gather.toLowerCase()) || item.author && Array.isArray(item.author) && item.author.some(function (aut) {
                return aut && Array.isArray(aut.name) && aut.name.some(function (name) {
                  return name.toLowerCase().includes(gather.toLowerCase());
                });
              }) || item.author && !Array.isArray(item.author) && item.author.toLowerCase().includes(gather.toLowerCase());
            });
          });
          console.log("Compatibility found in ".concat(directory, ".json for \"").concat(gathering.join(', '), "\". Returning datas."));
          console.log(gathering_available);
          return _context.abrupt("return", gathering_available);

        case 20:
          _context.next = 25;
          break;

        case 22:
          _context.prev = 22;
          _context.t0 = _context["catch"](5);
          console.error('Fetch error:', _context.t0);

        case 25:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[5, 22]]);
}

function QuerySpecific(query, directory) {
  var path, content, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, value;

  return regeneratorRuntime.async(function QuerySpecific$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          path = "https://raw.githubusercontent.com/W0lfan/sesame/main/database/" + directory + ".json";
          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(fetchData(path));

        case 4:
          content = _context2.sent;
          _iteratorNormalCompletion = true;
          _didIteratorError = false;
          _iteratorError = undefined;
          _context2.prev = 8;
          _iterator = content[Symbol.iterator]();

        case 10:
          if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
            _context2.next = 17;
            break;
          }

          value = _step.value;

          if (!(value.name && value.name == query)) {
            _context2.next = 14;
            break;
          }

          return _context2.abrupt("return", value);

        case 14:
          _iteratorNormalCompletion = true;
          _context2.next = 10;
          break;

        case 17:
          _context2.next = 23;
          break;

        case 19:
          _context2.prev = 19;
          _context2.t0 = _context2["catch"](8);
          _didIteratorError = true;
          _iteratorError = _context2.t0;

        case 23:
          _context2.prev = 23;
          _context2.prev = 24;

          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }

        case 26:
          _context2.prev = 26;

          if (!_didIteratorError) {
            _context2.next = 29;
            break;
          }

          throw _iteratorError;

        case 29:
          return _context2.finish(26);

        case 30:
          return _context2.finish(23);

        case 31:
          _context2.next = 36;
          break;

        case 33:
          _context2.prev = 33;
          _context2.t1 = _context2["catch"](1);
          console.error('Fetch error:', _context2.t1);

        case 36:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 33], [8, 19, 23, 31], [24,, 26, 30]]);
}