chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.action == "disable") {
            disableJs(request, sender, sendResponse)
        }
        return true;
    }
);

function checkJsStatus(request, sender, sendResponse) {



}

function disableJs(request, sender, sendResponse) {
    chrome.contentSettings.javascript.set({
        primaryPattern: "https://*.jusbrasil.com.br/*",
        setting: "block"
    }, function (result) {
        sendResponse({ result: "blocked" });
    });
}