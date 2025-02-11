// Player data for each player
const playerData = {
    'Player 1': {
        image: 'https://via.placeholder.com/150',
        stats: {
              pace: '89',
            shooting: '88',
            passing: '84',
            dribbling: '89',
            defending: '80',
            physical: '89',
        },
        rating: 87
    },
    'Player 2': {
        image: 'https://via.placeholder.com/150',
        stats: {
            pace: '89',
            shooting: '88',
            passing: '84',
            dribbling: '89',
            defending: '80',
            physical: '89',
        },
        rating: 75
    },
    'Player 3': {
        image: 'https://via.placeholder.com/150',
        stats: {
             pace: '89',
            shooting: '88',
            passing: '84',
            dribbling: '89',
            defending: '80',
            physical: '89',
        },
        rating: 90
    },
    'Player 4': {
        image: 'https://via.placeholder.com/150',
        stats: {
             pace: '89',
            shooting: '88',
            passing: '84',
            dribbling: '89',
            defending: '80',
            physical: '89',
        },
        rating: 68
    },
    'Player 5': {
        image: 'https://via.placeholder.com/150',
        stats: {
             pace: '89',
            shooting: '88',
            passing: '84',
            dribbling: '89',
            defending: '80',
            physical: '89',
        },
        rating: 91
    },
    'Player 6': {
        image: 'https://via.placeholder.com/150',
        stats: {
           pace: '89',
            shooting: '88',
            passing: '84',
            dribbling: '89',
            defending: '80',
            physical: '89',
        },
        rating: 78
    },
    'Player 7': {
        image: 'https://via.placeholder.com/150',
        stats: {
            pace: '89',
            shooting: '88',
            passing: '84',
            dribbling: '89',
            defending: '80',
            physical: '89',
        },
        rating: 83
    },
    'Player 8': {
        image: 'https://via.placeholder.com/150',
        stats: {
            pace: '89',
            shooting: '88',
            passing: '84',
            dribbling: '89',
            defending: '80',
            physical: '89',
        },
        rating: 77
    },
    'Player 9': {
        image: 'https://via.placeholder.com/150',
        stats: {
            pace: '89',
            shooting: '88',
            passing: '84',
            dribbling: '89',
            defending: '80',
            physical: '89',
        },
        rating: 89
    },
    'Player 10': {
        image: 'https://via.placeholder.com/150',
        stats: {
          pace: '89',
            shooting: '88',
            passing: '84',
            dribbling: '89',
            defending: '80',
            physical: '89',
        },
        rating: 73
    },
    'Player 11': {
        image: 'https://via.placeholder.com/150',
        stats: {
             pace: '89',
            shooting: '88',
            passing: '84',
            dribbling: '89',
            defending: '80',
            physical: '89',
        },
        rating: 88
    },
    'Player 12': {
        image: 'https://via.placeholder.com/150',
        stats: {
             pace: '89',
            shooting: '88',
            passing: '84',
            dribbling: '89',
            defending: '80',
            physical: '89',
        },
        rating: 80
    },
    'Player 13': {
        image: 'https://via.placeholder.com/150',
        stats: {
             pace: '89',
            shooting: '88',
            passing: '84',
            dribbling: '89',
            defending: '80',
            physical: '89',
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
     
         document.getElementById('pace').innerText = player.stats.pace;
         document.getElementById('shooting').innerText = player.stats.shooting;
         document.getElementById('passing').innerText = player.stats.passing;
         document.getElementById('dribbling').innerText = player.stats.dribbling;
         document.getElementById('defending').innerText = player.stats.defending;
         document.getElementById('physical').innerText = player.stats.physical;

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
