window.addEventListener('load', () => {
    const logo = document.getElementById('logo');
    const logoContainer = document.getElementById('logo-container');
    const content = document.getElementById('content');

    setTimeout(() => {
        logo.classList.add('fade-out');
    }, 2000); // Adjust the delay as needed

    logo.addEventListener('transitionend', () => {
        logoContainer.style.display = 'none';
        content.style.display = 'flex';
    });
});

function toggleChatbot() {
    var chatbotWindow = document.getElementById('chatbotWindow');
    if (chatbotWindow.style.display === 'none' || chatbotWindow.style.display === '') {
        chatbotWindow.style.display = 'block';
    } else {
        chatbotWindow.style.display = 'none';
    }
}


