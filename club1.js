// Player data for each player
const playerData = {
    'Player 1': {
        image: 'https://via.placeholder.com/150',
        stats: {
            passing: '81',
            shooting: '69',
            speed: '73',
            defense: '91',
            stamina: '88',
            strength: '89'
        },
        rating: 83
    },
    'Player 2': {
        image: 'https://via.placeholder.com/150',
        stats: {
            passing: '60',
            shooting: '80',
            speed: '79',
            defense: '90',
            stamina: '78',
            strength: '82'
        },
        rating: 82 
    },
    'Player 3': {
        image: 'https://via.placeholder.com/150',
        stats: {
            passing: '65',
            shooting: '85',
            speed: '88',
            defense: '60',
            stamina: '85',
            strength: '87'
        },
        rating: 84
    },
    'Player 4': {
        image: 'https://via.placeholder.com/150',
        stats: {
            passing: '87',
            shooting: '94',
            speed: '86',
            defense: '57',
            stamina: '79',
            strength: '80'
        },
        rating: 88
    },
    'Player 5': {
        image: 'https://via.placeholder.com/150',
        stats: {
            passing: '88',
            shooting: '89',
            speed: '85',
            defense: '79',
            stamina: '80',
            strength: '82'
        },
        rating: 87
    },
    'Player 6': {
        image: 'https://via.placeholder.com/150',
        stats: {
            passing: '76',
            shooting: '86',
            speed: '88',
            defense: '65',
            stamina: '79',
            strength: '80'
        },
        rating: 83
    },
    'Player 7': {
        image: 'https://via.placeholder.com/150',
        stats: {
            passing: '68',
            shooting: '78',
            speed: '78',
            defense: '80',
            stamina: '80',
            strength: '81'
        },
        rating: 81
    },
    'Player 8': {
        image: 'https://via.placeholder.com/150',
        stats: {
            passing: '79',
            shooting: '80',
            speed: '70',
            defense: '94',
            stamina: '89',
            strength: '90'
        },
        rating: 90
    },
    'Player 9': {
        image: 'https://via.placeholder.com/150',
        stats: {
            passing: '60',
            shooting: '70',
            speed: '69',
            defense: '80',
            stamina: '83',
            strength: '85'
        },
        rating: 83
    },
    'Player 10': {
        image: 'https://via.placeholder.com/150',
        stats: {
            passing: '80',
            shooting: '78',
            speed: '80',
            defense: '86',
            stamina: '87',
            strength: '87'
            
        },
        rating: 88
    },
    'Player 11': {
        image: 'https://via.placeholder.com/150',
        stats: {
            passing: '65',
            shooting: '70',
            speed: '78',
            Defence: '88',
            Stamina: '80',
            strength: '80'
        },
        rating: 80
    },
    'Player 12': {
        image: 'https://via.placeholder.com/150',
        stats: {
            passing: '70',
            shooting: '70',
            speed: '60',
            defense: '50',
            stamina: '50',
            strength: '60'
        },
        rating: 70
    },
    'Player 13': {
        image: 'https://via.placeholder.com/150',
        stats: {
            passing: '70',
            shooting: '70',
            speed: '68',
            defense: '88',
            stamina: '67',
            strength: '70'
        },
        rating: 79
    },
     'Player 14': {
        image: 'https://via.placeholder.com/150',
        stats: {
            passing: '69',
            shooting: '69',
            speed: '80',
            defense: '90',
            stamina: '87',
            strength: '88'
        },
        rating: 86
    },
     'Player 15': {
        image: 'https://via.placeholder.com/150',
        stats: {
            passing: '87',
            shooting: '83',
            speed: '80',
            defense: '87',
            stamina: '84',
            strength: '87'
        },
        rating: 84
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
