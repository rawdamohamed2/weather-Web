const search =document.getElementById('search');
const tomorrowData = document.getElementById('secondDay');
const currentData = document.getElementById('firstDay');
const thirdData = document.getElementById('thirdDay');
const searchbutton=document.getElementById('searchbutton');
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const currentDate = new Date();
let currentDay = days[currentDate.getDay()];
let currentmonth=months[currentDate.getMonth()];
let currtDay = currentDate.getDate()


const tomorrowDate = new Date();
tomorrowDate.setDate(tomorrowDate.getDate()+1);
let tomorrowDay = days[tomorrowDate.getDay()];

const ThirdDate = new Date();
ThirdDate.setDate(ThirdDate.getDate()+2);
let Aftertomorrow = days[ThirdDate.getDay()];


async function getWeather(city) {
   let data = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=c1f2821556df47d3808153426251906&q=${city? city:'egypt'}&days=3&aqi=no&alerts=no`);
   let weather = await data.json();
   console.log(weather);
   firstDay(weather);
   secondDay(weather);
   ThirdDay(weather);
 }
 getWeather();


function firstDay(weather){
  let box = '';
  box += `<div class="card bg-bac2 overflow-hidden border-dark rounded-top card-height">
                         <div class="card-header d-flex justify-content-between border-dark backgheader fontcolor">
                            <div class="divDay">${currentDay}</div>
                            <div class="divData">${currtDay} ${currentmonth}</div>
                        </div>
                        <div class="card-body fontcolor mt-2">
                            <h5 class="card-title">${weather.location.name}</h5>
                            <div class="card-text">
                               <div class="divTemp d-flex justify-content-between">
                                <h1 class="font-size text-white">${weather.current.temp_c}<span class="position-relative absolu">o</span><span>C</span></h1>
                                <img src="https:${weather.current.condition.icon}" alt="Weather icon" class="img-icon position-relative" >
                               </div>
                               <p class="text-primary pt-2">${weather.current.condition.text}</p>
                               <span class="pe-3 mt-2"><img src="images/umbrella.png" alt="Weather icon" class="px-1">${weather.forecast.forecastday[0].day.daily_chance_of_rain}%</span>
                               <span class="pe-3 mt-2"><i class="fa-solid fa-wind fontcolor"></i> ${weather.current.wind_kph}km/h</span>
                               <span class="ps-3 mt-2"><img src="images/compass.png" alt="Weather icon"  class="px-1">${weather.current.wind_dir}</span>
                            </div>
                        </div>
                     </div>`;
 currentData.innerHTML=box;               

}

function secondDay(weather){
  let box = '';
  box += `<div class="card bg-bac3 overflow-hidden border-dark rounded-top card-height">
                         <div class="card-header d-flex justify-content-center border-dark backgheader1 fontcolor">
                            <div class="divDay">${tomorrowDay}</div>
                        </div>
                        <div class="card-body fontcolor mt-2">
                            <div class="card-text text-center">
                               <div class="div2Temp">
                                <img src="https:${weather.forecast.forecastday[1].day.condition.icon}" alt="Weather icon">
                                <h1 class="fs-4 text-white pt-3">${weather.forecast.forecastday[1].day.maxtemp_c}<span class="position-relative absolu">o</span><span>C</span></h1>
                               </div>
                               <div class="div-cont pt-2 ps-4">
                                  <span class="pe-3 fw-light">${weather.forecast.forecastday[1].day.mintemp_c}<span class="position-relative absolu">o</span></span>
                                  <p class="text-primary pt-3 pe-4">${weather.forecast.forecastday[1].day.condition.text}</p>
                               </div> 
                            </div>
                        </div>
                     </div>`;
 tomorrowData.innerHTML=box; 
}

function ThirdDay(weather){
  let box = '';
  box += `<div class="card bg-bac2 overflow-hidden border-dark rounded-top card-height">
                         <div class="card-header d-flex justify-content-center border-dark backgheader fontcolor">
                            <div class="divDay">${Aftertomorrow}</div>
                        </div>
                        <div class="card-body fontcolor mt-2">
                            <div class="card-text text-center">
                               <div class="div2Temp">
                                <img src="https:${weather.forecast.forecastday[2].day.condition.icon}" alt="Weather icon">
                                <h1 class="fs-4 text-white pt-3">${weather.forecast.forecastday[2].day.maxtemp_c}<span class="position-relative absolu">o</span><span>C</span></h1>
                               </div>
                               <div class="div-cont pt-2 ps-4">
                                  <span class="pe-3 fw-light">${weather.forecast.forecastday[2].day.mintemp_c}<span class="position-relative absolu">o</span></span>
                                  <p class="text-primary pt-3 pe-4">${weather.forecast.forecastday[1].day.condition.text}</p>
                               </div> 
                            </div>
                        </div>
                     </div>`;
 thirdData.innerHTML=box; 
}

search.addEventListener('input',() => {
  let city = search.value.trim();
  
  if (city.length >= 3){
    getWeather(city);
  }
  else if(city.length == 0){
    getWeather();
  }
})

// searchbutton.addEventListener('click', ()=>{
//   let city = search.value.trim();
//   if (city.length >=3){
//     getWeather(city);
//   }
// })
