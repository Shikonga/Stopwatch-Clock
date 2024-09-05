                let [seconds, minutes, hours] = [0, 0, 0];
                let timer = null;
                const clockwatch = document.getElementById("clockWatch");

                function startTimer() {
                    if(timer == null){
                        clearInterval(timer);
                    }
                  timer = setInterval(updateTime, 1000);
                   
                }

                function updateTime() {
                    seconds++;  
                    if(seconds == 60){
                        seconds = 0;
                        minutes++;
                    }

                    if (minutes == 60) {
                        minutes = 0;
                        hours++;
                    }

                    let hrs = hours < 10 ? "0" + hours : hours;
                    let mins = minutes < 10 ? "0" + minutes : minutes;
                    let secs = seconds < 10 ? "0" + seconds : seconds;

                    clockwatch.innerHTML = `${hrs}:${mins}:${secs}`;
                   
                }
                
                function stopWatch() {
                    if (timer !== null) {
                        clearInterval(timer);
                        timer = null;
                        
                    }
                }                

                function resetWatch() {
                    clearInterval(timer);
                    [seconds, minutes, hours] = [0, 0, 0];
                    clockWatch.innerHTML = "00:00:00";
                    timer = null;
                }

                 
    