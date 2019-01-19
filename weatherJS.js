const appKey = "0548650be19b4a8600058c0dd233cf51";
let searchButton = document.getElementById("search-btn");
let searchInput = document.getElementById("search-txt");
let cityName = document.getElementById("cityName");
let icon = document.getElementById("icon");
let temperature = document.getElementById("temperature");
let humidity = document.getElementById("humidity");

searchButton.addEventListener("click", findWeatherDetails);
searchInput.addEventListener("keyup", enterPressed);


function enterPressed(event) {
    if (event.key === "Enter") {
        //alert("In Enter Pressed");
        findWeatherDetails();
    }
  }

function findWeatherDetails() {
    //alert("In function");
    if (searchInput.value === "") {
        
    } else {
        let searchLink = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput.value + "&appid="+appKey;
    httpRequestAsync(searchLink, theResponse);
    }
}

function theResponse(response) {
    let jsonObject = JSON.parse(response);
    cityName.innerHTML = jsonObject.name;
    icon.src = "http://openweathermap.org/img/w/" + jsonObject.weather[0].icon + ".png";
    temperature.innerHTML = parseInt(jsonObject.main.temp - 273) + " &#8451";
    humidity.innerHTML = jsonObject.main.humidity + "%";
  }
  
function httpRequestAsync(url, callback)
    {
    console.log("hello");
        var httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = () => { 
            if (httpRequest.readyState == 4 && httpRequest.status == 200)
                callback(httpRequest.responseText);
        }
        httpRequest.open("GET", url, true); // true for asynchronous 
        httpRequest.send();
    }