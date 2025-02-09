// Player data for each player
const playerData = {
    'Player 1': {
        image: 'https://via.placeholder.com/150',
        stats: {
            pace: '78',
            shooting: '70',
            passing: '71',
            dribbling: '71',
            defending: '71',
            physical: '71',
            
        },
        rating: 77
    },
    'Player 2': {
        image: 'https://via.placeholder.com/150',
        stats: {
           pace: '78',
            shooting: '70',
            passing: '71',
            dribbling: '71',
            defending: '71',
            physical: '71',
        },
        rating: 88
    },
    'Player 3': {
        image: 'https://via.placeholder.com/150',
        stats: {
           pace: '78',
            shooting: '70',
            passing: '71',
            dribbling: '71',
            defending: '71',
            physical: '71',
        },
        rating: 85
    },
    'Player 4': {
        image: 'https://via.placeholder.com/150',
        stats: {
            pace: '78',
            shooting: '70',
            passing: '71',
            dribbling: '71',
            defending: '71',
            physical: '71',
        },
        rating: 76
    },
    'Player 5': {
        image: 'https://via.placeholder.com/150',
        stats: {
              pace: '78',
            shooting: '70',
            passing: '71',
            dribbling: '71',
            defending: '71',
            physical: '71',
        },
        rating: 88
    },
    'Player 6': {
        image: 'https://via.placeholder.com/150',
        stats: {
              pace: '78',
            shooting: '70',
            passing: '71',
            dribbling: '71',
            defending: '71',
            physical: '71',
        },
        rating: 85
    },
    'Player 7': {
        image: 'https://via.placeholder.com/150',
        stats: {
               pace: '78',
            shooting: '70',
            passing: '71',
            dribbling: '71',
            defending: '71',
            physical: '71',
        },
        rating: 89
    },
    'Player 8': {
        image: 'https://via.placeholder.com/150',
        stats: {
             pace: '78',
            shooting: '70',
            passing: '71',
            dribbling: '71',
            defending: '71',
            physical: '71',
        },
        rating: 90
    },
    'Player 9': {
        image: 'https://via.placeholder.com/150',
        stats: {
             pace: '78',
            shooting: '70',
            passing: '71',
            dribbling: '71',
            defending: '71',
            physical: '71',
        },
        rating: 84
    },
    'Player 10': {
        image: 'https://via.placeholder.com/150',
        stats: {
               pace: '78',
            shooting: '70',
            passing: '71',
            dribbling: '71',
            defending: '71',
            physical: '71',
        },
        rating: 86
    },
    'Player 11': {
        image: 'https://via.placeholder.com/150',
        stats: {
                pace: '78',
            shooting: '70',
            passing: '71',
            dribbling: '71',
            defending: '71',
            physical: '71',
        },
        rating: 84
    },
    'Player 12': {
        image: 'https://via.placeholder.com/150',
        stats: {
            pace: '78',
            shooting: '70',
            passing: '71',
            dribbling: '71',
            defending: '71',
            physical: '71',
        },
        rating: 83
    },
    'Player 13': {
        image: 'https://via.placeholder.com/150',
        stats: {
               pace: '78',
            shooting: '70',
            passing: '71',
            dribbling: '71',
            defending: '71',
            physical: '71',
        },
        rating: 85
    },
       'Player 14': {
        image: 'https://via.placeholder.com/150',
        stats: {
                pace: '78',
            shooting: '70',
            passing: '71',
            dribbling: '71',
            defending: '71',
            physical: '71',
        },
        rating: 86
    },
       'Player 15': {
        image: 'https://via.placeholder.com/150',
        stats: {
             pace: '78',
            shooting: '70',
            passing: '71',
            dribbling: '71',
            defending: '71',
            physical: '71',
        },
        rating: 89
    },
       'Player 16': {
        image: 'https://via.placeholder.com/150',
        stats: {
          pace: '78',
            shooting: '70',
            passing: '71',
            dribbling: '71',
            defending: '71',
            physical: '71',
        },
        rating: 89
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

// Function to calculate the player's total rating based on stats
function calculatePlayerRating(playerName) {
    const player = playerData[playerName];

    if (player) {
        // Calculate total of all stats
        const totalStats = parseInt(player.stats.pace) + parseInt(player.stats.shooting) + parseInt(player.stats.passing) +
            parseInt(player.stats.dribbling) + parseInt(player.stats.defending) + parseInt(player.stats.physical);

        // Calculate the average (divide by 6, the number of stats)
        const newRating = Math.round(totalStats / 6);

        // Update the player's rating in the playerData object
        player.rating = newRating;

        // Update the display of the rating
        updatePlayerRatingDisplay(playerName, newRating);
    }
}

// Function to update the player's rating and the rating bar
function updatePlayerRatingDisplay(playerName, newRating) {
    const player = playerData[playerName];

    // Update rating number
    document.getElementById(playerName + '-rating').innerText = newRating;

    // Update rating bar
    const ratingBar = document.getElementById(playerName + '-ratingBar');
    const ratingPercentage = newRating;

    // Update rating bar width
    ratingBar.innerHTML = `<div style="width: ${ratingPercentage}%"></div>`;

    // Set the color of the rating bar
    if (ratingPercentage >= 80) {
        ratingBar.querySelector('div').style.backgroundColor = 'green';
    } else if (ratingPercentage >= 60) {
        ratingBar.querySelector('div').style.backgroundColor = 'yellow';
    } else {
        ratingBar.querySelector('div').style.backgroundColor = 'red';
    }
}

// Function to handle changing stats and automatically recalculating the rating
function updatePlayerStat(playerName, statName, newValue) {
    const player = playerData[playerName];

    if (player && player.stats.hasOwnProperty(statName)) {
        // Update the stat
        player.stats[statName] = newValue;

        // Recalculate and update rating
        calculatePlayerRating(playerName);
    }
}

// Example of how to use the function to update stats (this could be tied to input fields or buttons):
// updatePlayerStat('Player 1', 'pace', '85');
// updatePlayerStat('Player 1', 'shooting', '75');

