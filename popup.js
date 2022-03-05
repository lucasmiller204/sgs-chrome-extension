let changeColor = document.getElementById("changeColor");
let reportButton = document.getElementById("reportBtn1");
let teenHelpButton = document.getElementById("teenHelpBtn1");
let parentHelpButton = document.getElementById("parentHelpBtn1");

// Reporting button event listener
reportButton.addEventListener("click", function() {
    chrome.tabs.create({ url: "https://www.smartgensociety.org/reporting" });
});

teenHelpButton.addEventListener("click", function() {
    chrome.tabs.create({ url: "https://www.smartgensociety.org/resources/teens" });
});

parentHelpButton.addEventListener("click", function() {
    chrome.tabs.create({ url: "https://www.smartgensociety.org/resources/parents" });
});

// chrome.storage.sync.get("color", ({ color }) => {
//     changeColor.style.backgroundColor = color;
// })

// changeColor.addEventListener("click", async() => {
//     let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

//     chrome.scripting.executeScript({
//         target: { tabId: tab.id },
//         function: setPageBackgroundColor,
//     });
// });



// function setPageBackgroundColor() {
//     chrome.storage.sync.get("color", ({ color }) => {
//         document.body.style.backgroundColor = color;
//     });
// }   });
// }