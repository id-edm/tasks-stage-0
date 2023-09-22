const player = document.querySelector('.audio__player'),
    audio = document.querySelector('.audio'),
    title = document.querySelector('.song__name'),
    coverMusic = document.querySelector('.cover__music-img'),
    progressArea = document.querySelector('.progress__area'),
    progressBar = document.querySelector('.progress__bar'),
    prevBtn = document.querySelector('.prev-btn'),
    playBtn = document.querySelector('.play-btn'),
    nextBtn = document.querySelector('.next-btn'),
    imgPlayPause = document.querySelector('.play-pause')

    //name songs
const songs = ['Каста - Вокруг шум','Иванушки  International - Тополиный пух','Геннадий Рождественский - Щелкунчик']

    //default song
let songIndex = 0

    //start
function loadSong(song) {
    title.innerHTML = song
    audio.src = `assets/audio/${song}.mp3`
    coverMusic.src =`assets/image/cover${songIndex + 1}.jpg`
}

loadSong(songs[songIndex])

    //play
function playMusic() {
    player.classList.add('play')
    coverMusic.classList.add('active')
    imgPlayPause.src = 'assets/icons/pause.svg'
    audio.play()
}

    //pause
 function pauseMusic() {
    player.classList.remove('play')
    coverMusic.classList.remove('active')
    imgPlayPause.src = 'assets/icons/play.svg'
    audio.pause()
}

playBtn.addEventListener('click',() => {
    const isPlaying = player.classList.contains('play')
    if(isPlaying){
        pauseMusic()
    } else {
        playMusic()
    }
})

    //next music
function nextMusic() {
    songIndex++

    if (songIndex > songs.length - 1) {
        songIndex = 0
    }

    loadSong(songs[songIndex])
    playMusic()
}

nextBtn.addEventListener('click', nextMusic)

     //next music
function prevMusic(){
    songIndex--

    if(songIndex < 0) {
        songIndex = songs.length - 1
    }

    loadSong(songs[songIndex])
    playMusic()
}

prevBtn.addEventListener('click', prevMusic)

     //progress bar
function updProgressBar(e) {
    const {duration, currentTime} = e.srcElement
    const progressPercent = (currentTime / duration) * 100
    progressBar.style.width = `${progressPercent}%`
}

audio.addEventListener('timeupdate', updProgressBar)

    //set progress
function setProgress(e) {
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration

    audio.currentTime = (clickX / width) * duration
}
progressArea.addEventListener('click', setProgress)

    //autoplay
audio.addEventListener('ended', nextMusic)

    //duration music
audio.addEventListener('timeupdate',(e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    let musicCurrentTime = document.querySelector('.curren-time'),
        musicDuration = document.querySelector('.max-duration');
    audio.addEventListener('loadeddata',() => {
        let mainAdDuration = audio.duration;
        let totalMin = Math.floor(mainAdDuration / 60);
        let totalSec = Math.floor(mainAdDuration % 60);
            if(totalSec < 10) {
                totalSec = `0${totalSec}`;
            }
        musicDuration.innerHTML = `${totalMin}:${totalSec}`;
    });
        let currentMin = Math.floor(currentTime / 60);
        let currentSec = Math.floor(currentTime % 60);
            if(currentSec < 10) {
                currentSec =`0${currentSec}`;
            }
        musicCurrentTime.innerHTML =`${currentMin}:${currentSec}`;
})




