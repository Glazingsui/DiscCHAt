// script.js
// Jab message aayega, sound play karo
function playMessageSound() {
    var messageSound = document.getElementById("message-sound");
    messageSound.play();
  }
  
  // Yahan par message aane ka code hoga, jab message aayega to playMessageSound() function call karna
  
document.addEventListener('DOMContentLoaded', () => {
    const messagesContainer = document.getElementById('messages');
    const messageInput = document.getElementById('message-input');
    const sendButton = document.getElementById('send-button');

    // Function to display message in the chat
    function displayMessage(message) {
        const messageElement = document.createElement('div');
        messageElement.textContent = message;
        messagesContainer.appendChild(messageElement);
    }

    // Send message when button is clicked
    sendButton.addEventListener('click', () => {
        const message = messageInput.value.trim();
        if (message !== '') {
            displayMessage(message);
            messageInput.value = '';
        }
    });

    // Send message when Enter key is pressed
    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendButton.click();
        }
    });
});
