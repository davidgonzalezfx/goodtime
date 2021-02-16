const container = document.getElementsByClassName('container__timer')[0]
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')
const pomodoro = [minutes.innerHTML, seconds.innerHTML]
const counter = document.getElementById('counter')

let timerID
let state = 0

function reset () {
  seconds.innerHTML = pomodoro[1]
  minutes.innerHTML = pomodoro[0]
  state = 0
  container.addEventListener('click', startTimer)
}

function increaseCounter() {
  counter.innerHTML = parseInt(counter.innerHTML) + 1
}

function startTimer() {
  if (!state) {
    state = 1
    timerID = setInterval(function () {
      if (seconds.innerHTML === '00') {
        if (minutes.innerHTML === '00') {
          clearInterval(timerID)
          increaseCounter()
          setTimeout(reset, 1500)
        }
        else {
          minutes.innerHTML -= 1
          seconds.innerHTML = 59
        }
        if (parseInt(minutes.innerHTML) < 10) {
          minutes.innerHTML = '0' + parseInt(minutes.innerHTML)
        }
      }
      else {
        seconds.innerHTML -= 1
      }
      if (parseInt(seconds.innerHTML) < 10) {
        seconds.innerHTML = '0' + parseInt(seconds.innerHTML)
      }
    }, 1000)
  }
  else {
    clearInterval(timerID)
    state = 0
  }
}

container.addEventListener('click', startTimer)
