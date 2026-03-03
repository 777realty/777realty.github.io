document.addEventListener('DOMContentLoaded', () => {
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotWindow = document.getElementById('chatbot-window');
    const chatbotClose = document.getElementById('chatbot-close');
    const chatIcon = document.querySelector('.chat-icon');
    const closeIcon = document.querySelector('.close-icon');
    const chatbotForm = document.getElementById('chatbot-form');
    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotMessages = document.getElementById('chatbot-messages');

    // Toggle Window Visibility
    function toggleChat() {
        const isHidden = chatbotWindow.classList.contains('hidden');

        if (isHidden) {
            chatbotWindow.classList.remove('hidden');
            chatbotToggle.classList.add('open');
            chatIcon.classList.add('hidden');
            closeIcon.classList.remove('hidden');
            setTimeout(() => chatbotInput.focus(), 100);
        } else {
            chatbotWindow.classList.add('hidden');
            chatbotToggle.classList.remove('open');
            chatIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        }
    }

    chatbotToggle.addEventListener('click', toggleChat);
    chatbotClose.addEventListener('click', toggleChat);

    // Add a new message to the chat UI
    function appendMessage(text, sender) {
        const msgDiv = document.createElement('div');
        msgDiv.classList.add('message');
        msgDiv.classList.add(sender === 'user' ? 'user-message' : 'bot-message');

        const p = document.createElement('p');
        p.textContent = text;
        msgDiv.appendChild(p);

        chatbotMessages.appendChild(msgDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight; // Auto scroll to bottom
    }

    // Show typing indicator
    function showTypingIndicator() {
        const msgDiv = document.createElement('div');
        msgDiv.id = 'typing-indicator';
        msgDiv.classList.add('bot-message');
        msgDiv.classList.add('message');
        msgDiv.style.borderBottomLeftRadius = '4px';

        const typingDiv = document.createElement('div');
        typingDiv.classList.add('typing-indicator');

        for (let i = 0; i < 3; i++) {
            const dot = document.createElement('div');
            dot.classList.add('typing-dot');
            typingDiv.appendChild(dot);
        }

        msgDiv.appendChild(typingDiv);
        chatbotMessages.appendChild(msgDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    function removeTypingIndicator() {
        const indicator = document.getElementById('typing-indicator');
        if (indicator) {
            indicator.remove();
        }
    }

    // Store message history to maintain context
    let chatHistory = [];

    // Handle Form Submission
    chatbotForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const messageText = chatbotInput.value.trim();
        if (!messageText) return;

        // 1. Show user message
        appendMessage(messageText, 'user');
        chatbotInput.value = '';

        // Add to history
        chatHistory.push({ role: 'user', content: messageText });

        // 2. Show thinking indicator
        showTypingIndicator();

        try {
            // Call the Vercel backend we just created!
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ messages: chatHistory })
            });

            removeTypingIndicator();

            const data = await response.json();

            if (response.ok && data.choices && data.choices[0]) {
                const botReply = data.choices[0].message.content;
                appendMessage(botReply, 'bot');
                chatHistory.push({ role: 'assistant', content: botReply });
            } else {
                appendMessage("Oops! " + (data.error || "I'm having trouble connecting to my brain right now. Make sure you've added your OPENROUTER_API_KEY in Vercel!"), 'bot');
            }
        } catch (error) {
            removeTypingIndicator();
            appendMessage("I couldn't reach the server. Please try again later.", 'bot');
        }
    });
});
