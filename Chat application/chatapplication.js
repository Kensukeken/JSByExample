// Create a WebSocket object
const socket = new WebSocket('ws://localhost:8080');

// Handle incoming messages
socket.addEventListener('message', event => {
	const message = event.data;
	displayMessage(message);
});

// Display a message in the chat window
function displayMessage(message) {
	const chatWindow = document.getElementById('chat-window');
	const messageElement = document.createElement('div');
	messageElement.textContent = message;
	chatWindow.appendChild(messageElement);
}

// Send a message to the server
function sendMessage() {
	const messageInput = document.getElementById('message-input');
	const message = messageInput.value;
	socket.send(message);
	messageInput.value = '';
}

// Add an event listener for the send button
const sendButton = document.getElementById('send-button');
sendButton.addEventListener('click', sendMessage);
