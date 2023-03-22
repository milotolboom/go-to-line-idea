console.log('loaded bg');

chrome.tabs.onUpdated.addListener( async (tabId, changeInfo, tab) => {
    await chrome.tabs.sendMessage(tab.id, { action: "re-run" });
})
