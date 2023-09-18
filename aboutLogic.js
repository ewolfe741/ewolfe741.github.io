document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('showButton');
    const image = document.getElementById('KUImage');

    button.addEventListener('click', function() {
        // Toggle image visibility
        if (image.style.display === "none") {
            image.style.display = "block";
        } else {
            image.style.display = "none";
        }
    });
});