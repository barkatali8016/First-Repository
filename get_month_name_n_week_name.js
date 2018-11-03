//get month name and week  name
let date=new Date()
let month=date.getMonth()
let day=date.getDay()

let getMonthName=function(month)
{
    let monthName=["January","February","March","April","May","June","July","August","September","October","November","December"]
    return monthName[month];
}
let getDayName=function(day)
{
    let dayName=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    return dayName[day];
}
console.log(getMonthName(month))
console.log(getDayName(day))