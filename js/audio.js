const audio = document.getElementById('lessonAudio');
const playPauseBtn = document.getElementById('playPauseBtn');

const playIcon = `
<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"
                    fill="#e3e3e3">
                    <path
                        d="M169-227q-42-52-65.5-116.5T80-480q0-157 103.5-270T440-878v80q-120 14-200 104t-80 214q0 56 17 105.5t49 90.5l-57 57ZM480-80q-73 0-138-24t-117-67l56-57q41 32 91.5 50T480-160q57 0 107.5-18t91.5-50l56 57q-52 43-117 67T480-80Zm311-147-57-57q32-41 49-90.5T800-480q0-124-80-214T520-798v-80q153 15 256.5 128T880-480q0 72-23.5 136.5T791-227Zm-411-73v-360l280 180-280 180Z" />
                </svg>`;

const pauseIcon = `
<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M240-80q62 0 101.5-31t60.5-91q17-50 32.5-70t71.5-64q62-50 98-113t36-151q0-119-80.5-199.5T360-880q-119 0-199.5 80.5T80-600h80q0-85 57.5-142.5T360-800q85 0 142.5 57.5T560-600q0 68-27 116t-77 86q-52 38-81 74t-43 78q-14 44-33.5 65T240-160q-33 0-56.5-23.5T160-240H80q0 66 47 113t113 47Zm120-420q42 0 71-29.5t29-70.5q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 41 29 70.5t71 29.5Zm380 121-59-59q19-37 29-77.5t10-84.5q0-44-10-84t-29-77l59-59q29 49 44.5 104.5T800-600q0 61-15.5 116.5T740-379Zm117 116-59-58q39-60 60.5-130T880-598q0-78-22-148.5T797-877l60-60q49 72 76 157.5T960-600q0 94-27 179.5T857-263Z"/></svg>`;


playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseBtn.innerHTML = pauseIcon
        playPauseBtn.title = "Pause";
    } else {
        audio.pause();
        playPauseBtn.innerHTML = playIcon
        playPauseBtn.title = "Play";
    }
})
audio.addEventListener('ended', () => {
  playPauseBtn.innerHTML = playIcon;
  playPauseBtn.title = "Play";
});