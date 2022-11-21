import {variables, events} from './variables.js'
import sounds from './events-sounds.js'
const sound = sounds()

let hrs = null
let min = null
let conversion = []

variables.buttonSetts.addEventListener('click', function(){
  hrs = events.eventsControls.configureHours()
  min = events.eventsControls.configureMinutes()
  conversion = events.eventsControls.minutesConversion(min)
  events.eventsControls.display(hrs, min, conversion)
  sound.audioPressButton.play()

  variables.buttonPlay.addEventListener('click', function(){
    events.eventsControls.start()
    events.eventClock.timerBeginning()
    events.eventsControls.settings()
    sound.audioPressButton.play()
  })
})

variables.buttonPause.addEventListener('click', function(){
  events.eventsControls.interval()
  events.eventClock.timerPause()
  sound.audioPressButton.play()
})

variables.buttonStop.addEventListener('click', function(){
  events.eventsControls.quit()
  events.eventsControls.interval()
  events.eventClock.timerFinish(hrs, min, conversion)
  sound.audioPressButton.play()
})

variables.buttonVolumeOff.addEventListener('click', function(){
  events.eventsMusic.MusicOff()
  sound.audioPressButton.play()
  sound.audioBackground.play()
})

variables.buttonVolumeOn.addEventListener('click', function(){
  events.eventsMusic.MusicOn()
  sound.audioPressButton.play()
  sound.audioBackground.pause()
})
