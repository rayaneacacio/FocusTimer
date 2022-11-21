import sounds from './events-sounds.js'

export default function clock({
  hoursDisplay,
  minutesDisplay,
  secondsDisplay,
  eventsControls
}){

  let timer = null

  function timerBeginning(){

    timer = setTimeout(function(){

      let hours = hoursDisplay.textContent
      let minutes = minutesDisplay.textContent
      let seconds = secondsDisplay.textContent

      if(seconds==0){

        if(minutes==0){

          if(hours==0){
            eventsControls.interval()
            eventsControls.quit()
            sounds().audioTimerEnd.play()
            return
          }
          
          minutes = 60
          --hours
        }

        seconds = 60
        --minutes
      }

      hoursDisplay.textContent = String(hours).padStart(2, '0')
      minutesDisplay.textContent = String(minutes).padStart(2, '0')
      secondsDisplay.textContent = String(seconds-1).padStart(2,'0')

      timerBeginning()
    }, 1000)
  }

  function timerPause(){
    clearTimeout(timer)
  }

  function timerFinish(hrs, min, conversion){
    clearTimeout(timer)

    if(min<60){
      hoursDisplay.textContent = (hrs).padStart(2, '0')
      minutesDisplay.textContent = (min).padStart(2, '0')
    } else{
      hoursDisplay.textContent = String(Number(hrs) + conversion[0]).padStart(2, '0')
      minutesDisplay.textContent = String(conversion[1]).padStart(2, '0')
    }
    secondsDisplay.textContent = '00'
  }

  return{
    timerBeginning,
    timerPause,
    timerFinish
  }
}
