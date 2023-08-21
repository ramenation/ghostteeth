const video = document.getElementById('myVideo');
const clickableArea = document.getElementById('clickableArea');

video.addEventListener('timeupdate', function() {
    if (video.currentTime >= 10 && video.currentTime <= 12) {  // Show clickable area between 10 to 12 seconds
        clickableArea.style.display = 'block';
    } else {
        clickableArea.style.display = 'none';
    }
});
