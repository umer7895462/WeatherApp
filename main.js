let apiKey ="81dfedc02e00b28579574ea370b114b6";
let apiUrl ="https://api.openweathermap.org/data/2.5/weather?";
let city;
let userCity = document.getElementById("userText");
let temperature =  document.getElementById("temp");
let ct = document.getElementById("city");
let humidity = document.getElementById("humidity-info");
let windinfo = document.getElementById("wind-info");
let weatherImage = document.querySelector(".weather_img");


async function getWeatherData(){
    if(userCity.value=="")
        {
            alert("ENTER A CITY NAME");
        }
   else{

            city = userCity.value;
            console.log(city);
            let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`);
            let data = await response.json();
            console.log(data);
            console.log(data.weather[0].main);
            ct.innerHTML=data.name;
            temperature.innerHTML = Math.round(data.main.temp - 273.15)+"°C";
            humidity.innerHTML = data.main.humidity + "%";
            windinfo.innerHTML = data.wind.speed  + "km/h";   
            userCity.value="";
            if(data.weather[0].main=="Clear"){
                weatherImage.src = "Clear.png";
            }
            else if(data.weather[0].main == "Snow"){
                weatherImage.src = "Snow.png";
            }
            else if(data.weather[0].main == "Cloud"){
                weatherImage.src = "clouds.png";
            }
            else if(data.weather[0].main == "Drizzle"){
                weatherImage.src = "Drizzle.png";
            }
            else if(data.weather[0].main == "Mist"){
                weatherImage.src = "Mist.png";
            }
            else if(data.weather[0].main == "Rain"){
                weatherImage.src = "Rain.png";
            }
            console.log(data);
   }
}