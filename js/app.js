// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
//$(document).foundation();


var base_url = "http://api.openweathermap.org/data/2.5/weather?q=";
//var city_url = "?q=Miami";
var app_id = "&appid=3ab56d0ed220d302730ef42df5fd284b";
var units = "&units=imperial";
var temp;
var humidity;
var input;
var city;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  var button = select('#submit');
  button.mousePressed(returnWeather);

  input = select('#city');
}

function returnWeather()    {
  // Request the data from openweathermap
  var url = base_url + input.value() + app_id + units;
  loadJSON(url, gotWeather);
}

function gotWeather(weather) {
    
    var today = new Date();
    var hour = today.getHours();
    
    console.log("hour is " + hour);

    console.log(weather);
    console.log("-->" + weather.weather[0].main);
    
    var weather_humidity = select("#humidity");
    
    var weather_temp = select("#temp");
    console.log(weather);
    
    var weather_image = select("#weather_image");
     weather_image.attribute('src', 'img/smoothie.jpg');
    console.log(weather_image);
    
    var weather_link= select("#imglink");
    weather_link.attribute('href', 'http://allrecipes.com');
    
    var recipe_title= select("#img_description");
    
    var weather_city= select ("#name");
    var greeting= select ("#greeting");
    var weather_rain= select("#rain");
   
//    using clouds
//    weather.clouds.all <= 92
    
//    temp only
//    if (weather.main.temp >= 60 && weather.main.temp <= 63) {
    
        //    temp= 60 - 63
    
    if (hour >= 4 && hour <= 11 && weather.main.temp >= 60 && weather.main.temp <= 63.99 ) {
        weather_temp.html("<h3>" + weather.main.temp + " F" +"</h3>");
//        weather_city.html("<h2>" + weather.name + "</h2>");
        greeting.html("<h2>" + "Good Morning, " + weather.name + "</h2>");
        weather_image.attribute('src', 'img/pancakes.jpg');
        weather_link.attribute('href', 'http://allrecipes.com/recipe/21014/good-old-fashioned-pancakes/');
        recipe_title.html("<h3>" + "Good Old Fashioned Pancakes" + "</h3>")
   
    }

    else if (hour >= 12 && hour <= 16 && weather.main.temp >= 60 && weather.main.temp <= 63.99 ) {
        weather_temp.html("<h3>" + weather.main.temp + " F" +"</h3>");
//        weather_city.html("<h2>" + weather.name + "</h2>");
        greeting.html("<h2>" + "Good Afternoon, " + weather.name + "</h2>");
        weather_image.attribute('src', 'img/caprese.jpg');
        weather_link.attribute('href', 'http://www.cookingchanneltv.com/recipes/debi-mazar-and-gabriele-corcos/caprese-sandwich.html');
        recipe_title.html("<h3>" + "Toasted Caprese Sandwich" + "</h3>")

    }
    
    else if (hour >= 17 && hour <= 24 && weather.main.temp >= 60 && weather.main.temp <= 63.99 ) {
        weather_temp.html("<h3>" + weather.main.temp + " F" +"</h3>");
//        weather_city.html("<h2>" + weather.name + "</h2>");
        greeting.html("<h2>" + "Good Evening, " + weather.name + "</h2>");
        weather_image.attribute('src', 'img/beefstew.jpg');
        weather_link.attribute('href', 'http://www.food.com/recipe/mahogany-beef-stew-80536');
        recipe_title.html("<h3>" + "Mahogany Beef Stew" + "</h3>")

    }

//      temp= 64 - 67
    
    else if (hour >= 4 && hour <= 11 && weather.main.temp >= 64 && weather.main.temp <= 67.99 ) {
        weather_temp.html("<h3>" + weather.main.temp + " F" +"</h3>");
//        weather_city.html("<h2>" + weather.name + "</h2>");
        greeting.html("<h2>" + "Good Morning, " + weather.name + "</h2>");
        weather_image.attribute('src', 'img/broccoli-quiche.jpg');
        weather_link.attribute('href', 'http://allrecipes.com/recipe/24148/easy-broccoli-quiche/');
        recipe_title.html("<h3>" + "Easy Broccoli Quiche" + "</h3>")
   
    }

    else if (hour >= 12 && hour <= 16 && weather.main.temp >= 64 && weather.main.temp <= 67.99 ) {
        weather_temp.html("<h3>" + weather.main.temp + " F" +"</h3>");
//        weather_city.html("<h2>" + weather.name + "</h2>");
        greeting.html("<h2>" + "Good Afternoon, " + weather.name + "</h2>");
        weather_image.attribute('src', 'img/tomato.jpg');
        weather_link.attribute('href', 'http://www.marthastewart.com/315123/tomato-soup');
        recipe_title.html("<h3>" + "Tomato Soup" + "</h3>")

    }
    
    else if (hour >= 17 && hour <= 24 && weather.main.temp >= 64 && weather.main.temp <= 67.99 ) {
        weather_temp.html("<h3>" + weather.main.temp + " F" +"</h3>");
//        weather_city.html("<h2>" + weather.name + "</h2>");
        greeting.html("<h2>" + "Good Evening, " + weather.name + "</h2>");
        weather_image.attribute('src', 'img/pot-roast.jpg');
        weather_link.attribute('href', 'http://allrecipes.com/recipe/16066/awesome-slow-cooker-pot-roast/');
        recipe_title.html("<h3>" + "Slow Cooker Pot Roast" + "</h3>")

    }
    
    //      temp= 68 - 69
    
    else if (hour >= 4 && hour <= 11 && weather.main.temp >= 68 && weather.main.temp <= 69.99 ) {
        weather_temp.html("<h3>" + weather.main.temp + " F" +"</h3>");
//        weather_city.html("<h2>" + weather.name + "</h2>");
        greeting.html("<h2>" + "Good Morning, " + weather.name + "</h2>");
        weather_image.attribute('src', 'img/oats.jpg');
        weather_link.attribute('href', 'http://www.quakeroats.com/cooking-and-recipe/apricot-honey-oatmeal.aspx');
        recipe_title.html("<h3>" + "Apricot Honey Oatmeal" + "</h3>")
   
    }

    else if (hour >= 12 && hour <= 16 && weather.main.temp >= 68 && weather.main.temp <= 69.99 ) {
        weather_temp.html("<h3>" + weather.main.temp + " F" +"</h3>");
//        weather_city.html("<h2>" + weather.name + "</h2>");
        greeting.html("<h2>" + "Good Afternoon, " + weather.name + "</h2>");
        weather_image.attribute('src', 'img/pumpkin-soup.jpg');
        weather_link.attribute('href', 'http://www.myrecipes.com/recipe/curried-pumpkin-soup-with-spicy-pumpkin-seeds');
        recipe_title.html("<h3>" + "Curried Pumpkin Soup" + "</h3>")

    }
    
    else if (hour >= 17 && hour <= 24 && weather.main.temp >= 68 && weather.main.temp <= 69.99 ) {
        weather_temp.html("<h3>" + weather.main.temp + " F" +"</h3>");
//        weather_city.html("<h2>" + weather.name + "</h2>");
        greeting.html("<h2>" + "Good Evening, " + weather.name + "</h2>");
        weather_image.attribute('src', 'img/ziti.jpg');
        weather_link.attribute('href', 'http://www.marthastewart.com/312465/baked-ziti-with-crunchy-italian-salad-an');
        recipe_title.html("<h3>" + "Baked Ziti and Garlic Bread" + "</h3>")

    }
    
     //      temp= 70 - 73
    
    else if (hour >= 4 && hour <= 11 && weather.main.temp >= 70 && weather.main.temp <= 73.99 ) {
        weather_temp.html("<h3>" + weather.main.temp + " F" +"</h3>");
//        weather_city.html("<h2>" + weather.name + "</h2>");
        greeting.html("<h2>" + "Good Morning, " + weather.name + "</h2>");
        weather_image.attribute('src', 'img/empanada.jpg');
        weather_link.attribute('href', 'http://www.marthastewart.com/334286/beef-empanadas');
        recipe_title.html("<h3>" + "Beef Empanadas" + "</h3>")
   
    }

    else if (hour >= 12 && hour <= 16 && weather.main.temp >= 70 && weather.main.temp <= 73.99 ) {
        weather_temp.html("<h3>" + weather.main.temp + " F" +"</h3>");
//        weather_city.html("<h2>" + weather.name + "</h2>");
        greeting.html("<h2>" + "Good Afternoon, " + weather.name + "</h2>");
        weather_image.attribute('src', 'img/chicken-burger.jpg');
        weather_link.attribute('href', 'http://www.foodnetwork.com/recipes/chicken-burgers-recipe.html');
        recipe_title.html("<h3>" + "Ground Chicken Burger" + "</h3>")

    }
    
    else if (hour >= 17 && hour <= 24 && weather.main.temp >= 70 && weather.main.temp <= 73.99 ) {
        weather_temp.html("<h3>" + weather.main.temp + " F" +"</h3>");
//        weather_city.html("<h2>" + weather.name + "</h2>");
        greeting.html("<h2>" + "Good Evening, " + weather.name + "</h2>");
        weather_image.attribute('src', 'img/clam-bake.jpg');
        weather_link.attribute('href', 'http://www.bonappetit.com/recipe/one-pot-clambake');
        recipe_title.html("<h3>" + "One Pot Clambake" + "</h3>")

    }

      //      temp= 74 - 77
    
    else if (hour >= 4 && hour <= 11 && weather.main.temp >= 74 && weather.main.temp <= 77.99 ) {
        weather_temp.html("<h3>" + weather.main.temp + " F" +"</h3>");
//        weather_city.html("<h2>" + weather.name + "</h2>");
        greeting.html("<h2>" + "Good Morning, " + weather.name + "</h2>");
        weather_image.attribute('src', 'img/banana-muffin.jpg');
        weather_link.attribute('href', 'http://allrecipes.com/recipe/17652/banana-crumb-muffins/');
        recipe_title.html("<h3>" + "Banana Crumb Muffin" + "</h3>")
   
    }

    else if (hour >= 12 && hour <= 16 && weather.main.temp >= 74 && weather.main.temp <= 77.99 ) {
        weather_temp.html("<h3>" + weather.main.temp + " F" +"</h3>");
//        weather_city.html("<h2>" + weather.name + "</h2>");
        greeting.html("<h2>" + "Good Afternoon, " + weather.name + "</h2>");
        weather_image.attribute('src', 'img/pulled-pork.jpg');
        weather_link.attribute('href', 'http://cooking.nytimes.com/recipes/1014733-pulled-pork-sandwiches');
        recipe_title.html("<h3>" + "Pulled Pork Sandwich" + "</h3>")

    }
    
    else if (hour >= 17 && hour <= 24 && weather.main.temp >= 74 && weather.main.temp <= 77.99 ) {
        weather_temp.html("<h3>" + weather.main.temp + " F" +"</h3>");
//        weather_city.html("<h2>" + weather.name + "</h2>");
        greeting.html("<h2>" + "Good Evening, " + weather.name + "</h2>");
        weather_image.attribute('src', 'img/picatta.jpg');
        weather_link.attribute('href', 'http://www.myrecipes.com/recipe/chicken-piccata-1');
        recipe_title.html("<h3>" + "Chicken Picatta" + "</h3>")

    }
    
    
          //      temp= 78 - 79
    
    else if (hour >= 4 && hour <= 11 && weather.main.temp >= 78 && weather.main.temp <= 79.99 ) {
        weather_temp.html("<h3>" + weather.main.temp + " F" +"</h3>");
//        weather_city.html("<h2>" + weather.name + "</h2>");
        greeting.html("<h2>" + "Good Morning, " + weather.name + "</h2>");
        weather_image.attribute('src', 'img/french-toast.jpg');
        weather_link.attribute('href', 'http://www.mccormick.com/Recipes/Breakfast-Brunch/Quick-and-Easy-French-Toast');
        recipe_title.html("<h3>" + "French Toast" + "</h3>")
   
    }

    else if (hour >= 12 && hour <= 16 && weather.main.temp >= 78 && weather.main.temp <= 79.99 ) {
        weather_temp.html("<h3>" + weather.main.temp + " F" +"</h3>");
//        weather_city.html("<h2>" + weather.name + "</h2>");
        greeting.html("<h2>" + "Good Afternoon, " + weather.name + "</h2>");
        weather_image.attribute('src', 'img/salad.jpg');
        weather_link.attribute('href', 'http://allrecipes.com/recipe/14469/jamies-cranberry-spinach-salad/');
        recipe_title.html("<h3>" + "Cranberry Spinach Salad" + "</h3>")

    }
    
    else if (hour >= 17 && hour <= 24 && weather.main.temp >= 78 && weather.main.temp <= 79.99 ) {
        weather_temp.html("<h3>" + weather.main.temp + " F" +"</h3>");
//        weather_city.html("<h2>" + weather.name + "</h2>");
        greeting.html("<h2>" + "Good Evening, " + weather.name + "</h2>");
        weather_image.attribute('src', 'img/chilli.jpg');
        weather_link.attribute('href', 'http://www.bbcgoodfood.com/recipes/3228/chilli-con-carne');
        recipe_title.html("<h3>" + "Chilli Con Carne" + "</h3>")

    }
    
    
      //      temp= 80 - 83
    
    else if (hour >= 4 && hour <= 11 && weather.main.temp >= 80 && weather.main.temp <= 83.99 ) {
        weather_temp.html("<h3>" + weather.main.temp + " F" +"</h3>");
//        weather_city.html("<h2>" + weather.name + "</h2>");
        greeting.html("<h2>" + "Good Morning, " + weather.name + "</h2>");
        weather_image.attribute('src', 'img/smoothie.jpg');
        weather_link.attribute('href', 'http://allrecipes.com/recipe/237296/grapefruit-smoothie/');
        recipe_title.html("<h3>" + "Grapefruit Smoothie" + "</h3>")
   
    }

    else if (hour >= 12 && hour <= 16 && weather.main.temp >= 80 && weather.main.temp <= 83.99 ) {
        weather_temp.html("<h3>" + weather.main.temp + " F" +"</h3>");
//        weather_city.html("<h2>" + weather.name + "</h2>");
        greeting.html("<h2>" + "Good Afternoon, " + weather.name + "</h2>");
        weather_image.attribute('src', 'img/turkey-sandwich.jpg');
        weather_link.attribute('href', 'http://jamiecooksitup.net/2011/05/the-grilled-turkey-and-swiss-you-dont-want-to-miss-2/');
        recipe_title.html("<h3>" + "Turkey & Swiss Sandwich" + "</h3>")

    }
    
    else if (hour >= 17 && hour <= 24 && weather.main.temp >= 80 && weather.main.temp <= 83.99 ) {
        weather_temp.html("<h3>" + weather.main.temp + " F" +"</h3>");
//        weather_city.html("<h2>" + weather.name + "</h2>");
        greeting.html("<h2>" + "Good Evening, " + weather.name + "</h2>");
        weather_image.attribute('src', 'img/lasagna.jpg');
        weather_link.attribute('href', 'http://allrecipes.com/recipe/19400/lasagna-alfredo/');
        recipe_title.html("<h3>" + "Lasagna Alfredo" + "</h3>")

    }
    
    
          //      temp= 84 - 87
    
    else if (hour >= 4 && hour <= 11 && weather.main.temp >= 84 && weather.main.temp <= 87.99 ) {
        weather_temp.html("<h3>" + weather.main.temp + " F" +"</h3>");
//        weather_city.html("<h2>" + weather.name + "</h2>");
        greeting.html("<h2>" + "Good Morning, " + weather.name + "</h2>");
        weather_image.attribute('src', 'img/burrito.jpg');
        weather_link.attribute('href', 'http://www.mccormick.com/Recipes/Breakfast-Brunch/Ham-and-Cheese-Breakfast-Burritos');
        recipe_title.html("<h3>" + "Ham & Cheese Breakfast Burrito" + "</h3>")
   
    }

    else if (hour >= 12 && hour <= 16 && weather.main.temp >= 84 && weather.main.temp <= 87.99 ) {
        weather_temp.html("<h3>" + weather.main.temp + " F" +"</h3>");
//        weather_city.html("<h2>" + weather.name + "</h2>");
        greeting.html("<h2>" + "Good Afternoon, " + weather.name + "</h2>");
        weather_image.attribute('src', 'img/lettuce-wraps.jpg');
        weather_link.attribute('href', 'http://damndelicious.net/2014/05/30/pf-changs-chicken-lettuce-wraps/');
        recipe_title.html("<h3>" + "Chicken Lettuce Wraps" + "</h3>")

    }
    
    else if (hour >= 17 && hour <= 24 && weather.main.temp >= 84 && weather.main.temp <= 87.99 ) {
        weather_temp.html("<h3>" + weather.main.temp + " F" +"</h3>");
//        weather_city.html("<h2>" + weather.name + "</h2>");
        greeting.html("<h2>" + "Good Evening, " + weather.name + "</h2>");
        weather_image.attribute('src', 'img/chicken-pasta.jpg');
        weather_link.attribute('href', 'http://allrecipes.com/recipe/12072/greek-chicken-pasta/');
        recipe_title.html("<h3>" + "Greek Chicken Pasta" + "</h3>")

    }
    
              //      temp= 88 - 89
    
    else if (hour >= 4 && hour <= 11 && weather.main.temp >= 88 && weather.main.temp <= 89.99 ) {
        weather_temp.html("<h3>" + weather.main.temp + " F" +"</h3>");
//        weather_city.html("<h2>" + weather.name + "</h2>");
        greeting.html("<h2>" + "Good Morning, " + weather.name + "</h2>");
        weather_image.attribute('src', 'img/potato-pancakes.jpg');
        weather_link.attribute('href', 'http://www.mrfood.com/Potatoes-Rice/German-Potato-Pancakes-MF');
        recipe_title.html("<h3>" + "German Potato Pancakes" + "</h3>")
   
    }

    else if (hour >= 12 && hour <= 16 && weather.main.temp >= 88 && weather.main.temp <= 89.99 ) {
        weather_temp.html("<h3>" + weather.main.temp + " F" +"</h3>");
//        weather_city.html("<h2>" + weather.name + "</h2>");
        greeting.html("<h2>" + "Good Afternoon, " + weather.name + "</h2>");
        weather_image.attribute('src', 'img/quinoa.jpg');
        weather_link.attribute('href', 'http://www.thekitchn.com/recipe-quinoa-tabbouleh-90136');
        recipe_title.html("<h3>" + "Quinoa Tabbouleh" + "</h3>")

    }
    
    else if (hour >= 17 && hour <= 24 && weather.main.temp >= 88 && weather.main.temp <= 89.99 ) {
        weather_temp.html("<h3>" + weather.main.temp + " F" +"</h3>");
//        weather_city.html("<h2>" + weather.name + "</h2>");
        greeting.html("<h2>" + "Good Evening, " + weather.name + "</h2>");
        weather_image.attribute('src', 'img/sesame-beef.jpg');
        weather_link.attribute('href', 'http://www.tasteofhome.com/recipes/sesame-steaks');
        recipe_title.html("<h3>" + "Sesame Steaks" + "</h3>")

    }
    
             //      temp= 90 - 95
    
    else if (hour >= 4 && hour <= 11 && weather.main.temp >= 90 && weather.main.temp <= 95.99 ) {
        weather_temp.html("<h3>" + weather.main.temp + " F" +"</h3>");
//        weather_city.html("<h2>" + weather.name + "</h2>");
        greeting.html("<h2>" + "Good Morning, " + weather.name + "</h2>");
        weather_image.attribute('src', 'img/fritters.jpg');
        weather_link.attribute('href', 'http://thepioneerwoman.com/cooking/apple-fritters/');
        recipe_title.html("<h3>" + "Apple Fritters" + "</h3>")
   
    }

    else if (hour >= 12 && hour <= 16 && weather.main.temp >= 90 && weather.main.temp <= 95.99 ) {
        weather_temp.html("<h3>" + weather.main.temp + " F" +"</h3>");
//        weather_city.html("<h2>" + weather.name + "</h2>");
        greeting.html("<h2>" + "Good Afternoon, " + weather.name + "</h2>");
        weather_image.attribute('src', 'img/shrimp-salad.jpg');
        weather_link.attribute('href', 'http://www.hallmarkchannel.com/cedar-cove/recipes/caesar-salad-with-lemon-shrimp-and-homemade-garlic-croutons');
        recipe_title.html("<h3>" + "Caesar Salad With Lemon Shrimp" + "</h3>")

    }
    
    else if (hour >= 17 && hour <= 24 && weather.main.temp >= 90 && weather.main.temp <= 95.99 ) {
        weather_temp.html("<h3>" + weather.main.temp + " F" +"</h3>");
//        weather_city.html("<h2>" + weather.name + "</h2>");
        greeting.html("<h2>" + "Good Evening, " + weather.name + "</h2>");
        weather_image.attribute('src', 'img/salmon.jpg');
        weather_link.attribute('href', 'http://www.marthastewart.com/312500/grilled-salmon-steaks-with-mustard-sauce');
        recipe_title.html("<h3>" + "Grilled Salmon With Asparagus" + "</h3>")

    }

    
                 //      temp= 96 - 101
    
    else if (hour >= 4 && hour <= 11 && weather.main.temp >= 96 && weather.main.temp <= 101.99 ) {
        weather_temp.html("<h3>" + weather.main.temp + " F" +"</h3>");
//        weather_city.html("<h2>" + weather.name + "</h2>");
        greeting.html("<h2>" + "Good Morning, " + weather.name + "</h2>");
        weather_image.attribute('src', 'img/croissants.jpg');
        weather_link.attribute('href', 'http://allrecipes.com/recipe/84393/raspberry-pain-au-chocolat-raspberry-chocolate-croissants/');
        recipe_title.html("<h3>" + "Raspberry Chocolate Croissants" + "</h3>")
   
    }

    else if (hour >= 12 && hour <= 16 && weather.main.temp >= 96 && weather.main.temp <= 101.99 ) {
        weather_temp.html("<h3>" + weather.main.temp + " F" +"</h3>");
//        weather_city.html("<h2>" + weather.name + "</h2>");
        greeting.html("<h2>" + "Good Afternoon, " + weather.name + "</h2>");
        weather_image.attribute('src', 'img/falafel.jpg');
        weather_link.attribute('href', 'http://allrecipes.com/recipe/25309/seans-falafel-and-cucumber-sauce/');
        recipe_title.html("<h3>" + "Falafels And Cucumber Sauce" + "</h3>")

    }
    
    else if (hour >= 17 && hour <= 24 && weather.main.temp >= 96 && weather.main.temp <= 101.99 ) {
        weather_temp.html("<h3>" + weather.main.temp + " F" +"</h3>");
//        weather_city.html("<h2>" + weather.name + "</h2>");
        greeting.html("<h2>" + "Good Evening, " + weather.name + "</h2>");
        weather_image.attribute('src', 'img/pepper.jpg');
        weather_link.attribute('href', 'http://cookingmatters.org/recipes/italian-stuffed-peppers');
        recipe_title.html("<h3>" + "Italian Stuffed Peppers" + "</h3>")

    }
    
    
    else {
        // if nothing else is true
        weather_temp.html("<h3>" + weather.main.temp + " F" + "</h3>");
//        weather_city.html("<h2>" + weather.name + "</h2>");
        greeting.html("<h2>" + "Hello there, " + weather.name + "!" + "</h2>");
        weather_image.attribute('src', 'img/pizza.jpg');
        weather_link.attribute('href', 'http://www.pillsbury.com/recipes/pepperoni-pizza/4a585fba-95d2-4db4-8a2a-c13f01074b7c/');
        recipe_title.html("<h3>" + "Can't go wrong with pizza"  + "</h3>")
    }
    
}
    

