const apiKey = "043ca463385c64c9dede15e6ca48f7e0";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".outer input");
const searchBtn = document.querySelector(".outer button");
const icon = document.querySelector(".icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city +  `&appid=${apiKey}`);
    var data = await response.json();

   if (response.status !=200) {
        document.querySelector(".city").innerHTML = "City not found";
        document.querySelector(".temp").innerHTML = "--";
        document.querySelector(".icon").src = ""; 
        return;
    }

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
   

    if(data.weather[0].main === "Clouds"){
       icon.src = "images/clouds.png"
    }
    else if(data.weather[0].main === "Clear"){
        icon.src = "images/clear.png"
    }
    else if(data.weather[0].main === "Rain"){
         icon.src = "images/rain.png"
    }
    else if(data.weather[0].main === "Drizzel"){
         icon.src = "images/drizzel.png"
    }
    else if(data.weather[0].main === "Mist"){
         icon.src = "images/mist.png"
    }
    
    document.querySelector(".weather").style.display = "block"; 
   
}

searchBtn.addEventListener("click", ()=>{
 checkWeather(searchBox.value);
})

searchBox.addEventListener("keyup", (event)=>{
    if(event.key==="Enter"){
         checkWeather(searchBox.value);
    }
});
