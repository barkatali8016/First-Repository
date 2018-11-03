//string all methods
let str="  helolo World  "
console.log(str.toUpperCase())
console.log(str.toLowerCase())
console.log(str.length)
console.log(str.trim())
console.log(str.replace("  hello","hlw"))
let arr=str.split("l")
console.log(arr[0])
console.log(arr)
console.log(str.trim())
console.log(str.search("l"))// it count including white space and start from 0 index
console.log(str.indexOf("l",5))//it takes second arg start search position
console.log(str.slice(-5,-2))
console.log(str.substring(2,5))
console.log(str.substr(2,6))
console.log(str.substr(-7,5))


