"use strict";

function DownLoad(url, name) {
  fetch(url).then(function (response) {
    return response.text();
  }).then(function (data) {
    var fileContent = data;
    var fileName = "".concat(name);
    var fileBlob = new Blob([fileContent], {
      type: 'text'
    });
    var downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(fileBlob);
    downloadLink.download = fileName;
    downloadLink.click();
    URL.revokeObjectURL(downloadLink.href);
  })["catch"](function (error) {
    console.error('Error fetching file:', error);
    alert('An error occured. Please join the Discord server in order to report it.');
  });
}

function DownLoadCode(code, name) {
  var fileContent = code;
  var fileName = "".concat(name);
  var fileBlob = new Blob([fileContent], {
    type: 'text'
  });
  var downloadLink = document.createElement('a');
  downloadLink.href = URL.createObjectURL(fileBlob);
  downloadLink.download = fileName;
  downloadLink.click();
  URL.revokeObjectURL(downloadLink.href);
}