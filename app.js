import { timeSelection } from './timeSelection.js';

let pomodoroTime = new timeSelection(25,5,0);
let buttons = document.getElementsByClassName('pomodoro__buttons');
let workCount = document.querySelector('.workCount');
let restCount = document.querySelector('.restCount');
let mainTime = document.querySelector('.mainTime');
let secondaryTime = document.querySelector('.secondaryTime');





document.querySelector('.play').addEventListener('click', function() {
    mainTime.style.color = 'black';
    secondaryTime.style.color = 'black';
    changeButtonDisplay('none')
    function timer (wR, bR) {
        
        pomodoroTime.setCurrentTime();
        updateClock(wR);
    
        if(wR - pomodoroTime.currentTime <= 1000) {
            pomodoroTime.resetCurrentTime();    
            clearInterval(myTimer);

            function myBreak (wR, bR) {
    
                pomodoroTime.setCurrentTime();
                updateClock(bR);
            
                if(bR - pomodoroTime.currentTime == 0) {
                    pomodoroTime.resetCurrentTime();
                    clearInterval(breakTimer);
                    
                    changeButtonDisplay('block')
                }
                
            }
            let breakTimer = setInterval( function() { myBreak(pomodoroTime.workTime, pomodoroTime.restTime); }, 1000 );
        }
        
    }
    
    
    let myTimer = setInterval( function() { timer(pomodoroTime.workTime, pomodoroTime.restTime); }, 1000 );
    
    



})

// update the button display

function changeButtonDisplay (style) {
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].style.display =  `${style}`;
}
}

// update the clock display

function updateClock (wR) {
    let count = wR - pomodoroTime.currentTime;
    let m = Math.floor((count % (1000 * 60 * 60)) / (1000 * 60));
    let s = Math.floor((count % (1000 * 60)) / 1000);

    if ( m < 10 && s < 10  ) {
        document.querySelector('.time').innerHTML = `0${m}:0${s}`;
    } else if ( m < 10 && s >= 10 ) {
        document.querySelector('.time').innerHTML = `0${m}:${s}`;
    } else if ( m > 10 && s < 10 ) {
        document.querySelector('.time').innerHTML = `${m}:0${s}`;
      }  else {
        document.querySelector('.time').innerHTML = `${m}:${s}`;
    }
}

// add a minute of time

document.querySelector('.up').addEventListener('click', function() {

    if(pomodoroTime.workState) {
        pomodoroTime.addWorkTime();
        workCount.textContent = (pomodoroTime.workTime / 60000).toString();
    } else {
        pomodoroTime.addRestTime();
        restCount.textContent = (pomodoroTime.restTime / 60000).toString();
    }

})

// subtract a minute of time

document.querySelector('.down').addEventListener('click', function() {
    if(pomodoroTime.workState) {
        pomodoroTime.subWorkTime();
        workCount.textContent = (pomodoroTime.workTime / 60000).toString();
    } else {
        pomodoroTime.subRestTime();
        restCount.textContent = (pomodoroTime.restTime / 60000).toString();
    }

})

// toggle workTime or restTime 

document.querySelector('.toggle').addEventListener('click', function() {
    pomodoroTime.changeState();
    if(pomodoroTime.workState) {
        document.querySelector('.toggle').style.backgroundImage = 'url(switch.svg)';
        mainTime.style.color = '#f0c400';
        secondaryTime.style.color = 'black';
    } else {
        document.querySelector('.toggle').style.backgroundImage = 'url(switch2.svg)';
        secondaryTime.style.color = '#f0c400';
        mainTime.style.color = 'black';
    }
    console.log(pomodoroTime.workState)

})


