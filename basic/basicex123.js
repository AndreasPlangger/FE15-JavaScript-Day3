/*ex 1 | Temperature v1.0

Create a program that according to the temperature will provide you with the information, whether the weather is cold or moderate.This program should generate a different random number every time, which should be between - 5c and 25c.If the temperature is between - 5c and 10c print "The weather is cold" otherwise print "The weather is moderate".

    Hint: Math.random() will give you a random number between 0 and 1, but it will not reach number 0 or 1, so any value between these two numbers(for example 0, 315, 0, 91239 0, 1) so if you try to multiply it with 10, you can have a random number between 0 and 10 :) .*/

function weatherInfo() {
    var temp = Math.round((Math.random() * 25) - 5);
    console.log("Its " + temp + " degrees C today.")
    weatherCondition = (temp < 10) ? "The weather is cold." : "The weather is moderate.";
    console.log(weatherCondition)
}
weatherInfo();


/*ex 2 | Highest value in an array

Create a program to find the highest value in an array. E.g.If we have the following values 1, 7, -3, 9 we should only get the highest value, number 9.*/


function highestNum() {

};


/*ex 3 | Temperature v2.0

Now when you have program Temperature v1.0 done it time to upgrade it to the version 2.0.Now you should create a nice looking responsive front - end for your program(mobile friendly) and create more messages(e.g.if the temperature is above 32c output "The weather is hot" etc.) and you should display a proper image for the current weather condition.*/

function weatherInfoV2() {
    var temp = Math.round((Math.random() * 45) - 5)
    document.getElementById("temperature").innerHTML = + temp + " degrees C today.";
    console.log("\nIts " + temp + " degrees C today.");

    var firstCheck = temp < 10,
        secondCheck = temp < 32,
        statement = firstCheck ? "The weather is cold." : secondCheck ? "The weather is moderate." : "The weather is hot.";
    document.getElementById("statement").innerHTML = "" + statement + "";
    console.log(statement);

    if (temp < 10) {
        src = "img/cold_640.jpg"
        document.getElementById("visual").src = src;
    }
    else if (temp < 32) {
        src = "img/moderate_640.jpg"
        document.getElementById("visual").src = src;
    }
    else {
        src = "img/hot_640.jpg"
        document.getElementById("visual").src = src;
    }

}
weatherInfoV2();

