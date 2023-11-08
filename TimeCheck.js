let time = new Date().getHours();
let morning = document.querySelector('.morning');
let day = document.querySelector('.day');
let evening = document.querySelector('.evening');
let night = document.querySelector('.night');

if (time >= 5){
    if(time < 11){
        morning.style.display = 'block';
        day.style.display = 'none';
        evening.style.display = 'none';
        night.style.display = 'none';
    }
    else if (time >= 11 && time < 18){
        morning.style.display = 'none';
        day.style.display = 'block';
        evening.style.display = 'none';
        night.style.display = 'none';
    }
    else if(time > 18 && time < 21){
        morning.style.display = 'none';
        day.style.display = 'none';
        evening.style.display = 'block';
        night.style.display = 'none';
    }
    else if(time >= 21) {
        morning.style.display = 'none';
        day.style.display = 'none';
        evening.style.display = 'none';
        night.style.display = 'block';
    }
}
else {
    morning.style.display = 'none';
    day.style.display = 'none';
    evening.style.display = 'none';
    night.style.display = 'block';
};

