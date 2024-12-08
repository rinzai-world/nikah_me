// Countdown Timer Logic
const weddingDate = new Date("January 22, 2025 09:00:00").getTime();

const countdownFunction = setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    // Calculate days, hours, minutes, seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown timer
    document.getElementById("countdown-timer").innerHTML = 
        `${days} Hari ${hours} Jam ${minutes} Menit ${seconds} Detik`;

    // If countdown is over
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown-timer").innerHTML = "Hari Pernikahan Telah Tiba!";
    }
}, 1000);
