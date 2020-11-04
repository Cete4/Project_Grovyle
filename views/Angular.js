let cardElement = document.querySelector(".card");

cardElement.addEventListener("click", flip);

function flip() {
    cardElement.classList.toggle("flipped")
}

function startTime() {
    var weekday = new Array();
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var d = today.getDate();
    var y = today.getFullYear();
    var wd = weekday[today.getDay()];
    var mt = month[today.getMonth()];

    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('date').innerHTML =
        d;
    document.getElementById('day').innerHTML =
        wd;
    document.getElementById('month').innerHTML =
        mt + "/" + y;

    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i };
    return i;

    // This retrieves gets current weather data 

  } 
  function currentWeather(fxn) {
      let weather= "https://api.openweathermap.org/data/2.5/weather?q=" + searchCity + "&APPID=" + appID;
      $.getJSON(weather, function(json){
          console.log("This is the current weather data: ");
          console.log(json); 
          searchCity=json.name;
          $("#currentCity").html(searchCity); 
          $("#weather_image").attr("src", "https://wallpaperaccess.com/full/1540001.jpg" + json.weather[0].icon + ".png");
          $("#temp").html(((json.main.temp-273.15) * 9/5 + 32).toFixed(1)+"&#8457");
          $("#humidity").html(json.main.humidity+"%");
          $("#windspeed").html(((json.wind.speed)* 2.237).toFixed(1)+" MPH"); 
          $("#description").html("Description: "+json.weather[0].description);
          lat= json.coord.lat; 
          lon= json.coord.lon;
          console.log("lat is "+lat+" and lon is "+lon +". Data taken from current weather json"); 
          console.log("The saved search city name is " + searchCity);
          addHistory();
          makeCityArr(); 
          populateCity(cities);
          if (fxn !== undefined){
              fxn(); 
  
          }

        })  
}