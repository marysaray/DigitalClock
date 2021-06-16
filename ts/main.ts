/*
The Scrypting
Now here comes the main part. 
The entire code for the working of the clock
is written within the currentTime() function.

In our code, 
this object is used for getting the current hours, 
minutes and seconds which are stored in different variables.
Resource: https://www.codesdope.com/blog/article/how-to-create-a-digital-clock-using-javascript/
*/
window.onload = function() {
    currentTime();
}
/**
 * 
 Inside this function,
 an object of the Date Class is created 
 which allows you to call year, date, hour, minute, second and millisecond.
 */
function currentTime() {
    // create an new instance of date object.
    let date = new Date();
    let hour = date.getHours();
    updateTime(hour);
    let min = date.getMinutes();
    updateTime(min);
    let sec = date.getSeconds();
    updateTime(sec);

    // adding time to the 24HR div
    document.getElementById("all-day").innerHTML =
                                hour + " : " + min + " : " + sec;
    // setting the timer
    let time = setTimeout(function(){
        currentTime();
        1000});
    
    // adding time to the 12HR div
    document.getElementById("half-day").innerHTML =
                                hour + " : " + min + " : " + sec;
    
}
/**
 * To always display the elements of time in two-digit format,
 * a 0 is appended before them whenever they are less than 10 
 * using the updateTime() method.
 * @param current time that will be changed. 
 * @returns the expression of the time.
 */
function updateTime(time) {
    if (time < 10) {
        return "0" + time;
    }
    else {
        return time;
    }
}

/*
Now we have to add just three more lines of code
and our clock will be ready.
A variable named midday is created
and an initial value of "AM" is assigned to it.
This variable will be used to store "AM" or "PM".

Further, 
ternary operator is used to give the value "PM"
to the variable middayif the number of hours is greater
than or equal to 12 and "AM" otherwise.
*/



