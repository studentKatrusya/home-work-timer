// task 1 --------------------

class Timer {
    constructor({selector, targetDate}) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.days = document.querySelector('[data-value="days"]')
        this.hours = document.querySelector('[data-value="hours"]')
        this.mins = document.querySelector('[data-value="mins"]')
        this.secs = document.querySelector('[data-value="secs"]')
    }
    updateDate(time) {
        const currentDate = Date.now();

        const deltaTime = this.targetDate - currentDate;


        this.days.textContent = String(Math.floor(time / (1000 * 60 * 60 * 24))).padStart(2, '0');
        this.hours.textContent = String(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
        this.mins.textContent = String(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
        this.secs.textContent = String(Math.floor((time % (1000 * 60)) / 1000)).padStart(2, '0');


        setInterval(() => this.updateDate(deltaTime) ,1000)

    }

    
}








const timer = new Timer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2022'),
});

timer.updateDate()