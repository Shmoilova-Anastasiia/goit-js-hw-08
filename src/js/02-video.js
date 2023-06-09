import Player from "@vimeo/player";
import throttle from "lodash.throttle";
const iframe = document.querySelector('iframe');
    const player = new Player(iframe);


const getTime = function(data) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(data.seconds));
}

player.on('timeupdate', throttle(getTime, 1000));

player.setCurrentTime(Number(localStorage.getItem('videoplayer-current-time'))).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});



    
