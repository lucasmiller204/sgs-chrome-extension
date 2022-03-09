// background.js

let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ color });
    console.log('Default background color set to %cgreen', `color: ${color}`);
});


// // Add event actions to actually happen here!
// chrome.browserAction.onClicked.addListener(function() {
//     chrome.tabs.create({ url: "https://www.smartgensociety.org/reporting" });
// });

// chrome.browserAction.onClicked.addListener(function() {
//     chrome.tabs.create({ url: "https://www.smartgensociety.org/resources/teens" });
// });

// chrome.browserAction.onClicked.addListener(function() {
//     chrome.tabs.create({ url: "https://www.smartgensociety.org/resources/parents" });
// });


// chrome.browserAction.onClicked.addListener(function() {
//     chrome.tabs.executeScript({
//         code: 'document.body.style.backgroundColor = "black";'
//     });
//     console.log("Help clicked");
// });