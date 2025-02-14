
  function revealContent() {
            document.getElementById("myModal").style.display = "flex";
        }

        // Function to close the modal
        function closeModal() {
            document.getElementById("myModal").style.display = "none";
        }
function sectionClicked(section) {
    alert(`You clicked the ${section} section!`);
}

// Modal open and close functions
function openModal() {
    document.getElementById("myModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}
// Function to handle modal opening and start animation
function startPresentation() {
    document.getElementById('darkOverlay').style.opacity = 1;
    document.getElementById('darkOverlay').style.visibility = 'visible';

    // Dark screen and spark animation after 3 seconds
    setTimeout(() => {
        document.getElementById('sparks').style.opacity = 1;
        document.getElementById('sparks').style.visibility = 'visible';
    }, 3000);

    // Stadium entrance animation after 3 seconds
    setTimeout(() => {
        document.getElementById('stadium').style.opacity = 1;
        document.getElementById('stadium').style.visibility = 'visible';
    }, 3000);

    // Move from stadium entrance to the goal post
    setTimeout(() => {
        document.getElementById('stadium').style.animation = 'stadiumEntrance 5s ease-in-out forwards';
    }, 6000);

    // Show player cards after stadium reaches the field
    setTimeout(() => {
        document.getElementById('playerCards').style.opacity = 1;
        document.getElementById('playerCards').style.visibility = 'visible';
        showPlayerCards(); // Show player cards one by one
    }, 12000);
}

// Function to show player cards with animations
function showPlayerCards() {
    const players = [
        { name: 'Player 1', position: 'Wing', rating: '89', image: 'player1.jpg' },
        { name: 'Player 2', position: 'Midfield', rating: '90', image: 'player2.jpg' },
        { name: 'Player 3', position: 'Defender', rating: '85', image: 'player3.jpg' },
        { name: 'Player 4', position: 'Striker', rating: '92', image: 'player4.jpg' },
        { name: 'Player 5', position: 'Goalkeeper', rating: '88', image: 'player5.jpg' },
        { name: 'Player 6', position: 'Wing', rating: '87', image: 'player6.jpg' },
        { name: 'Player 7', position: 'Midfield', rating: '91', image: 'player7.jpg' },
        { name: 'Player 8', position: 'Defender', rating: '86', image: 'player8.jpg' }
    ];

    let delay = 0;
    const playerCardsContainer = document.getElementById('playerCards');
    players.forEach((player, index) => {
        setTimeout(() => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <img src="${player.image}" alt="${player.name}">
                <div class="position">${player.position}</div>
                <div class="rating">${player.rating}</div>
            `;
            playerCardsContainer.appendChild(card);
            card.style.animation = `showCards 0.8s ease-out forwards`;
        }, delay);
        delay += 1000; // Delay each card's appearance by 1 second
    });
}

// Close modal
function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}
