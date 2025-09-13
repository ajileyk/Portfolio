// script.js
// Add interactive JS features here

document.addEventListener('DOMContentLoaded', function() {
    // Example: Show an alert when a card is clicked
    document.querySelectorAll('.card').forEach(function(card) {
        card.addEventListener('click', function() {
            alert('Project details coming soon!');
        });
    });
});
