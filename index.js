const formElm = document.querySelector('.controls');

formElm.addEventListener('submit', (e) => {
  e.preventDefault();

  const timeInput = Number(document.querySelector('.time-input').value);
  let time = timeInput * 60;

  const startCountdown = setInterval(() => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    document.querySelector('.alarm__minutes').textContent = String(
      minutes,
    ).padStart(2, '0');
    document.querySelector('.alarm__seconds').textContent = String(
      seconds,
    ).padStart(2, '0');
    const alarmElm = document.querySelector('.alarm');

    time -= 1;

    if (time === -1) {
      clearInterval(startCountdown);
      document.querySelector('audio').play();
      alarmElm.classList.add('alarm--ring');
    }
  }, 1000);
});
