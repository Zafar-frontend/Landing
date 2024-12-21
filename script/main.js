// Функция для добавления ведущего нуля
function correctDate(date) {
    return date < 10 ? "0" + date : date;
  }
  
  function correctDate_2(date) {
    return date < 10 ? "0" + date : date;
  }
  
  // Таймер для распродажи
  function saleDate() {
    const days = document.getElementsByClassName("time")[0];
    const hours = document.getElementsByClassName("time")[1];
    const minutes = document.getElementsByClassName("time")[2];
    const seconds = document.getElementsByClassName("time")[3];
    
    // Проверяем, что все элементы существуют
    if (!days || !hours || !minutes || !seconds) {
      console.error("Не найдены элементы с классом 'time'");
      return; // Выходим, если не найден хотя бы один элемент
    }
  
    const finishDate = new Date(2024, 11, 31); // 31 декабря 2024 года
    const currentDate = new Date();
  
    const date = finishDate - currentDate; // Разница в миллисекундах
    
    // Обновляем элементы с классами "time"
    days.innerHTML = correctDate(Math.trunc(date / (1000 * 60 * 60 * 24)));
    hours.innerHTML = correctDate(Math.trunc((date % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    minutes.innerHTML = correctDate(Math.trunc((date % (1000 * 60 * 60)) / (1000 * 60)));
    seconds.innerHTML = correctDate(Math.trunc((date % (1000 * 60)) / 1000));
  }
  
  // Таймер для дедлайна
  function deadlineDate() {
    const day = document.getElementsByClassName("watches")[0];
    const hour = document.getElementsByClassName("watches")[1];
    const minute = document.getElementsByClassName("watches")[2];
    const second = document.getElementsByClassName("watches")[3];
    
    // Проверяем, что все элементы существуют
    if (!day || !hour || !minute || !second) {
      console.error("Не найдены элементы с классом 'watches'");
      return; // Выходим, если не найден хотя бы один элемент
    }
  
    const endDate = new Date(2024, 11, 31); // 31 декабря 2024 года
    const newDate = new Date();
  
    const date = endDate - newDate; // Разница в миллисекундах
    
    // Обновляем элементы с классами "watches"
    day.innerHTML = correctDate_2(Math.trunc(date / (1000 * 60 * 60 * 24)));
    hour.innerHTML = correctDate_2(Math.trunc((date % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    minute.innerHTML = correctDate_2(Math.trunc((date % (1000 * 60 * 60)) / (1000 * 60)));
    second.innerHTML = correctDate_2(Math.trunc((date % (1000 * 60)) / 1000));
  }
  
  // Запускаем оба таймера, только если элементы существуют
  document.addEventListener("DOMContentLoaded", function() {
    saleDate();
    setInterval(saleDate, 1000);
  
    deadlineDate();
    setInterval(deadlineDate, 1000);
  });
  