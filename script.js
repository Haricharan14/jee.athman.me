console.log("Script is running...");

// Set the dates for JEE Mains and JEE Advanced
const jeeMainsDate = new Date("2025-04-01T09:00:00").getTime();
const jeeAdvancedDate = new Date("2025-05-21T09:00:00").getTime();

// Function to update the countdown
function updateCountdown() {
    const now = new Date().getTime();

    // JEE Mains countdown
    const mainsTimeLeft = jeeMainsDate - now;
    if (mainsTimeLeft >= 0) {
        const mainsDays = Math.floor(mainsTimeLeft / (1000 * 60 * 60 * 24));
        const mainsHours = Math.floor((mainsTimeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mainsMinutes = Math.floor((mainsTimeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const mainsSeconds = Math.floor((mainsTimeLeft % (1000 * 60)) / 1000);
        document.getElementById("countdown-mains").innerText =
            `${mainsDays}d ${mainsHours}h ${mainsMinutes}m ${mainsSeconds}s`;
    } else {
        document.getElementById("countdown-mains").innerText = "Exam Time!";
    }

    // JEE Advanced countdown
    const advancedTimeLeft = jeeAdvancedDate - now;
    if (advancedTimeLeft >= 0) {
        const advancedDays = Math.floor(advancedTimeLeft / (1000 * 60 * 60 * 24));
        const advancedHours = Math.floor((advancedTimeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const advancedMinutes = Math.floor((advancedTimeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const advancedSeconds = Math.floor((advancedTimeLeft % (1000 * 60)) / 1000);
        document.getElementById("countdown-advanced").innerText =
            `${advancedDays}d ${advancedHours}h ${advancedMinutes}m ${advancedSeconds}s`;
    } else {
        document.getElementById("countdown-advanced").innerText = "Exam Time!";
    }
}

// Get the popup and close button elements
const mobilePopup = document.getElementById('mobilePopup');
const closePopupButton = document.getElementById('closePopup');

// Show the popup if the user is on mobile
if (window.innerWidth <= 768) {
    mobilePopup.style.display = 'block'; // Show the popup on mobile
}

// Close the popup when the user clicks the close button
closePopupButton.addEventListener('click', function () {
    mobilePopup.style.display = 'none'; // Hide the popup
});

// Set default K-mode off and no gradient
let kModeOn = false;
document.body.style.background = "url('iit-background.jpg') no-repeat center center fixed"; // No gradient
document.body.style.backgroundSize = "cover";

// Get the K-mode toggle switch
const kModeToggle = document.getElementById('kModeToggle');

// Ensure K-mode toggle is off by default and gradient is off
kModeToggle.checked = false; // Set the toggle to "off" by default

// Add event listener to toggle the gradient on or off based on K-mode switch
kModeToggle.addEventListener('change', function () {
    if (kModeToggle.checked) {
        // Turn on gradient
        kModeOn = true;
        document.body.style.background = "linear-gradient(to right, rgba(123, 0, 255, 0.151), rgba(37, 117, 252, 0.8)), url('iit-background.jpg') no-repeat center center fixed";
        document.body.style.backgroundSize = "cover";
    } else {
        // Turn off gradient
        kModeOn = false;
        document.body.style.background = "url('iit-background.jpg') no-repeat center center fixed";
        document.body.style.backgroundSize = "cover";
    }
});

// Update both countdowns every second
setInterval(updateCountdown, 1000);
