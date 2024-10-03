    // Array of image URLs to cycle through
    const images = [
        'url("../static/images/8-2.jpg"")',  
        'url("../static/images/3.jpg"")',
        'url("../static/images/8-3.jpg")',
        'url("../static/images/8-1.jpg")',
        'url("../static/images/8-4.jpg")'
    ];

    // Function to change the background image with a gradient
    let currentImageIndex = 0;
    function changeBackgroundImage() {
        const gradient = 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))'; // Define the gradient

        // Apply both the gradient and the image
        document.getElementById('first-body').style.backgroundImage = `${gradient}, ${images[currentImageIndex]}`;
        
        // Move to the next image and loop back to the first when done
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }

    // Change the background image every 5 seconds (5000 milliseconds)
    setInterval(changeBackgroundImage, 5000);

