//splice() method
let arr=[10,20,30,40,50,60]
//delete start index to all
arr.splice(2);
console.log(arr)
//delete 2 or 3 index value inser new value on 2 index 
let arr1=[10,20,30,40,50,60]
arr1.splice(2,2,500);
console.log(arr1)
//insert two element 2 index without delete
let arr2=[10,20,30,40,50,60]
arr2.splice(2,0,800,900);
console.log(arr2)
//delete 1 and insert 3
let arr3=[10,20,30,40,50,60]
arr3.splice(2,1,800,900,1700);
console.log(arr3)
