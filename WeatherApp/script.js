const apiKey = 'f6151cb1db240549d10729b66cdc1578';
const apiurl = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&units=metric&q=';

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather img');


async function checkWeather(city){
    const response = await fetch(apiurl +city+ '&appid='+apiKey);
    var data = await response.json();

    if(response.status == 404){
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
    }
    else{
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + ' Km/h';

    if(data.weather[0].main === 'Clouds'){
        weatherIcon.src = './images/Clouds.png';
    }
    else if(data.weather[0].main === 'Clear'){
        weatherIcon.src = './images/clear.png';
    }
    else if(data.weather[0].main === 'Drizzle'){
        weatherIcon.src = './images/drizzle.png';
    }
    else if(data.weather[0].main === 'Rain'){
        weatherIcon.src = './images/rain.png';
    }
    else if(data.weather[0].main === 'Snow'){
        weatherIcon.src = './images/snow.png';
    }

    document.querySelector('.weather').style.display = 'block';
    document.querySelector('.error').style.display = 'none';
    }

} 

searchBtn.addEventListener('click', () =>{
    checkWeather(searchBox.value);
})

