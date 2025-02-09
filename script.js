document.getElementById('yesBtn').addEventListener('click', function() {
    displayMessage('Valentine Forever', function() {
        displayMessage('Foooorrreeeevvvvvvveeerrrrrr', function() {
            displayMessage('Forrrreeeeeeeeeevvvvvvvvvvvveeeeeeeeeeeeeerrrrrrrrrrrrrrrrrrrrrrrr', showHeartsAndRoses);
        });
    });
});

document.getElementById('noBtn').addEventListener('click', function() {
    displayMessage('Valentine Forever', function() {
        displayMessage('Foooorrreeeevvvvvvveeerrrrrr', function() {
            displayMessage('Forrrreeeeeeeeeevvvvvvvvvvvveeeeeeeeeeeeeerrrrrrrrrrrrrrrrrrrrrrrr', showHeartsAndRoses);
        });
    });
});

function displayMessage(message, callback) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.classList.remove('hidden');
    setTimeout(function() {
        messageDiv.classList.add('hidden');
        if (callback) callback();
    }, 2000);
}

function showHeartsAndRoses() {
    const messageDiv = document.getElementById('message');
    messageDiv.innerHTML = 'Forrrreeeeeeeeeevvvvvvvvvvvveeeeeeeeeeeeeerrrrrrrrrrrrrrrrrrrrrrrr <span class="heart">❤️</span> <span class="rose">🌹</span>';
    messageDiv.classList.remove('hidden');
}
