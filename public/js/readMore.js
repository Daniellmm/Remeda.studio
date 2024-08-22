document.addEventListener("DOMContentLoaded", function () {
    const reviewTexts = document.querySelectorAll(".review-text");
    const readMoreButtons = document.querySelectorAll(".read-more-btn");

    reviewTexts.forEach((reviewText, index) => {
        const fullText = reviewText.innerText;
        const wordArray = fullText.split(" ");
        const truncatedText = wordArray.slice(0, 40).join(" ") + "...";

        if (wordArray.length > 40) {
            reviewText.innerText = truncatedText;
            readMoreButtons[index].style.display = "block"; // Ensure the button is displayed
        } else {
            readMoreButtons[index].style.display = "none"; // Hide the button if the text is short
        }

        readMoreButtons[index].addEventListener("click", function () {
            if (reviewText.innerText === truncatedText) {
                reviewText.innerText = fullText;
                this.innerText = "Read Less";
            } else {
                reviewText.innerText = truncatedText;
                this.innerText = "Read More";
            }
        });
    });
});





// Mute&UnMute Btn code

window.addEventListener('load', function() {
    const video = document.getElementById('autoplayVideo');
    const soundToggle = document.getElementById('soundToggle');

    // Autoplay the video with sound
    video.play();
    video.muted = false; // Ensure video is not muted

    soundToggle.addEventListener('click', () => {
        if (video.muted) {
            video.muted = false;
            soundToggle.textContent = 'Mute';
        } else {
            video.muted = true;
            soundToggle.textContent = 'Unmute';
        }
    });
});



