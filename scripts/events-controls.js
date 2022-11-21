export default function eventsButtonsControls({
  hoursDisplay,
  minutesDisplay,
  buttonPlay,
  buttonPause,
  buttonSetts,
  buttonStop
}){

  function configureHours(){
    let hours = Number(prompt('Quantas horas?'))

    if(isNaN(hours)){
      alert('erro, digite apenas números')
    }
      return String(hours).padStart(2, '0')
  }

  function configureMinutes(){
    let minutes = Number(prompt('Quantos minutos?'))

    if(isNaN(minutes)){
      alert('erro, digite apenas números')
    }

      return String(minutes).padStart(2, '0')
  }

  function minutesConversion(min){
    if(min>=60){
      return[Number((min/60).toFixed()), (min%60)]
    }
  }

  function display(hrs, min, conversion){
    if(min<60){
      hoursDisplay.textContent = (hrs).padStart(2, '0')
      minutesDisplay.textContent = (min).padStart(2, '0')
    } else{
      hoursDisplay.textContent = String(Number(hrs) + conversion[0]).padStart(2, '0')
      minutesDisplay.textContent = String(conversion[1]).padStart(2, '0')
    }
  }

  function start(){
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
  }

  function interval(){
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
  }

  function settings(){
    buttonSetts.classList.add('hide')
    buttonStop.classList.remove('hide')
  }

  function quit(){
    buttonSetts.classList.remove('hide')
    buttonStop.classList.add('hide')
  }

  return{
    configureHours,
    configureMinutes,
    minutesConversion,
    display,
    start,
    interval,
    settings,
    quit
  }
}