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

// const nastartujMinutku = (e) => {
//   e.preventDefault();
//   let minutes = Number(document.querySelector('.time-input').value);
//   let seconds = 0;

//   const minutyElm = document.querySelector('.alarm__minutes');
//   const sekundyElm = document.querySelector('.alarm__seconds');
//   const alarmElm = document.querySelector('.alarm');

//   // pro opakované použití
//   alarmElm.classList.remove('alarm--ring');

//   minutyElm.textContent = String(minutes) + ':';
//   sekundyElm.textContent = String(seconds).padStart(2, '0');

//   const odpocet = () => {
//     if (minutes >= 0) {
//       if (seconds > 0) {
//         seconds -= 1;
//       } else {
//         minutes -= 1;
//         seconds = 59;
//       }
//       minutyElm.textContent = String(minutes) + ':';
//       sekundyElm.textContent = String(seconds).padStart(2, '0');
//     }
//     if (minutes <= 0 && seconds <= 0) {
//       clearInterval(casovac);
//       alarmElm.classList.add('alarm--ring');
//       document.querySelector('audio').play();
//     }
//   };

//   const casovac = setInterval(odpocet, 1000);
// };

// const formularElm = document.querySelector('.controls');
// formularElm.addEventListener('submit', nastartujMinutku);
