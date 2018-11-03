//2d arrays in js and array of array
//let arr=[[10,20,30],[50,60,70,],[55,66,77]];

let row=prompt("Enter the row=");
let col=prompt("Enter the column=");

// assign the number of row of the 2d array using object literals
/*let arr=[];
for (let i=0;i<row;i++)
{
    arr[i]=[];
}*/
// assign the number of row of the 2d array using array of object 
let arr=new Array(row);//defined the length of the array
for (let i=0;i<row;i++)
{
    arr[i]=new Array(col);//defining the column of each row
}
//get the input from user
for(let i=0;i<row;i++)
{
    for(let j=0;j<col;j++)
    {
        arr[i][j]=prompt("Enter the element of the array");
    }
    
} 
//display the element of the array
for(let i=0;i<row;i++)
{
    for(let j=0;j<col;j++)
    {
        document.write(arr[i][j]+" ");
    }
    document.write("<br>");
} 
