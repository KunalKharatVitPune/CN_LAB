const net = require("net");

// Create a socket (client)
const client = new net.Socket();

// Connect to the server
client.connect(5566, "127.0.0.1", () => {
	console.log("Connected to server");

	// Send a message to the server
	client.write("Hello from Client!");
});

// Handle data received from the server
client.on("data", (data) => {
	console.log(`Server: ${data.toString()}`);

	// Close the connection
	client.end();
});

// Handle connection closure
client.on("close", () => {
	console.log("Connection closed");
});
