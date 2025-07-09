$(document).ready(function() {
    $('#fullpage').fullpage({
        'verticalCentered': false,
        'scrollingSpeed': 600,
        'autoScrolling': false, // Explicitly set to false and keep it false
        'fitToSection': false, // Add this line to prevent snapping
        'css3': true,
        'navigation': true,
        'navigationPosition': 'right',
    });
});