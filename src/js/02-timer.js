import flatpickr from "flatpickr"
import "flatpickr/dist/flatpickr.min.css"
 
let timerId = null
let timeDifference = 0;

const btnStart = document.querySelector("[data-start]");
const dataDays = document.querySelector("[data-days]");
const dataHours = document.querySelector("[data-hours]");
const dataMinutes = document.querySelector("[data-minutes]");
const dataSeconds = document.querySelector("[data-seconds]");
const dataFlatpickr = document.querySelector("#datetime-picker")


const options = {
    // властивість вмикає засіб вибору часу
    enableTime: true,
    // відображає засіб вибору часу в 24-годинному режимі без вибору AM/PM, якщо ввімкнено.
    time_24hr: true,
//   встановлює початкові вибрані дати
    defaultDate: new Date(),
//   регулює крок для введення хвилин 
    minuteIncrement: 1,
  onClose(selectedDates) {
    //  якщо selectedDates[0] - перший елемент з масиву обраних дат менший ніж поточна дата, то "Please choose a date in the future"
      if (selectedDates[0] < Date.now()) {
          window.alert("Please choose a date in the future")
      } else {
        //  якщо вибрана дата selectedDate = aбо більша за перший елемент з масиву обраних дат  - кнопка btnStart стає активною
            
          btnStart.disabled = false
      }
  },
};
// отримуємо дату за допомогою бібліотеки
const flatpickrDataFlatpick = flatpickr(dataFlatpickr, options); 
btnStart.addEventListener("click", onClickBtnStart)

function onClickBtnStart () {
 timerId = setInterval(() => {
  timeDifference = flatpickrDataFlatpick.selectedDates[0] - new Date()
   if (timeDifference > 0) {
     updateTimerInterface(convertMs(timeDifference))
    btnStart.disabled = true;
  } 
 }, 1000);
 };
//Для підрахунку значень використовуй готову функцію convertMs, де ms - різниця між кінцевою і поточною датою в мілісекундах.
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  
  const hours = Math.floor((ms % day) / hour);
  
  const minutes = Math.floor(((ms % day) % hour) / minute);
  
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

//виводить інтерфейс 00:00:00:00
function updateTimerInterface({ days, hours, minutes, seconds }) {
  dataDays.textContent = `${addLeadingZero(days)}`;
  dataHours.textContent = `${addLeadingZero(hours)}`;
  dataMinutes.textContent = `${addLeadingZero(minutes)}`;
  dataSeconds.textContent = `${addLeadingZero(seconds)}`; 
}
// Напиши функцію addLeadingZero(value), яка використовує метод padStart() і перед рендерингом інтефрейсу форматує значення.
function addLeadingZero(value) {
  return String(value).padStart(2, '0'); 
}