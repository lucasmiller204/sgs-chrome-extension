let changeColor = document.getElementById("changeColor");
let button = document.getElementById("reportBtn1");

// Reporting button event listener
button.addEventListener("click", function() {
    chrome.tabs.create({ url: "https://www.smartgensociety.org/reporting" });
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
// }