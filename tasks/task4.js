// function to count elements in array, result object, ex. [a,b,a] result {a:2,b:1}

function getCountedArrayElements(arr)
{
    const obj = {};
    
    arr.forEach( (element) => {
        if (obj.hasOwnProperty(element)) {
            obj[element]+=1;
        } else {
            obj[element]=1;
        }
    });
    return obj;
}