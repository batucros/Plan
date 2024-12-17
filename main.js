// main.js - JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
    // Update date automatically
    const dateElement = document.querySelector('.date');
    const currentDate = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
    dateElement.textContent = currentDate.toLocaleDateString('en-US', options);
});