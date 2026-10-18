/* Display Current Date */

document.addEventListener("DOMContentLoaded", function () {
    let dateElement = document.getElementById("currentDate");

    if (dateElement) {
        let today = new Date();
        dateElement.textContent = today.toLocaleDateString();
    }
});

/* jQuery Effects */

$(document).ready(function () {

    // Display a thank-you message
    $("#messageButton").click(function () {
        $("#message")
            .hide()
            .text("Thank you for visiting my Resume!")
            .fadeIn(800);
    });

    // Show or hide bio-data
    $("#toggleButton").click(function () {
        $("#biodataDetails").slideToggle(600);
    });

});