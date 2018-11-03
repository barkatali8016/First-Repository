//how to formate date n time 
let d=new Date()
console.log(formatedDate(d))
console.log(formatedTime(d))
function formatedDate(d)
{   
    let date=d.getDate()
    let month=d.getMonth()+1;
    let yr=d.getFullYear()

    return "dd/mm/yy="+date+"/"+month+"/"+yr;
}
function formatedTime(d)
{
    let hh=d.getHours()
    let ss=d.getSeconds()
    let mm=d.getMinutes()
    return "hh:mm:ss="+hh+":"+mm+":"+ss;
}
