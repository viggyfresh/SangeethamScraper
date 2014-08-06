var html = "";
var counter = 0;
$("li.audio > h2").each(function(index) {
    html += "<tr>";
    html += "<td>" + $(this).text() + "</td>";
    var trimmed = $(this).text().replace(/\s+/g, '');
    var baseURI = $(this).prop("baseURI");
    var split = baseURI.split('/');
    var url = split[2] + "/public_html/";
    for (var i = 3; i < split.length; i++) {
        if (split[i].indexOf("?p") != -1) {
            break;
        }
        if (split[i] != "") {
            url += split[i] + "/";
        }
    }
    url += trimmed + ".mp3";
    html += "<td><a class='btn btn-danger single-download' href='http://" + split[2] + "/fstream.php?file=/data/"
    + url + "'>Download</a></td>";
    html += "</tr>";
    counter++;
});
var result = { html: html, count: counter };
result;