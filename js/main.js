window.onload = function () {
    currentTime();
};
function currentTime() {
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
        currentTime();
        1000;
    });
    document.getElementById("half-day").innerText =
        hour + " : " + min + " : " + sec;
}
