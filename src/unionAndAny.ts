let subs :number | string = '1M'; //union type

let apiRequestStatus: 'pending' | 'success'| 'failed' = "pending"; //literal type

apiRequestStatus = "success";//type inferencing

let airlineSeat: 'aisle' | 'middle' | 'window' = 'window';

airlineSeat = 'aisle';

const orders=['12','34','56']

let currentOrder:string | undefined; //union type
// let currentOrder:any;
//implicit any type, it means i dont mind about the type, and we have to avoid any type as much as possible

for(let order of orders){
    if(order==='12'){
        currentOrder=order;
        break;
    }
    currentOrder="11";
}

console.log(currentOrder);