chrome.runtime.sendMessage({ action: "disable" }, function (response) {
    console.log("Js status:" + response.result)
});


// var contentSettings = chrome.contentSettings;

// contentSettings.javascript.clear({}, function () {
//     contentSettings.javascript.set({
//         primaryPattern: '*://*.jusbrasil.com.br/jurisprudencia/*',
//         setting: 'block'
//     });
// });

// chrome.contentSettings.javascript.get({
//     incognito: true,
//     primaryUrl: '*://*.jusbrasil.com.br/jurisprudencia/*'
// }, function (details) {
//     alert(`Javascript status ${details.setting}`);
// })