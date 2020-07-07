"use strict";
class Clock {
    constructor(template) {
        this.template = template;
    }
    render() {
        if(this.tick >= 10){
          this.stop();
        }
        let date = new Date();
        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;
        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;
        let output = this.template.replace('h', hours).replace('m', mins).replace('s', secs);
        document.getElementById('timer').value = output;
        this.tick +=1;
    }
    stop() {
        clearInterval(this.timer);
    }
    start() {
        this.tick = 0;
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
}