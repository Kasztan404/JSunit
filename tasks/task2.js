//unique - get uniqe value from array

function unique(arr){
    if(!Array.isArray(arr)){
        throw Error('Invalid parameter');
    }else
    return arr.filter((value, index) =>  arr.indexOf(value) === index );
};

console.log(unique([]));


