'use strict';

console.log("Loaded");

let files = [...document.getElementsByClassName("file")];


chrome.storage.sync.get('folder', function (userDir) {
    files.forEach((file) => {
        let fileTitle = [...file.getElementsByClassName("file-info")][0].title;
        if (fileTitle === "") {
            fileTitle = [...file.getElementsByClassName("file-header")][0].getAttribute("data-path");
        }
        const lines = [...file.getElementsByClassName("js-linkable-line-number")];

        lines.forEach((line) => {
            const lineNr = line.dataset.lineNumber;
            const aElement = document.createElement('a');
            aElement.href = `idea://open?file=${userDir.folder}${fileTitle}&line=${lineNr}`;
            aElement.style.display = "contents";
            aElement.style.boxSizing = "border-box";

            line.className = line.className.replace("js-linkable-line-number", "");
            line.parentNode.insertBefore(aElement, line);

            aElement.appendChild(line);
        });
    });
});


