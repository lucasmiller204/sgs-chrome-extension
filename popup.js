var reportButton = document.getElementById("reportBtn1");
var reportButtonYes = document.getElementById("reportBtnY");
var reportButtonNo = document.getElementById("reportBtnN");
var teenHelpButton = document.getElementById("teenHelpBtn1");
var parentHelpButton = document.getElementById("parentHelpBtn1");
var moreHelpButton = document.getElementById("moreHelpBtn1");
var backButton = document.getElementById("backBtn1")
var additionalResourcesBody = document.getElementById("additionalResourcesBody");
var resourceHeader = document.getElementById("resourceHeader");
var reportHeader = document.getElementById("reportHeader");
var interactiveReportingButton = document.getElementById("interactiveReportingBtn1");
var safePlaceHeader = document.getElementById("safePlace");

// Reporting button event listener
reportButton.addEventListener("click", function() {
    chrome.tabs.create({ url: "https://www.smartgensociety.org/reporting" });
});

teenHelpButton.addEventListener("click", function() {
    chrome.tabs.create({ url: "https://www.smartgensociety.org/resources/teens" })
});

parentHelpButton.addEventListener("click", function() {
    chrome.tabs.create({ url: "https://www.smartgensociety.org/resources/parents" });
});

reportButtonYes.addEventListener("click", function() {
    reportButton.style.display = "initial";
    reportHeader.style.display = "initial";
    moreHelpButton.style.display = "initial";
    reportButtonYes.style.display = "none";
    reportButtonNo.style.display = "none";
    backButton.style.display = "none";
    additionalResourcesBody.style.display = "none";
    teenHelpButton.style.display = "none";
    parentHelpButton.style.display = "none";
    resourceHeader.style.display = "none";
    additionalResourcesBody.style.display = "none";
    safePlaceHeader.style.display = "none";
});

reportButtonNo.addEventListener("click", function() {
    reportButton.style.display = "none";
    reportHeader.style.display = "none";
    moreHelpButton.style.display = "none";
    reportButtonYes.style.display = "none";
    reportButtonNo.style.display = "none";
    backButton.style.display = "none";
    additionalResourcesBody.style.display = "initial";
    teenHelpButton.style.display = "initial";
    parentHelpButton.style.display = "initial";
    resourceHeader.style.display = "initial";
    additionalResourcesBody.style.display = "initial";
    safePlaceHeader.style.display = "none";
});

moreHelpButton.addEventListener("click", function() {
    reportButton.style.display = "none";
    reportHeader.style.display = "none";
    moreHelpButton.style.display = "none";
    backButton.style.display = "initial";
    reportButtonYes.style.display = "none";
    reportButtonNo.style.display = "none";
    additionalResourcesBody.style.display = "initial";
    teenHelpButton.style.display = "initial";
    parentHelpButton.style.display = "initial";
    resourceHeader.style.display = "initial";
    additionalResourcesBody.style.display = "initial";
    // interactiveReportingButton.style.display = "initial";
});

backButton.addEventListener("click", function() {
    reportButton.style.display = "initial";
    reportHeader.style.display = "initial";
    moreHelpButton.style.display = "initial";
    backButton.style.display = "none";
    additionalResourcesBody.style.display = "none";
    teenHelpButton.style.display = "none";
    parentHelpButton.style.display = "none";
    resourceHeader.style.display = "none";
    additionalResourcesBody.style.display = "none";
    interactiveReportingButton.style.display = "none";
});