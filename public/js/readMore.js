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





// // Ensure the code runs after the DOM is fully loaded
// document.addEventListener('DOMContentLoaded', function () {
//   // Select all filter buttons
//   const filterButtons = document.querySelectorAll('.filter-btn div');
//   const projects = document.querySelectorAll('.col-lg-5');

//   // Loop over each button and add a click event listener
//   filterButtons.forEach(button => {
//     button.addEventListener('click', () => {
//       // Get the category from the clicked button's text
//       const filterCategory = button.textContent.trim().toLowerCase();

//       // Remove 'active' class from all buttons
//       filterButtons.forEach(btn => btn.classList.remove('active'));

//       // Add 'active' class to the clicked button
//       button.classList.add('active');

//       // Show or hide projects based on the selected category
//       projects.forEach(project => {
//         // Show all projects if "all" is selected, else show only matching category
//         if (filterCategory === 'all' || project.dataset.category === filterCategory) {
//           project.style.display = 'block';
//         } else {
//           project.style.display = 'none';
//         }
//       });
//     });
//   });
// });






// document.addEventListener('DOMContentLoaded', () => {
//   const filterButtons = document.querySelectorAll('.filter-btn div');
//   const projects = document.querySelectorAll('.col-lg-5');

//   filterButtons.forEach(button => {
//     button.addEventListener('click', () => {
//       const filterCategory = button.textContent.trim().toLowerCase();

//       filterButtons.forEach(btn => btn.classList.remove('active'));
//       button.classList.add('active');

//       projects.forEach(project => {
//         if (filterCategory === 'all') {
//           project.style.display = 'block';
//         } else if (project.dataset.category === filterCategory) {
//           project.style.display = 'block';
//         } else {
//           project.style.display = 'none';
//         }
//       });
//     });
//   });
// });









// Mute&UnMute Btn code

// window.addEventListener('load', function() {
//     const video = document.getElementById('autoplayVideo');
//     const soundToggle = document.getElementById('soundToggle');

//     // Autoplay the video with sound
//     video.play();
//     video.muted = false; // Ensure video is not muted

//     soundToggle.addEventListener('click', () => {
//         if (video.muted) {
//             video.muted = false;
//             soundToggle.textContent = '';
//         } else {
//             video.muted = true;
//             soundToggle.textContent = '';
//         }
//     });
// });


// window.addEventListener('load', function() {
//     const video = document.getElementById('autoplayVideo');
//     const soundToggle = document.getElementById('soundToggle');

//     // Autoplay the video with sound
//     video.play();
//     video.muted = false; // Ensure video is not muted

//     // Initial icon state (unmute icon)
//     soundToggle.innerHTML = '🔊';

//     soundToggle.addEventListener('click', () => {
//         if (video.muted) {
//             video.muted = false;
//             soundToggle.innerHTML = '🔊'; // Change to unmute icon
//         } else {
//             video.muted = true;
//             soundToggle.innerHTML = '🔈'; // Change to mute icon
//         }
//     });
// });








// window.addEventListener('load', function() {
//     const video = document.getElementById('autoplayVideo');
//     const soundToggle = document.getElementById('soundToggle');
//     const icon = document.getElementById('icon');

//     // Autoplay the video with sound
//     video.play();
//     video.muted = true; // Ensure the video is not muted

//     // Set the initial icon (unmute icon)
//     // icon.src = 'img/volume-mute.png'; // Replace with the correct path to your unmute icon

//     soundToggle.addEventListener('click', () => {
//         if (video.muted) {
//             video.muted = true;
//             // icon.src = 'img/volume-mute.png'; // Change to unmute icon
//         } else {
//             video.muted = true;
//             // icon.src = 'img/volume.png'; // Change to mute icon
//         }
//     });
// });
