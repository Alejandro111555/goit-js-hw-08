// В HTML есть <iframe> с видео для Vimeo плеера.
//  Напиши скрипт который будет сохранять текущее время воспроизведения видео в локальное хранилище 
//  и, при перезагрузке страницы, продолжать воспроизводить видео с этого времени.


import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player'); 
const player = new Player(iframe);

player.on('timeupdate',throttle(timeTracking,1000));

function timeTracking (evt) {
let currentTime = evt.seconds;
localStorage.setItem("videoplayer-current-time", JSON.stringify(currentTime));   
}

player.setCurrentTime(JSON.parse(localStorage.getItem("videoplayer-current-time")));