// Player data for each player
const playerData = {
    'Player 1': {
        image: 'https://via.placeholder.com/150',
        stats: {
            passing: '85',
            shooting: '69',
            speed: '70',
            defense: '88',
            stamina: '90',
            strength: '88'
        },
        rating: 89
    },
    'Player 2': {
        image: 'https://via.placeholder.com/150',
        stats: {
            passing: '60',
            shooting: '80',
            speed: '85',
            defense: '95',
            stamina: '70',
            strength: '85'
        },
        rating: 87 
    },
    'Player 3': {
        image: 'https://via.placeholder.com/150',
        stats: {
            passing: '70',
            shooting: '88',
            speed: '87',
            defense: '60',
            stamina: '80',
            strength: '85'
        },
        rating: 85
    },
    'Player 4': {
        image: 'https://via.placeholder.com/150',
        stats: {
            passing: '65',
            shooting: '90',
            speed: '88',
            defense: '40',
            stamina: '70',
            strength: '70'
        },
        rating: 80
    },
    'Player 5': {
        image: 'https://via.placeholder.com/150',
        stats: {
            passing: '88',
            shooting: '89',
            speed: '91',
            defense: '88',
            stamina: '85',
            strength: '78'
        },
        rating: 88
    },
    'Player 6': {
        image: 'https://via.placeholder.com/150',
        stats: {
            passing: '76',
            shooting: '89',
            speed: '88',
            defense: '65',
            stamina: '82',
            strength: '76'
        },
        rating: 85
    },
    'Player 7': {
        image: 'https://via.placeholder.com/150',
        stats: {
            passing: '81',
            shooting: '85',
            speed: '88',
            defense: '85',
            stamina: '87',
            strength: '82'
        },
        rating: 86
    },
    'Player 8': {
        image: 'https://via.placeholder.com/150',
        stats: {
            passing: '60',
            shooting: '80',
            speed: '70',
            defense: '83',
            stamina: '80',
            strength: '80'
        },
        rating: 80
    },
    'Player 9': {
        image: 'https://via.placeholder.com/150',
        stats: {
            passing: '80',
            shooting: '80',
            speed: '77',
            defense: '94',
            stamina: '95',
            strength: '97'
        },
        rating: 93
    },
    'Player 10': {
        image: 'https://via.placeholder.com/150',
        stats: {
            passing: '72',
            shooting: '70',
            speed: '74',
            defense: '80',
            stamina: '75',
            strength: '77'
            
        },
        rating: 73
    },
    'Player 11': {
        image: 'https://via.placeholder.com/150',
        stats: {
            passing: '70',
            Clearnace: '90',
            Agilty: '88',
            Penalty: '70',
            Vision: '60',
            strength: '90'
        },
        rating: 88
    },
    'Player 12': {
        image: 'https://via.placeholder.com/150',
        stats: {
            passing: '80',
            shooting: '78',
            speed: '80',
            defense: '75',
            stamina: '82',
            strength: '81'
        },
        rating: 80
    },
    'Player 13': {
        image: 'https://via.placeholder.com/150',
        stats: {
            passing: '86',
            shooting: '89',
            speed: '87',
            defense: '88',
            stamina: '84',
            strength: '85'
        },
        rating: 86
    }
};

// Function to display player details
function showPlayerDetails(playerName) {
    const player = playerData[playerName];

    if (player) {
        // Set player image
        document.getElementById('playerImage').style.backgroundImage = `url(${player.image})`;
        document.getElementById('playerImage').style.backgroundSize = 'cover';

        // Set player stats
        document.getElementById('passing').innerText = player.stats.passing;
        document.getElementById('shooting').innerText = player.stats.shooting;
        document.getElementById('speed').innerText = player.stats.speed;
        document.getElementById('defense').innerText = player.stats.defense;
        document.getElementById('stamina').innerText = player.stats.stamina;
        document.getElementById('strength').innerText = player.stats.strength;

        // Set rating bar color
        const ratingBar = document.getElementById('ratingBar');
        const ratingPercentage = player.rating;

        ratingBar.innerHTML = `<div style="width: ${ratingPercentage}%"></div>`;

        if (ratingPercentage >= 80) {
            ratingBar.querySelector('div').style.backgroundColor = 'green';
        } else if (ratingPercentage >= 60) {
            ratingBar.querySelector('div').style.backgroundColor = 'yellow';
        } else {
            ratingBar.querySelector('div').style.backgroundColor = 'red';
        }
    }
}
// Function to handle image selection for a player
function selectProfileImage(playerName) {
    const imageURL = prompt('Enter the URL of the profile image for ' + playerName);  // Prompt for image URL input
    if (imageURL) {
        // Save the selected image URL in localStorage for the player
        localStorage.setItem(playerName + '-profile-image', imageURL);

        // Update the player's image immediately
        displayProfileImage(playerName);
    }
}

// Function to display the profile image
function displayProfileImage(playerName) {
    const playerImageDiv = document.getElementById(playerName + '-image');
    const storedImageURL = localStorage.getItem(playerName + '-profile-image');

    // If there's a stored image URL, display it; otherwise, show a placeholder
    if (storedImageURL) {
        playerImageDiv.style.backgroundImage = `url(${storedImageURL})`;
        playerImageDiv.style.backgroundSize = 'cover';
        playerImageDiv.style.backgroundPosition = 'center';
    } else {
        // Placeholder image if no profile is set
        playerImageDiv.style.backgroundImage = 'url("placeholder-image.jpg")';
    }
}

// Function to initialize the profile images for all players
function initializeProfileImages() {
    const playerList = document.querySelectorAll('#playerList li');

    playerList.forEach(player => {
        const playerName = player.textContent.trim();
        displayProfileImage(playerName);
    });
}

// Call the function to initialize profile images on page load
initializeProfileImages();
