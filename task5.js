var getWeekDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "fri", "Sat"];

var getMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov","Dec"];

var date = new Date();

var day = date.getDate();
var month = getMonth[date.getMonth()];
var year = date.getFullYear();
var weekDay = getWeekDay[date.getDay()];

var msg = "Today is " + weekDay + ",<br>" + month + " " + day + ", " + year;

function display() {
document.getElementById("mydata").innerHTML = msg;
}
