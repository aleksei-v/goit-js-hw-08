import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector("iframe");
const player = new Player(iframe);
const CURRENT_TIME = "videoplayer-current-time";


const onPlay = data => localStorage.setItem(CURRENT_TIME, JSON.stringify(Math.round(data.seconds)));

player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));
player.on('timeupdate', throttle(onPlay, 1000));



