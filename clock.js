let hrhand = document.querySelector('.h-hand');
let minhand = document.querySelector('.m-hand');
let sechand = document.querySelector('.s-hand');
setInterval(updateTime, 1000);

function updateTime(){
    let date = new Date();
    sechand.style.transform = `rotate(${
               date.getSeconds() * 6}deg)`;
    minhand.style.transform = `rotate(${
            date.getMinutes() * 6}deg)`;
    hrhand.style.transform = `rotate(${
            date.getHours() * 30+
            date.getMinutes() * 0.5}deg)`;
}