const playerData = {
    'Player 1': {
        image: 'https://via.placeholder.com/150',
        stats: {
            pace: '83',
            shooting: '85',
            passing: '87',
            dribbling: '83',
            defending: '92',
            physical: '89',
        },
        rating: 87,
        
    },
    'Player 2': {
        image: 'https://via.placeholder.com/150',
        stats: {
            pace: '85',
            shooting: '82',
            passing: '78',
            dribbling: '79',
            defending: '85',
            physical: '90',
        },
        rating: 84,
       
    },
    'Player 3': {
        image: 'https://via.placeholder.com/150',
        stats: {
            pace: '94',
            shooting: '92',
            passing: '88',
            dribbling: '92',
            defending: '77',
            physical: '85',
        },
        rating: 88,
      
    },
    'Player 4': {
        image: 'https://via.placeholder.com/150',
        stats: {
            pace: '91',
            shooting: '95',
            passing: '90',
            dribbling: '92',
            defending: '70',
            physical: '77',
        },
        rating: 87,
       
    },
    'Player 5': {
        image: 'https://via.placeholder.com/150',
        stats: {
            pace: '87',
            shooting: '90',
            passing: '95',
            dribbling: '92',
            defending: '80',
            physical: '83',
        },
        rating: 88,
      
    },
    'Player 6': {
        image: 'https://via.placeholder.com/150',
        stats: {
            pace: '95',
            shooting: '92',
            passing: '87',
            dribbling: '90',
            defending: '79',
            physical: '82',
        },
        rating: 88,
        
    },
    'Player 7': {
        image: 'https://via.placeholder.com/150',
        stats: {
            pace: '85',
            shooting: '80',
            passing: '83',
            dribbling: '85',
            defending: '88',
            physical: '87',
        },
        rating: 85,
      
    },
    'Player 8': {
        image: 'https://via.placeholder.com/150',
        stats: {
            pace: '88',
            shooting: '85',
            passing: '87',
            dribbling: '79',
            defending: '95',
            physical: '93',
        },
        rating: 88,
      
    },
    'Player 9': {
        image: 'https://via.placeholder.com/150',
        stats: {
            pace: '82',
            shooting: '75',
            passing: '60',
            dribbling: '40',
            defending: '80',
            physical: '83',
        },
        rating: 70,
       
    },
    'Player 10': {
        image: 'https://via.placeholder.com/150',
        stats: {
            pace: '87',
            shooting: '90',
            passing: '91',
            dribbling: '89',
            defending: '93',
            physical: '91',
        },
        rating: 90,
      
    },
    'Player 11': {
        image: 'https://via.placeholder.com/150',
        stats: {
            pace: '85',
            shooting: '87',
            passing: '89',
            dribbling: '83',
            defending: '89',
            physical: '87',
        },
        rating: 87,
     
    },
    'Player 12': {
        image: 'https://via.placeholder.com/150',
        stats: {
            pace: '78',
            shooting: '90',
            passing: '89',
            dribbling: '91',
            defending: '43',
            physical: '65',
        },
        rating: 76,
       
    },
    'Player 13': {
        image: 'https://via.placeholder.com/150',
        stats: {
            pace: '85',
            shooting: '82',
            passing: '80',
            dribbling: '81',
            defending: '85',
            physical: '83',
        },
        rating: 83,
       
    },
    'Player 14': {
        image: 'https://via.placeholder.com/150',
        stats: {
            pace: '90',
            shooting: '78',
            passing: '82',
            dribbling: '77',
            defending: '94',
            physical: '92',
        },
        rating: 88,
       
    },
    'Player 15': {
        image: '',
        stats: {
            pace: '80',
            shooting: '85',
            passing: '87',
            dribbling: '86',
            defending: '88',
            physical: '90',
        },
        rating: 85,
      
    },
    'Player 16': {
        image: '/mayor pg.jpg',
        stats: {
            pace: '88',
            shooting: '92',
            passing: '95',
            dribbling: '89',
            defending: '84',
            physical: '88',
        },
        rating: 89,
       
    },
    'Player 17': {
        image: 'https:',
        stats: {
            pace: '84',
            shooting: '89',
            passing: '83',
            dribbling: '93',
            defending: '79',
            physical: '84',
        },
        rating: 87,
       
    },
    'Player 18': {
        image: 'https://via.placeholder.com/150',
        stats: {
            pace: '89',
            shooting: '89',
            passing: '91',
            dribbling: '89',
            defending: '89',
            physical: '87',
        },
        rating: 89,
       
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
   // Set the active/inactive button
        setPlayerStatusButton(playerName);
    }
}

// Function to set the status of the player button (Active/Inactive)
function setPlayerStatusButton(playerName) {
    const statusButton = document.getElementById(playerName + '-status-button');
    const playerStatus = localStorage.getItem(playerName + '-status') || 'active';

    if (playerStatus === 'inactive') {
        statusButton.innerText = 'Inactive';
        statusButton.style.backgroundColor = 'red';
    } else {
        statusButton.innerText = 'Active';
        statusButton.style.backgroundColor = 'green';
    }
}

// Function to toggle the status of the player (Active/Inactive)
function togglePlayerStatus(playerName) {
    const currentStatus = localStorage.getItem(playerName + '-status') || 'active';
    const newStatus = currentStatus === 'active' ? 'inactive' : 'active';

    // Save the new status in localStorage
    localStorage.setItem(playerName + '-status', newStatus);

    // Update the button text and color
    setPlayerStatusButton(playerName);
}

// Function to create the "Active" button for each player
function createPlayerStatusButton(playerName) {
    const playerContainer = document.getElementById(playerName + '-container');
    const button = document.createElement('button');
    button.id = playerName + '-status-button';
    button.innerText = 'Active';
    button.style.backgroundColor = 'green';
    button.style.color = 'white';
    button.style.padding = '10px';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer';

    // Add event listener for button click to toggle status
    button.addEventListener('click', () => togglePlayerStatus(playerName));

    // Append the button to the player's container
    playerContainer.appendChild(button);
}

// Function to initialize all player status buttons
function initializePlayerStatusButtons() {
    Object.keys(playerData).forEach(playerName => {
        // Create a container for each player
        const playerContainer = document.createElement('div');
        playerContainer.id = playerName + '-container';
        document.body.appendChild(playerContainer);  // Assuming you are appending to the body

        // Create and set up the status button
        createPlayerStatusButton(playerName);
        
        // Display the player's details
        showPlayerDetails(playerName);
    });
}

// Initialize player status buttons when the page loads
initializePlayerStatusButtons();

// Function to calculate the player's total rating based on stats
function calculatePlayerRating(playerName) {
    const player = playerData[playerName];

