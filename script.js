const audio = document.getElementById("audio");
const play = document.getElementById("play");
const playBtn = document.getElementById("playBtn");
const pause = document.getElementById("pause");
const progress = document.getElementById("progress");
const volume = document.getElementById("volume");
const currenttime = document.getElementById("current-time");
const totaltime = document.getElementById("total-time");
const audioFile = document.getElementById("audio-file");
const image = document.getElementById("image");
const title = document.getElementById("title");
const author = document.getElementById("author");

title.textContent = "Chalo Hyderabad";
author.textContent = "Vishnu Vijay";


play.onclick = () => {
    if (audio.paused) {
        audio.play();
        play.src = './assets/pause.png';
    } else {
        audio.pause();
        play.src = './assets/play.png';
    }
}

audio.onloadeddata = () => {
    totaltime.textContent = formatTime(audio.duration);
}

audio.ontimeupdate = () => {
    progress.value = (audio.currentTime / audio.duration) * 100;
    currenttime.textContent = formatTime(audio.currentTime);
}

function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec.toString().padStart(2, '0')}`;
}

progress.oninput = () => {
    audio.currentTime = (progress.value / 100) * audio.duration;
}

volume.oninput = () => audio.volume = volume.value;

audioFile.onchange = () => {

    if (audio.playing) {
        audio.play();
        play.src = './assets/pause.png';
    } else {
        audio.pause();
        play.src = './assets/play.png';
    }

    const file = audioFile.files[0];
    audio.src = URL.createObjectURL(file);
    currenttime.textContent = formatTime(audio.currentTime);

    image.src = './assets/channels4_profile.jpg';
    title.textContent = file.name.replace(/\.mp3$/i, '');
    author.textContent = "Unknown artist";

}


