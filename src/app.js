function displayTemperature (response){
    let temperatureElement = document.querySelector("#temperature"); 
    temperatureElement.innerHTML = Math.round
    (response.data.main.temp); 
}
let apiKey = "a20ef2f2becea8997e30e5c36e64613d"
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=sydney&appid=${apiKey}&units=metric`
console.log(apiUrl)

axios.get(apiUrl).then(displayTemperature); 