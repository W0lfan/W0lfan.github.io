"use strict";

var __NAME__ = "Sesame";
var __DISPLAY_WAIT__ = 500;
var __PRIOR__ = {
  1: "Author",
  2: "Description",
  3: "Name"
};

function UpdatePage(url, title) {
  document.title = title;
  window.location.hash = url;
}