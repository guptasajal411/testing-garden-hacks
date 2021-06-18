console.log("hello world");
$(document).ready(function () {
    
    // Get Location 
    navigator.geolocation.getCurrentPosition(success, error);

    function success(pos) {
        var lat = pos.coords.latitude;
        var long = pos.coords.longitude;
        weather(lat, long);
    }

    function error() {
        console.log('There was an error');
    }

    // Call Weather
    function weather(lat, long) {
        var URL = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}`;

        $.getJSON(URL, function(data) {
            updateDOM(data);
        });
    }
    function updateDOM(data) {
        $("#temperature").html(data.main.temp_max + "° Celcius");
        $("#humidity").html("Humidity is: " + data.main.humidity + "%");
        $("#city").html("Your city: " + data.name);
        $("#wind").html("Wind speed: " + data.wind.speed + "kmph");
        console.log(data);
        // console.log("update dom");
        // console.log(data.name);
        // console.log(data.main.temp_max);
    }
    if (data.main.humidity > 10){
        console.log("humdidty check complete");
    }
})