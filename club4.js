// Player data for each player
const playerData = {
    'Player 1': {
        image: 'https://via.placeholder.com/150',
        stats: {
            pace: '83',
            shooting: '80',
            passing: '87',
            dribbling: '70',
            defending: '90',
            physical: '80',
            
        },
        rating: 82
    },
    'Player 2': {
        image: 'https://via.placeholder.com/150',
        stats: {
           pace: '83',
            shooting: '84',
            passing: '78',
            dribbling: '80',
            defending: '89',
            physical: '86',
        },
        rating: 84
    },
    'Player 3': {
        image: 'https://via.placeholder.com/150',
        stats: {
            pace: '90',
            shooting: '89',
            passing: '88',
            dribbling: '83',
            defending: '90',
            physical: '89',
        },
        rating: 88
    },
    'Player 4': {
        image: 'https://via.placeholder.com/150',
        stats: {
            pace: '87',
            shooting: '82',
            passing: '79',
            dribbling: '72',
            defending: '89',
            physical: '89',
        },
        rating: 83
    },
    'Player 5': {
        image: 'https://via.placeholder.com/150',
        stats: {
              pace: '87',
            shooting: '89',
            passing: '87',
            dribbling: '88',
            defending: '83',
            physical: '85',
        },
        rating: 87
    },
    'Player 6': {
        image: 'https://via.placeholder.com/150',
        stats: {
              pace: '90',
            shooting: '89',
            passing: '85',
            dribbling: '90',
            defending: '79',
            physical: '82',
        },
        rating: 87
    },
    'Player 7': {
        image: 'https://via.placeholder.com/150',
        stats: {
               pace: '60',
            shooting: '95',
            passing: '90',
            dribbling: '83',
            defending: '89',
            physical: '90',
        },
        rating: 88
    },
    'Player 8': {
        image: 'https://via.placeholder.com/150',
        stats: {
             pace: '91',
            shooting: '89',
            passing: '90',
            dribbling: '91',
            defending: '87',
            physical: '83',
        },
        rating: 89
    },
    'Player 9': {
        image: 'https://via.placeholder.com/150',
        stats: {
             pace: '80',
            shooting: '82',
            passing: '89',
            dribbling: '87',
            defending: '89',
            physical: '88',
        },
        rating: 86
    },
    'Player 10': {
        image: 'https://via.placeholder.com/150',
        stats: {
               pace: '89',
            shooting: '87',
            passing: '79',
            dribbling: '79',
            defending: '90',
            physical: '90',
        },
        rating: 86
    },
    'Player 11': {
        image: 'https://via.placeholder.com/150',
        stats: {
                pace: '85',
            shooting: '89',
            passing: '85',
            dribbling: '90',
            defending: '40',
            physical: '79',
        },
        rating: 83
    },
    'Player 12': {
        image: 'https://via.placeholder.com/150',
        stats: {
               pace: '89',
            shooting: '90',
            passing: '85',
            dribbling: '87',
            defending: '60',
            physical: '89',
        },
        rating: 84
    },
    'Player 13': {
        image: 'https://via.placeholder.com/150',
        stats: {
              pace: '90',
            shooting: '89',
            passing: '87',
            dribbling: '89',
            defending: '79',
            physical: '86',
        },
        rating: 87
    },
       'Player 14': {
        image: 'https://via.placeholder.com/150',
        stats: {
              pace: '90',
            shooting: '79',
            passing: '80',
            dribbling: '82',
            defending: '88',
            physical: '85',
        },
        rating: 84
    },
       'Player 15': {
        image: 'https://via.placeholder.com/150',
        stats: {
            pace: '79',
            shooting: '89',
            passing: '90',
            dribbling: '87',
            defending: '88',
            physical: '90',
        },
        rating: 87
    },
       'Player 16': {
        image: 'https://via.placeholder.com/150',
        stats: {
            pace: '90',
            shooting: '87',
            passing: '86',
            dribbling: '89',
            defending: '91',
            physical: '90',
        },
        rating: 88
    },
     'Player 17': {
        image: 'https://via.placeholder.com/150',
        stats: {
            pace: '87',
            shooting: '89',
            passing: '87',
            dribbling: '88',
            defending: '90',
            physical: '90',
        },
        rating: 88
    },
      
       
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

// Function to initialize input fields for stats and add event listeners
function initializeStatInputs() {
    const statInputs = document.querySelectorAll('.stat-input');

    statInputs.forEach(input => {
        input.addEventListener('change', function() {
            const playerName = this.dataset.player;
            const statName = this.dataset.stat;
            const newValue = this.value;

            updatePlayerStat(playerName, statName, newValue);
        });
    });
}

// Example of setting up HTML for stats and rating:
// Assuming HTML structure has input fields for stats like below:

// <input type="number" class="stat-input" data-player="Player 1" data-stat="pace" value="78">
// <div id="Player 1-rating"></div>
// <div id="Player 1-ratingBar"></div>

// Call the function to initialize the stat inputs on page load
initializeStatInputs();
