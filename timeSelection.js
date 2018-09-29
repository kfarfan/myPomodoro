export class timeSelection {
    constructor(workTime, restTime) {
        this.workTime = workTime * 60000;
        this.restTime = restTime * 60000;
        this.currentTime = 0;
        this.workState = true;
    }
    addWorkTime () {
         this.workTime != 1500000 ? this.workTime += 60000 : this.workTime = this.workTime;
    }
    subWorkTime () {
         this.workTime != 600000 ? this.workTime -= 60000 : this.workTime = this.workTime;
    }
    addRestTime () {
        this.restTime != 600000 ? this.restTime += 60000 : this.restTime = this.restTime;
    }
    subRestTime () {
         this.restTime != 300000 ? this.restTime -= 60000 : this.restTime = this.restTime;
    }
    setCurrentTime () {
        this.currentTime += 1000;
    }
    resetCurrentTime() {
        this.currentTime = 0;
    }
    changeState () {
        this.workState ? this.workState = false : this.workState = true;
    }
}


