//arraySum sum all elements in array

function arraySum(arr){

    if( Array.isArray(arr) ){

        if(arr.length===0){
            return 0;
        }
        else{
            if( arr.every(value=>{ return !isNaN(value);}) ){
            return Math.round(arr.reduce((a,b)=>a+b)*100)/100;
            }
            else{
                throw new Error("It is not an array of numbers!");
            }
        } 
    }
    else{
        throw new Error("It is not an array!");
    }
}