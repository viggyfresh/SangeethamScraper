console.log($("tbody > tr > td > b > a"));
var html = "";
$("tbody > tr > td > b > a").each(function(index) {
    html += "<tr>";
    html += "<td>" + (index + 1) + "</td>";
    html += "<td>" + $(this).text() + "</td>";
    html += "<td><button class='btn btn-sm btn-danger'>Download</button></td>";
    html += "</tr>";
});

html;
// $("li.audio > h2").each(function(index) {
//     var html = "<tr>";
//     html += "<td>" + index + "</td>";
//     html += "<td>" + $(this).text() + "</td>";
//     html += "<td><button class='btn btn-sm btn-danger'>Download</button></td>";
//     html += "</tr>";
// });
// html;