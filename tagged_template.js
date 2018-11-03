//tagged template
/*
    Each ticket price is Rs.200 if u buy 5 movie ticket or more,
     then you will get Rs.50 discount per each ticket.
     Or Number ofticket is less than 5 then discount will Rs.0 
*/
let tprice=200
let discprice=50;
let buyticket=012;
let movieTicket=function(string_arr,...rest){
    if(rest[1]<5)
        {
            rest[2]=0;
        }
            return `${string_arr[0]} ${rest[0]} 
            ${string_arr[1]} ${rest[1]} ${string_arr[2]} ${rest[2]}
            ${string_arr[3]}`
        
}
//the tagged function will call with out () peranthces
console.log(movieTicket`Each ticket price is Rs.${tprice} if u buy ${buyticket} movie ticket or more,
then you will get Rs.${discprice} discount per each ticket.
`)