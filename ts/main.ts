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
    allDay();
    halfDay();
}
/**
 * This is for the 24HR time clock.
 */
function allDay(){
     // create an new instance of date object.
     let date = new Date();
     let hour = date.getHours();
     hour = updateTime(hour);
     let min = date.getMinutes();
     min = updateTime(min);
     let sec = date.getSeconds();
     sec = updateTime(sec);

/**
 * To always display the elements of time in two-digit format,
 * a 0 is appended before them whenever they are less than 10 
 * using the updateTime() method.
 * @param current time that will be changed. 
 * @returns the expression of the time.
 */
function updateTime(number) {
    if (number < 10) {
        return "0" + number;
    }
    else{
        return number;
    }
}
     // adding time to the 24HR div
     document.getElementById("all-day").innerText =
                                 hour + " : " + min + " : " + sec;
     // setting the timer
     let time = setTimeout(function(){
         allDay();
         1000});
}
/**
 * This is for the 12HR time clock.
 */
function halfDay() {
     // create an new instance of date object.
     let date = new Date();
     let hour = date.getHours();
     hour = updateTime(hour);
     let min = date.getMinutes();
     min = updateTime(min);
     let sec = date.getSeconds();
     sec = updateTime(sec);
 /* 
 A variable named midday is created
 and an initial value of "AM" is assigned to it.
 This variable will be used to store "AM" or "PM".
 Further, ternary operator is used to give the value "PM"
 to the variable middayif the number of hours is greater
 than or equal to 12 and "AM" otherwise.   
 */
    let midday = "AM";
    midday = (hour >= 12) ? "PM" : "AM";
/*
Also, the 24-hour format of 00 : 01 : 23 at midnight
should be displayed as 12 : 01 : 23 AM in the 12-hour format.
For this, the number of hours 00 is replaced by 12.
*/
    hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12): hour);
 /**
  * To always display the elements of time in two-digit format,
  * a 0 is appended before them whenever they are less than 10 
  * using the updateTime() method.
  * @param current time that will be changed. 
  * @returns the expression of the time.
  */
 function updateTime(number) {
    if (number < 10) {
        return "0" + number;
    }
    else{
        return number;
    }
}
    // adding time to the 12HR div
    document.getElementById("half-day").innerText =
                                 hour + " : " + min + " : " + sec;
    // setting the timer
    let time = setTimeout(function(){
    halfDay();
    1000});
}

