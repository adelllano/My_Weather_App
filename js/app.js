// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
//$(document).foundation();


var base_url = "http://api.openweathermap.org/data/2.5/weather";
var city_url = "?q=Miami";
var app_id = "&appid=3ab56d0ed220d302730ef42df5fd284b";
var units = "&units=imperial";
var temp;



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
    weather_link.attribute('href', 'http://allrecipes.com');
    
    var recipe_title= select("#img_description");
    
    
    if (weather.main.temp >= 76 && weather.main.temp <= 79 ) {
        weather_temp.html("<h3>" + weather.main.temp + " F" +"</h3>");
        weather_image.attribute('src', 'lentil.jpg');
        weather_link.attribute('href', 'http://allrecipes.com/recipe/13978/lentil-soup/');
        recipe_title.html("<h3>" + "So Yummy Lentil Soup" + "</h3>")
    }

    else if (weather.main.temp >= 80 && weather.main.temp <= 83 ) {
        weather_temp.html("<h3>" + weather.main.temp + " F" +"</h3>");
        weather_image.attribute('src', 'pancetta.jpg');
        weather_link.attribute('href', 'http://www.taste.com.au/recipes/17341/mushroom+and+pancetta+spaghetti');
        recipe_title.html("<h3>" + "Mmmm...Mushroom & Pancetta Pasta!" + "</h3>")
    }
    
    else if (weather.main.temp >= 84 && weather.main.temp <= 87 ){
        weather_temp.html("<h3>" + weather.main.temp + " F" +"</h3>");
        weather_image.attribute('src', 'salad.jpg');
        weather_link.attribute('href', 'http://www.food.com/recipe/cranberry-almond-lettuce-salad-105318');
        recipe_title.html("<h3>" + "Lettuce talk about this Cranberry and Almond Salad!" + "</h3>")
    }
    
    else if (weather.main.temp >= 88 && weather.main.temp <= 91 ) {
        weather_temp.html("<h3>" + weather.main.temp + " F" +"</h3>");  
        weather_image.attribute('src', 'falafel.jpg');
        weather_link.attribute('href', 'http://www.epicurious.com/recipes/food/views/falafel-109010');
        recipe_title.html("<h3>" + "Sink your teeth into a Falafel! " + "</h3>")
    }
 
    else if (weather.main.temp >= 92 && weather.main.temp <= 95 ) {
        weather_temp.html("<h3>" + weather.main.temp + " F" +"</h3>");  
        weather_image.attribute('src', 'smoothie.jpg');
        weather_link.attribute('href', 'http://allrecipes.com/recipe/237296/grapefruit-smoothie/');
        recipe_title.html("<h3>" + "Gulp, gulp, gulp this Grapefruit Smoothie right up!" + "</h3>")
    } 
    else if (weather.main.temp >= 96 && weather.main.temp <= 99 ) {
        weather_temp.html("<h3>" + weather.main.temp + " F" +"</h3>");  
        weather_image.attribute('src', 'quiche.jpg');
        weather_link.attribute('href', 'http://www.pillsbury.com/recipes/bacon-and-cheese-quiche/19288cf4-0cdc-46cc-bc86-4c9bfa799695');
        recipe_title.html("<h3>" + "I Bacon you pardon? This Bacon and Cheese Quiche is outta this world!" + "</h3>")
    } 
    
    else {
        // if nothing else is true
        weather_temp.html("<h3>" + "Can't go wrong with pizza..." + "</h3>");
        weather_image.attribute('src', 'pizza.jpg');
        weather_link.attribute('href', 'http://allrecipes.com/recipe/230760/touchdown-pizza/?internalSource=hn_carousel%2001_Touchdown%20Pizza&referringId=250&referringContentType=recipe%20hub&referringPosition=carousel%2001');
    }
    
}
    

