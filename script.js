const apiKey = '1ef9a0cef24a8dab9b5222439721fc5b';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');

searchButton.addEventListener('click', () => {
    const location = locationInput.value;
    if (location) {
        fetchWeather(location);
    }
});
/* this code is made by Akshat sharma */
function fetchWeather(location) {
    const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            locationElement.textContent = data.name;
            temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
            descriptionElement.textContent = data.weather[0].description;
            changebg(data.weather[0].description);
           
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert("||  Error To Finding Location ||")
        });
}
function changebg(description) {
    console.log(description); // To see what the weather description is

    if (description.toLowerCase().includes("rain")) {
        document.body.style.backgroundImage = "url('img/rainny.gif')";
    } else if (description.toLowerCase().includes("cloud")) {
        document.body.style.backgroundImage = "url('img/cloud.gif')";
    } else if (description.toLowerCase().includes("clear")) {
        document.body.style.backgroundImage = " url('img/sunny.gif') ";
    }else if (description.toLowerCase().includes("thunder")) {
        document.body.style.backgroundImage = " url('img/thuder.gif') ";
    } else {
        document.body.style.backgroundImage = "url('img/defaul.gif')";
    }
}