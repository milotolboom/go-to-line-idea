console.log('⚡️ Loaded go-to-line-idea');

const run = async () => {
    const files = [...document.getElementsByClassName("file")];

    const userDir = {
        folder: "/Users/milo/Projects/go-to-line-idea"
    };

    const idePrefix = "webstorm://open?file=";

    files.forEach((file) => {
        const path = [...file.getElementsByClassName("file-header")][0].getAttribute("data-path");
        const lines = [...file.getElementsByClassName("js-linkable-line-number")];

        lines.forEach((line) => {
            const lineNr = line.dataset.lineNumber;
            const aElement = document.createElement('a');
            aElement.href = buildPath(idePrefix, userDir.folder, path) + `&line=${lineNr}`;
            aElement.className = "go-to-line-ide-link";
            aElement.style.display = "contents";
            aElement.style.boxSizing = "border-box";

            line.className = line.className.replace("js-linkable-line-number", "");
            line.parentNode.insertBefore(aElement, line);

            aElement.appendChild(line);
        });
    });
}


const buildPath = (...args) => {
    return args.map((part, i) => {
        if (i === 0) {
            return part.trim().replace(/[\/]*$/g, '')
        } else {
            return part.trim().replace(/(^[\/]*|[\/]*$)/g, '')
        }
    }).filter(x=>x.length).join('/')
}

chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
        switch (request.action) {
            case "re-run":
                await run();
                break;
            default:
                break;
        }
    }
);

run();
