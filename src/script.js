'use strict';

console.log("Loaded");

const files = [...document.getElementsByClassName("file")];


chrome.storage.sync.get('folder', function (userDir) {
    files.forEach((file) => {
        const fileTitle = [...file.getElementsByClassName("file-info")][0].title;
        const lines = [...file.getElementsByClassName("js-linkable-line-number")];

        lines.forEach((line) => {
            const lineNr = line.dataset.lineNumber;
            const aElement = document.createElement('a');
            aElement.href = `idea://open?file=${userDir.folder}${fileTitle}&line=${lineNr}`;
            aElement.target = "_blank";
            aElement.style.display = "contents";
            aElement.style.boxSizing = "border-box";

            line.className = line.className.replace("js-linkable-line-number", "");
            line.parentNode.insertBefore(aElement, line);

            aElement.appendChild(line);
        });
    });

    console.log(data);
});


