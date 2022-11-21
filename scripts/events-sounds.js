export default function sounds(){
  const audioPressButton = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const audioTimerEnd = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
  const audioBackground = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true")

  audioBackground.loop = true

  return{
    audioPressButton,
    audioTimerEnd,
    audioBackground
  }
}