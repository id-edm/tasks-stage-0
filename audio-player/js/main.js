const player = document.querySelector('.audio__player'),
    audio = document.querySelector('.audio'),
    title = document.querySelector('.song__name'),
    coverMusic = document.querySelector('.cover__music-img'),
    progressArea = document.querySelector('.progress__area'),
    progressBar = document.querySelector('.progress__bar'),
    prevBtn = document.querySelector('.prev-btn'),
    playBtn = document.querySelector('.play-btn'),
    nextBtn = document.querySelector('.nextBtn'),
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
    audio.play()
}

//pause
 function pauseMusic() {
    player.classList.remove('play')
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




