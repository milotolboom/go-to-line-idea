'use strict';

let input = document.getElementById("inputFolder");

chrome.storage.sync.get('folder', function(data) {
    input.value = data.folder;
});

input.addEventListener('input', function (evt) {
    chrome.storage.sync.set({folder: this.value}, function () {
    });
});
