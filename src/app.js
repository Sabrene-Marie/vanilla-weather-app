function displayTemperature (response){
    let temperatureElement = document.querySelector("#temperature"); 
    let cityElement = document.querySelector("#city"); 
    let descriptionElement = document.querySelector("#description"); 
    let humidityElement = document.querySelector("#humidity"); 
    let windElement = document.querySelector("#wind"); 
    temperatureElement.innerHTML = Math.round
    (response.data.main.temp); 
    cityElement.innerHTML=response.data.name;
    descriptionElement.innerHTML=response.data.weather[0].description; 
    humidityElement.innerHTML=response.data.main.humidity; 
    windElement.innerHTML=Math.round(response.data.wind.speed);
}
let apiKey = "a20ef2f2becea8997e30e5c36e64613d"
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=sydney&appid=${apiKey}&units=metric`
console.log(apiUrl)

axios.get(apiUrl).then(displayTemperature); 