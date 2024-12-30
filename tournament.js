// Set the countdown target duration: 16 days, 3 hours, 30 minutes, 20 seconds
const countdownTarget = new Date();
countdownTarget.setDate(countdownTarget.getDate() + 16); // Add 16 days
countdownTarget.setHours(countdownTarget.getHours() + 3); // Add 3 hours
countdownTarget.setMinutes(countdownTarget.getMinutes() + 30); // Add 30 minutes
countdownTarget.setSeconds(countdownTarget.getSeconds() + 20); // Add 20 seconds

// Function to update the countdown
function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownTarget - now;

    // Get the days, hours, minutes, and seconds remaining
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update the HTML with the countdown values
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // If the countdown has ended, show that the event has started
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.querySelector(".notification p").innerHTML = "<strong>The tournament has started!</strong>";
        document.querySelector(".countdown").style.display = "none"; // Hide countdown
    }
}

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

// Call the function initially to set the countdown
updateCountdown();
