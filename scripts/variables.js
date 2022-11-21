//displayClock
let minutesDisplay = document.querySelector('.minutesDisplay')
let secondsDisplay = document.querySelector('.secondsDisplay')
let hoursDisplay = document.querySelector('.hoursDisplay')
//buttons controls
let buttonPlay = document.querySelector('.buttonPlay')
let buttonPause = document.querySelector('.buttonPause')
let buttonSetts = document.querySelector('.buttonSetts')
let buttonStop = document.querySelector('.buttonStop')
//buttons sounds
let buttonVolumeOn = document.querySelector('.buttonVolumeOn')
let buttonVolumeOff = document.querySelector('.buttonVolumeOff')

import eventsButtonsControls from './events-controls.js'
const eventsControls = eventsButtonsControls({
  hoursDisplay,
  minutesDisplay,
  buttonPlay,
  buttonPause,
  buttonSetts,
  buttonStop
})

import eventsButtonsMusic from './events-music.js'
const eventsMusic = eventsButtonsMusic({
  buttonVolumeOff,
  buttonVolumeOn
})

import clock from './action-clock.js'
const eventClock = clock({
  hoursDisplay,
  minutesDisplay,
  secondsDisplay,
  eventsControls
})

const variables = {
  hoursDisplay,
  minutesDisplay,
  secondsDisplay,
  buttonPlay,
  buttonPause,
  buttonSetts,
  buttonStop,
  buttonVolumeOn,
  buttonVolumeOff,
}

const events = {
  eventsControls,
  eventsMusic,
  eventClock
}

export {
  variables,
  events
}