console.log("Script is running...");

// Set the dates for JEE Mains and JEE Advanced
const jeeMainsDate = new Date("2025-04-01T09:00:00").getTime();
const jeeAdvancedDate = new Date("2025-05-21T09:00:00").getTime();

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

// Update both countdowns every second
setInterval(updateCountdown, 1000);
