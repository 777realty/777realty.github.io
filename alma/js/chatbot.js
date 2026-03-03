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

    // Handle Form Submission
    chatbotForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const messageText = chatbotInput.value.trim();
        if (!messageText) return;

        // 1. Show user message
        appendMessage(messageText, 'user');
        chatbotInput.value = '';

        // 2. Show thinking indicator
        showTypingIndicator();

        // [TODO] - WE WILL HOOK THIS UP TO VERCEL BACKEND ROUTE LATER
        // For now, simulate network delay and fake response
        setTimeout(() => {
            removeTypingIndicator();
            appendMessage("I am a demo AI! I will be fully functional once we migrate hosting to securely pass your API keys. :)", 'bot');
        }, 1500);
    });
});
