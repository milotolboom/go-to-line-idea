'use strict';

let input = document.getElementById("inputFolder");

input.addEventListener('input', function (evt) {
    chrome.storage.sync.set({folder: this.value}, function () {
    });
});
