function getChai(kind: string | number) {
    if (typeof kind === 'string') {
        return `Making ${kind} chaii`
    }
    return `Chai Order: ${kind}`
}

function serveChai(msg?: string){ // msg can be string or undefined
    if(msg){
        return `Serving chai: ${msg}`;
    }
    return 'No chai to serve';
}

function orderChai(size: "small" | "medium" | "large" | number){
    if(size === "small"){
        return `Small Cutting Chai...`
    }
    if(size === "medium" || size === "large"){
        return `Make extra chai`
    }
    return `Chai order #${size}`
}

class kulhadChai{
    serve(){
        return 'Serving chai in kulhad'
    }
}

class cuttingChai{
    serve(){
        return 'Serving chai in cutting glass'
    }
}

function serve(chai: kulhadChai | cuttingChai){
    if(chai instanceof kulhadChai){
        return chai.serve();
    }
}

type chaiOrder = {
    type: string
    sugar: Number
}

function isChaiOrder(obj:any): obj is chaiOrder{
    return(
        typeof obj === 'object' && 
        typeof obj !== null &&
        typeof obj.type === 'string' &&
        typeof obj.sugar === 'number' 
    )
}

type MasalaChai ={type: "masala"; spicelevel: number};
type GingerChai ={type: "ginger"; amount: number};
type ElaichiChai ={type: "elaichi"; aroma: number};

type Chai = MasalaChai | GingerChai | ElaichiChai;

function prepareChai(order: Chai){
    switch(order.type){
        case "masala":
            return `Preparing masala chai with spice level ${order.spicelevel}`;
        case "ginger":
            return `Preparing ginger chai with amount ${order.amount}`;
        case "elaichi":
            return `Preparing elaichi chai with aroma ${order.aroma}`;
    }
}  
