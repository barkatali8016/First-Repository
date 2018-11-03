//fill() method 
let arr =["Ram","Rahim","Ranjana","Sujan","Sumon"];
arr.fill("don")
console.log(arr)   
arr.fill("Sadhu",1,3)//index no not included
console.log(arr) 
//we can work with fill this ways
let arr1=new Array(3).fill("Ubuntu");
console.log(arr1)