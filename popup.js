var reportButton = document.getElementById("reportBtn1");
var teenHelpButton = document.getElementById("teenHelpBtn1");
var parentHelpButton = document.getElementById("parentHelpBtn1");
var moreHelpButton = document.getElementById("moreHelpBtn1");

// Reporting button event listener
reportButton.addEventListener("click", function() {
    chrome.tabs.create({ url: "https://www.smartgensociety.org/reporting" })
});

teenHelpButton.addEventListener("click", function() {
    chrome.tabs.create({ url: "https://www.smartgensociety.org/resources/teens" })
});

parentHelpButton.addEventListener("click", function() {
    chrome.tabs.create({ url: "https://www.smartgensociety.org/resources/parents" })
});

moreHelpButton.addEventListener("click", function() {
    chrome.tabs.executeScript({
        code: 'console.log("hello");'
    });
}, false);