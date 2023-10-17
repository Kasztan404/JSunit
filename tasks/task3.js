//outerJoin - get outer join of 2 arrays

function outerJoin(arr1, arr2){
    if(Array.isArray(arr1) && Array.isArray(arr2)){
        const filteredArr1 = arr1.filter(val => { return arr2.includes(val)===false} );
        const filteredArr2 = arr2.filter(val => { return arr1.includes(val)===false} );
        return [...filteredArr1, filteredArr2].sort();
    }
    else{
        throw Error('Invalid parameters!');
    }
}