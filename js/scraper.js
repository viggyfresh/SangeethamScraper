var magic = 5;

function batch_download(e) {
    var index = parseInt($(e.target).attr("data-index"));
    var urls = [];
    $(".single-download").each(function() {
        urls.push($(this).context.href);
    });
    var counter = 0;
    for (var i = index * magic; i < urls.length && i < ((index + 1) * magic); i++) {
        setTimeout(function(url) {
            chrome.downloads.download({url: url});
        }, 1000 + (1000 * counter), urls[i]);
        counter++;
    }
}

function single_download(e) {
    var target = $(e.target).attr('href');
    chrome.downloads.download({ url: target });
}

$(document).ready(function() {
    chrome.tabs.executeScript(null, { file: "js/table.js" }, function(result) {
        $('#table-body').append(result[0].html);
        $('.single-download').click(single_download);
        var count = result[0].count;
        var num_buttons = Math.ceil(count / magic);
        for (var i = 0; i < num_buttons; i++) {
            $('#button-row').append("<button class='btn btn-sm btn-success batch-download' data-index='" + i + "'>Download " 
                    + ((i * magic) + 1) + (((i + 1) * magic) >= count ? " - " + count : " - " + ((i + 1) * magic)) + "</button>&nbsp;&nbsp;");
        }
        $('.batch-download').click(batch_download);
    });
});