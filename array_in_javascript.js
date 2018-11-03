var array=['Ram','Sam','Somu','Sona'];
console.log(array);
console.log(array[3]);
console.log(typeof(array));// in js array is also an object 
var arr=new Array();
arr=array;
console.log(arr);
arr[0]=100;
delete arr[0];
console.log("value of arr"+arr);
console.log("value of array"+array);
console.log(arr[0]);