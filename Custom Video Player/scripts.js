// Get Elements
const playButton = document.querySelector(".toggle");
const video = document.querySelector("video");
const ranges = document.querySelectorAll("input[type = range]");
const buttons = document.querySelectorAll("button");
const progress = document.querySelector(".progress__filled");
const progressBox = document.querySelector(".progress");
// Functions
function playAndPause() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

// Handles play and pause button
function updateButton() {
    const icon = this.paused ? "►" : "❚ ❚";
    playButton.textContent = icon;
}

// Handles volume and playback change
function updateRange() {
    video[this.name] = this.value;
}

// Handles
function minusTen() {
    if (this.dataset.skip) {
        const time = video.currentTime + parseInt(this.dataset.skip, 10);
        video.currentTime = time;
    }
}

// Handles scrub
function scrub(e) {
    const scrubTime = (e.offsetX / progressBox.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

// Progress
function videoProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progress.style.flexBasis = `${percent}%`;
}
// Hook Event Listeners
let mousedown = false;
playButton.addEventListener("click", playAndPause);
video.addEventListener("click", playAndPause);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
ranges.forEach((range) => { range.addEventListener("change", updateRange); });
buttons.forEach((button) => { button.addEventListener("click", minusTen); });
video.addEventListener("timeupdate", videoProgress);
progressBox.addEventListener("click", scrub);
progressBox.addEventListener("mousemove", e => mousedown && scrub(e));
progressBox.addEventListener("mousedown", () => { mousedown = true; });
progressBox.addEventListener("mouseup", () => { mousedown = false; });
