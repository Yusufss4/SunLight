"use strict";
console.log("In the CHAT.JS");
var connection = new signalR.HubConnectionBuilder().withUrl("/chatHub").build();
console.log("Test1");
//Disable send button until connection is established
document.getElementById("sendButton").disabled = true;
/*
connection.on("ReceiveMessage", function (user, message) {
    console.log("Connection_On");
    var msg = message;
    //var msg = message.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    var encodedMsg = user + " says " + msg;
    var li = document.createElement("li");
    li.textContent = encodedMsg;
    document.getElementById("messagesList").appendChild(li);
    console.log("Before getAllMessages();");
}); */

connection.start().then(function () {
    console.log("in connection.start()");
    document.getElementById("sendButton").disabled = false;
}).catch(function (err) {
    return console.error(err.toString());
}); 
/*
function getAllMessages() {
    connection.invoke("SendMessage", user, message).catch(function (err) {
        return console.error(err.toString());
    });
    event.preventDefault();
    console.log("In getAllMessages();");
    var tbl = $('#messagesTable');
    $.ajax({
        url: '/api/students',
        contentType: 'application/html ; charset:utf-8',
        type: 'GET',
        dataType: 'html',
        success: function (result) {
            console.log(result);
            var a2 = JSON.parse(result);
            tbl.empty();
            var i = 1;
            $.each(a2, function (key, value) {
                tbl.append('<tr>' + '<td>' + i + '</td>' + '<td>' + value.empName + '</td>' + '<td>' + value.Salary + '</td>' + '<td>' + value.DeptName + '</td>' + '<td>' + value.Designation + '</td>' + '</tr>');
                i = i + 1;
            });
        }
    });
} */

function getAllMessages()  {
   
    console.log("In getAllMessages();");
    var tbl = $('#messagesTable');
    $.ajax({
        url: '/api/students',
        contentType: 'application/html ; charset:utf-8',
        type: 'GET',
        dataType: 'html',
        success: function (result) {
            console.log(result);
            var a2 = JSON.parse(result);
            tbl.empty();
            var i = 1;
            $.each(a2, function (key, value) {
                tbl.append('<tr>' + '<td>' + i + '</td>' + '<td>' + value.id + '</td>' + '<td>' + value.firstMidName + '</td>' + '<td>' + value.enrollmentDate + '</td>' + '<td>' + value.fullName + '</td>' + '</tr>');
                i = i + 1;
            });
        }
    });
};

setInterval(function () {
    getAllMessages();
}, 1000); //Every 1000ms = 1sec