// Get modal element
var modal = document.getElementById('chatbotModal');

// Get the button that opens the modal
var btn = document.getElementById('chatbotButton');

// Get the <span> element that closes the modal
var span = document.getElementById('closeModal');

// Get chat elements
var chatBox = document.getElementById('chatBox');
var userMessage = document.getElementById('userMessage');
var sendMessage = document.getElementById('sendMessage');

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Function to format message content
function formatMessage(content) {
    // Replace **text** with <strong>text</strong> for bold
    content = content.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

    // Replace 1. 2. 3. with <ol><li> text </li></ol> for ordered lists
    content = content.replace(/(\d+\. )(.*?)(?=\d+\. |\n|$)/g, '<ol><li>$2</li></ol>');

    // Replace * text with <ul><li> text </li></ul> for unordered lists
    content = content.replace(/\* (.*?)(?=\* |$)/g, '<ul><li>$1</li></ul>');

    return content;
}

// Function to add message to chat box
function addMessage(content, type) {
    var messageDiv = document.createElement('div');
    messageDiv.className = 'chat-message ' + type;
    var messageParagraph = document.createElement('p');
    messageParagraph.innerHTML = formatMessage(content); // Use innerHTML to parse HTML content
    messageDiv.appendChild(messageParagraph);
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}

// Send message
sendMessage.onclick = function() {
    var message = userMessage.value.trim();
    if (message) {
        addMessage(message, 'user');
        userMessage.value = '';

        // Send message to the server
        fetch('http://localhost:3000/data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ prompt: message })
        })
        .then(response => response.json())
        .then(data => {
            addMessage(data.response, 'bot');
        })
        .catch(error => {
            addMessage("Sorry, something went wrong. Please try again later.", 'bot');
            console.error('Error:', error);
        });
    }
}

// Allow sending message by pressing Enter
userMessage.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage.click();
    }
});
