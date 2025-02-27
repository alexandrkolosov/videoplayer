const play = document.getElementById('play');
const video = document.getElementById('video');
const stopBtn = document.getElementById('stop');
const progress = document.getElementById('progress');

function playPause() {
    if (video.paused) {
    video.play()
} else {
    video.pause()
}
}

function updateIcon() {
    if (video.paused) {
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>'
    } else {
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>'
    }
}

function stopVideo() {
   video.currentTime = 0;
   video.pause()
}

function updateProgress() {
    progress.value = (video.currentTime / video.duration) * 100;

    // getting minutes 
    let minutes = Math.floor(video.currentTime / 60);
    if (minutes < 10) {
        minutes = '0' + String(minutes);
    }

    let seconds = Math.floor(video.currentTime % 60);
    if (seconds < 10) {
        seconds = '0' + String(seconds);
    }

timestamp.innerHTML = `${minutes}:${seconds}`
}

function setProgress() {
    video.currentTime = (+progress.value * video.duration) /100;
}

video.addEventListener('click', playPause);
video.addEventListener('timeupdate', updateProgress)
play.addEventListener('click', playPause);
video.addEventListener('pause', updateIcon);
video.addEventListener('play', updateIcon);
stopBtn.addEventListener('click', stopVideo);
progress.addEventListener('click', setProgress)