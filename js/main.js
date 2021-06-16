window.onload = function () {
    allDay();
    halfDay();
};
function allDay() {
    var date = new Date();
    var hour = date.getHours();
    hour = updateTime(hour);
    var min = date.getMinutes();
    min = updateTime(min);
    var sec = date.getSeconds();
    sec = updateTime(sec);
    function updateTime(number) {
        if (number < 10) {
            return "0" + number;
        }
        else {
            return number;
        }
    }
    document.getElementById("all-day").innerText =
        hour + " : " + min + " : " + sec;
    var time = setTimeout(function () {
        allDay();
        1000;
    });
}
function halfDay() {
    var date = new Date();
    var hour = date.getHours();
    hour = updateTime(hour);
    var min = date.getMinutes();
    min = updateTime(min);
    var sec = date.getSeconds();
    sec = updateTime(sec);
    var midday = "AM";
    midday = (hour >= 12) ? "PM" : "AM";
    hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12) : hour);
    function updateTime(number) {
        if (number < 10) {
            return "0" + number;
        }
        else {
            return number;
        }
    }
    document.getElementById("half-day").innerText =
        hour + " : " + min + " : " + sec;
    var time = setTimeout(function () {
        halfDay();
        1000;
    });
}
