
var client;




var topicArray = []

$('#btnOn').on('click', function () {
	// connect
	var connect = "connect button clicked.."
	console.log(connect)
	client = mqtt.connect("wss://test.mosquitto.org:8081/mqtt")
	client.on("connect", function () {
		var topic = "gamboa/device/status"
		var message = "turned on"
		client.publish(topic, message);
		console.log("Successfully connected");
		console.log("address: " + "wss://test.mosquitto.org:8081/mqtt");
	})
	
})

$("#btnOff").click(function () {
	var topic = "gamboa/device/status"
	var message = "turned off"
	client.publish(topic, message);
	console.log("Disconnected!")
})//end disconnect
















