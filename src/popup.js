
downloadBtn.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: downloadFile,
    });
});

function downloadFile() {
    let content = ""

    if (location.host.match("jusbrasil") && location.pathname.match("jurisprudencia")) {

        let subject = document.getElementsByClassName("unprintable");
        for (let i = 0; i < subject.length; i++) {
            if (subject[i].innerText != undefined || subject[i].innerText != "undefined")
                content += subject[i].innerText + "\n";
        };
    }
    else {
        if (location.host != ".jusbrasil.com.br") {
            alert("Por favor abra a página do Jusbrasil que você quer realizar o download");
            return;
        }
        else if (!(location.pathname.match("jurispridencia"))) {
            alert("Algo de errado não está certo nesta página! É uma página de jurisprudencia?");
            return;
        }
    }
    if (content) {
        var blob = new Blob([content], { type: "text/plain;charset=utf-8" });

        var f = document.createElement("a");
        f.download = document.title + ".txt";
        f.href = window.URL.createObjectURL(blob);
        f.click();
    }
}
