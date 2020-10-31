var getWeekDay = ["Mon", "Tue", "Wed", "Thu", "fri", "Sat", "Sun"];

var getMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov","Dec"];

var date = new Date();

var day = date.getDate();
var month = getMonth[date.getMonth()+1];
var year = date.getFullYear();
var weekDay = getWeekDay[date.getDay() + 1];

var msg = "Today is " + weekDay + ",<br>" + month + " " + day + ", " + year;

function display() {
document.getElementById("mydata").innerHTML = msg;
}