const net = require("net");

// Create a server instance
const server = net.createServer((socket) => {
	console.log("Client connected");

	// Handle incoming data from client
	socket.on("data", (data) => {
		console.log(`Client: ${data.toString()}`);

		// Send a response to the client
		socket.write("Hello from server!");
	});

	// Handle client disconnection
	socket.on("end", () => {
		console.log("Client disconnected");
	});
});

// Bind the server to port 5566 and start listening
server.listen(5566, () => {
	console.log("Server listening on port 5566");
});
