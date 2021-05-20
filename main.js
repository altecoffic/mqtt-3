console.log("index.js");

// var client  = mqtt.connect({ host:'test.mosquitto.org', port: 8081})
// or
var client = mqtt.connect('wss://test.mosquitto.org:8081/mqtt');

//confirm connection
client.on('connect', function() {
    console.log('You are now connected!');
})

var Topic = document.getElementById('pubTopic').value;
var Payload = document.getElementById('pubPayload').value;
client.on('message', function(Topic, Payload) {
    $(".table tbody").append("<tr><td>" + Topic + "</td><td>" + Payload + "</td></tr>");

})

var topic = document.getElementById('pubTopic');
var payload = document.getElementById('pubPayload');
var subtopic = document.getElementById('subTopic');
$(document).ready(function() {
    $('#publishBtn').click(function() {
        client.publish(topic.value, payload.value);
    })
    $('#subscribeBtn').click(function() {
        var res = subtopic.value == "" ? alert("Please Fill up the Field") : client.subscribe(subtopic.value);
    })

})

function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("tbody").deleteRow(i);
}