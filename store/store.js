window.onload = function() {
    var images = document.querySelectorAll('#ad-banner img');
    var currentImageIndex = 0;

    function showNextImage() {
        images[currentImageIndex].style.display = 'none'; // Hide current image
        currentImageIndex = (currentImageIndex + 1) % images.length; // Calculate next image index
        images[currentImageIndex].style.display = 'block'; // Show next image
    }

    // Show the first image initially
    images[currentImageIndex].style.display = 'block';

    // Change image every 3 seconds (adjust as needed)
    setInterval(showNextImage, 3000);
};


