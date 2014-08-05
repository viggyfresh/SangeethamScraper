function download() {
    chrome.tabs.executeScript(null, { file: "js/download.js" });
}

$(document).ready(function() {
    $('#download_button').click(download);
    chrome.tabs.executeScript(null, { file: "js/table.js" }, function(result) {
        $('#table_body').append(result[0]);
    });
});