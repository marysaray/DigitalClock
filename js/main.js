window.onload = function () {
    currentTime();
};
function currentTime() {
    var date = new Date();
    var hour = date.getHours();
    updateTime(hour);
    var min = date.getMinutes();
    updateTime(min);
    var sec = date.getSeconds();
    updateTime(sec);
    document.getElementById("all-day").innerHTML =
        hour + " : " + min + " : " + sec;
    var time = setTimeout(function () {
        currentTime();
        1000;
    });
    document.getElementById("half-day").innerHTML =
        hour + " : " + min + " : " + sec;
}
function updateTime(time) {
    if (time < 10) {
        return "0" + time;
    }
    else {
        return time;
    }
}
