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
}

var x = document.getElementById("coordinate");
var y = document.getElementById("json");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    x.innerHTML =
        "Latitude: " +
        position.coords.latitude +
        "<br>Longitude: " +
        position.coords.longitude;

    //Create query for the API.
    var latitude = "latitude=" + position.coords.latitude;
    var longitude = "&longitude=" + position.coords.longitude;
    var query = latitude + longitude + "&localityLanguage=en";

    const Http = new XMLHttpRequest();

    var bigdatacloud_api =
        "https://api.bigdatacloud.net/data/reverse-geocode-client?";

    bigdatacloud_api += query;

    Http.open("GET", bigdatacloud_api);
    Http.send();

    Http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = JSON.parse(this.responseText);
            console.log(myObj);
            y.innerHTML += myObj.locality + ", " + myObj.principalSubdivision;
        }
    };
}