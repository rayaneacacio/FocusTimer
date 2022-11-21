export default function eventsButtonsMusic({
  buttonVolumeOff,
  buttonVolumeOn
}) {

  function MusicOff(){
    buttonVolumeOff.classList.add('hide')
    buttonVolumeOn.classList.remove('hide')
  }

  function MusicOn(){
    buttonVolumeOff.classList.remove('hide')
    buttonVolumeOn.classList.add('hide')
  }

  return{
    MusicOff,
    MusicOn
  }
}