const app = () => {
    const song = document.querySelector('.song')
    const play = document.querySelector('.play')
    const outline = document.querySelector('.moving-outline circle')
    const video = document.querySelector('.vid-container video')

    //Sounds
    const sounds = document.querySelector('.sound-picker button')

    //Time displa
    const timeDisplay = document.querySelector('.time-display')

    //Get the length of outline
    const outlineLength = outline.getTotalLength()

    //duration
    let fakeDuration = 600
    console.log(outlineLength)

    outline.style.strokeDasharray = outlineLength;
    outline.style.strokeDashoffset = outlineLength;

    //play sound 
    play.addEventListener('click', ()=> {
        checkPlaying(song)
    })

    //funtion to stop/play songs
    const checkPlaying = song =>{
        if(song.paused){
            song.play();
            video.play();
            play.src = './svg/pause.svg'
        }else{
            song.pause();
            video.pause();
            play.src = './svg/play.svg'
        }
    }

    //animate the circle 
    song.ontimeupdate = () => {
        let currentTime = song.currentTime;
        let elapsed = fakeDuration - currentTime;
        let seconds = Math.floor(elapased % 60);
        let minutes = Math.floor(elapsed / 60);
    }

    let progress = outlineLength - (currentTime / fakeDuration) * outlineLength
    outline.style.strokeDashoffset = progress;



}

      
    

app()