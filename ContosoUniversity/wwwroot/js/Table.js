console.log("TableJavaScript");
function mainTable() {
    console.log("In getAllMessages();");
    var tbl = $('#messagesTable');
    var i = 1;
    console.log("In windowonload");

    $.ajax({
        url: '/api/students',
        contentType: 'application/html ; charset:utf-8',
        type: 'GET',
        dataType: 'json',
        success: function (result) {
            console.log(result);
            tbl.empty();
            $.each(result, function (key, value) {
                tbl.append(
                    '<tr>' +
                    '<td>' + i + '</td>' +
                    '<td>' + value.createDate + '</td>' +
                    '<td>' + value.firstMidName + '</td>' +
                    '<td>' + value.ldR1 + '</td>' +
                    '<td>' + value.ldR2 + '</td>' +
                    '<td>' + value.ldR3 + '</td>' +
                    '<td>' + value.ldR4 + '</td>' +
                    '<td>' + value.ldR5 + '</td>' +
                    '<td>' + value.temperatureInCelc + '</td>'
                    + '</tr>'
                );
                i = i + 1;
            }); updateTable();
        }
    });

    function updateTable() {
        console.log("uptadeTable");
        $.getJSON("https://localhost:44335/api/students" + "/" + (i))
            .done(function (value) {
                console.log("JSON Data: " + value);
                tbl.append(
                    '<tr>' +
                    '<td>' + i + '</td>' +
                    '<td>' + value.createDate + '</td>' +
                    '<td>' + value.firstMidName + '</td>' +
                    '<td>' + value.ldR1 + '</td>' +
                    '<td>' + value.ldR2 + '</td>' +
                    '<td>' + value.ldR3 + '</td>' +
                    '<td>' + value.ldR4 + '</td>' +
                    '<td>' + value.ldR5 + '</td>' +
                    '<td>' + value.temperatureInCelc + '</td>'
                    + '</tr>'
                );
                i = i + 1;
            })
            .fail(function (jqxhr, textStatus, error) {
                var err = textStatus + ", " + error;
                console.log("Request Failed: " + err);
            });
    }
    setInterval(function () {
        updateTable();
    }, 1000);
}
