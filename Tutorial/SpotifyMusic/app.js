console.log("welcome to spotify");

// Make a array
let songIndex = 0;
let audioElement = new Audio("songs/1.m4a");
let MasterPlay = document.getElementById("MasterPlay");
let progressbar = document.getElementById("progressbar");
let gif = document.getElementById("gif");
let songList = Array.from(document.getElementsByClassName("songsList"));
let song = [
  {
    songname: "Gulabi-Sadi",
    filepath: "songs/1/m4a",
    coverpath: "Images/Banner-1.jpg",
  },
  {
    songname: "Chhava",
    filepath: "songs/2/m4a",
    coverpath: "Images/Banner-2.jpg",
  },
  {
    songname: "Huwa-Main",
    filepath: "songs/3/m4a",
    coverpath: "Images/Banner-3.jpg",
  },
  {
    songname: "Dil-Tu-Jaan-Tu",
    filepath: "songs/4/m4a",
    coverpath: "Images/Banner-4.jpg",
  },
  {
    songname: "I-Guess",
    filepath: "songs/5/m4a",
    coverpath: "Images/Banner-5.jpg",
  },
  {
    songname: "DIE-WITH-SMILE",
    filepath: "songs/6/m4a",
    coverpath: "Images/Banner-6.jpg",
  },
];

songList.forEach((element, i) => {
  console.log(element, i);
  element.getElementsByTagName("img")[0].src = song[i].coverpath;
  element.getElementsByClassName("songName")[0].innerText = song[i].filepath;
});

// Handle play/paush
MasterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    MasterPlay.classList.remove("fa-play");
    MasterPlay.classList.add("fa-pause");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    MasterPlay.classList.remove("fa-pause");
    MasterPlay.classList.add("fa-play");
    gif.style.opacity = 0;
  }
});

// progressbar
// audioElement.addEventListener("timeupdate", () => {
//   // update progressbar
//   progress = prasInt((audioElement.currentTime / audioElement.duration) * 100);
//   progressbar.value = progress;
// });

// progressbar.addEventListener("change", () => {
//   audioElement.currentTime = (progressbar.value * audioElement.duration) / 100;
// });
