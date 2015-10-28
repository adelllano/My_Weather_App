// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
//$(document).foundation();

var canvas;
var base_url = "http://api.openweathermap.org/data/2.5/weather";
var city_url = "?q=Miami";
var app_id = "&appid=3ab56d0ed220d302730ef42df5fd284b";
var units = "&units=imperial";
var temp;
var temp_min;
var temp_max;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  // Request the data from openweathermap
  var url = base_url + city_url + app_id + units;
  loadJSON(url, gotWeather);
}


function gotWeather(weather) {

    var weather_temp = select("#temp");
    console.log(weather);
    
    var weather_image = select("#weather_image");
     weather_image.attribute('src', 'smoothie.jpg');
    console.log(weather_image);
    
    var weather_link= select("#imglink");
    weather_link.attribute('href', 'http://allrecipes.com/recipe/237296/grapefruit-smoothie/');
    
    if (weather.main.temp > 80 && weather.main.temp < 83 ) {
        weather_temp.html("<h1>" + weather.main.temp + " F" +"</h1>");
        weather_image.attribute('src', 'quiche.jpg');
        weather_link.attribute('href', 'http://www.pillsbury.com/recipes/bacon-and-cheese-quiche/19288cf4-0cdc-46cc-bc86-4c9bfa799695');
    }
    else if (weather.main.temp > 82 && weather.main.temp < 85 ){
        weather_temp.html(weather.main.temp);
        weather_image.attribute('src', 'salad.jpg');
        weather_link.attribute('href', 'http://www.food.com/recipe/cranberry-almond-lettuce-salad-105318');
    }
    else if (weather.main.temp > 84 && weather.main.temp < 88 ) {
        weather_temp.html(weather.main.temp);  
        weather_image.attribute('src', 'salad.jpg');
        weather_link.attribute('href', 'http://www.food.com/recipe/cranberry-almond-lettuce-salad-105318');
    } else {
        // if nothing else is true
    }
    
    
    
    
    
    
}
