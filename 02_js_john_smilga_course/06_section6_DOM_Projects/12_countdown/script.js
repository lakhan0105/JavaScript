const monthsArray = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const daysArray = [
  "Sunday",
  "Monday",
  "Tesday",
  "Wednesday",
  "Tursday",
  "Friday",
  "Saturday",
];

// Selecting the elements
const saleDateEl = document.querySelector(".sale-date");
const countDownContEl = document.querySelector(".countdown-container");
const divBoxH2 = document.querySelectorAll(".div-box h2");

// get todays date
const dateObject = new Date();
const day = dateObject.getDay();
const date = dateObject.getDate();
const month = dateObject.getMonth();
const year = dateObject.getFullYear();
const hours = dateObject.getHours();
const mins = dateObject.getMinutes();
const secs = dateObject.getSeconds();

// Date object
const saleDateObj = new Date(2023, 3, 24, 11, 30);

// sale day
let saleDay = saleDateObj.getDay();
saleDay = daysArray[saleDay];

// sale saleDate
const saleDate = saleDateObj.getDate();

// sale month
let saleMonth = saleDateObj.getMonth();
saleMonth = monthsArray[saleMonth];

// sale year
const saleYear = saleDateObj.getFullYear();

// sale time
const saleHour = saleDateObj.getHours();

// sale minutes
const saleMin = saleDateObj.getMinutes();

// full sale date
const fullSaleDate = `${saleDay}, ${saleDate} ${saleMonth} ${saleYear} ${saleHour}:${saleMin}${
  saleHour <= 12 ? "am" : "pm"
}`;
// Update saledate el
saleDateEl.textContent = fullSaleDate;

// saletime in ms
const saleTime = saleDateObj.getTime();

const getRemainingTime = function () {
  const currentTime = new Date().getTime(); //should always be inside this function
  const remTime = saleTime - currentTime; // cal remaining time

  // 1s = 1000ms
  // 1min = 60*1000ms
  // 1hr = 60*60*1000ms
  // 1day = 24*60*60*1000ms
  const oneday = 24 * 60 * 60 * 1000;
  const oneHr = 60 * 60 * 1000;
  const oneMin = 60 * 1000;
  const oneSec = 1000;

  let remDays = remTime / oneday;
  remDays = Math.floor(remDays);

  let remHr = (remTime % oneday) / oneHr;
  remHr = Math.floor(remHr);

  let remMin = (remTime % oneHr) / oneMin;
  remMin = Math.floor(remMin);

  let remSec = (remTime % oneMin) / oneSec;
  remSec = Math.floor(remSec);

  // store the rem time in an array
  const remTimeArray = [remDays, remHr, remMin, remSec];

  // format
  function format(item) {
    if (item < 10) {
      return `0${item}`;
    } else {
      return item;
    }
  }

  // for each on all the div-box
  divBoxH2.forEach(function (item, index) {
    item.innerHTML = format(remTimeArray[index]);
  });

  if (remTime <= 0) {
    clearInterval(countDown);
    countDownContEl.innerHTML = `<h4>Sorry, It is sold</h4>`;
  }
};

const countDown = setInterval(getRemainingTime, 1000);
getRemainingTime();
