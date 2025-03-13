let messageCount = 0;

// Function to submit a message and add it to the sidewalk
function submitMessage() {
  const messageInput = document.getElementById('messageInput');
  const messageText = messageInput.value.trim();

  if (messageText !== "") {
    messageCount++;
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.textContent = messageText;

    const messagesContainer = document.getElementById('messages');
    messagesContainer.appendChild(messageElement);

    // Clear the input field after submission
    messageInput.value = "";

    // Make sure the page scrolls to the bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }
}
