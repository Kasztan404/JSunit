// wyznaczenie n-tego wyrazu ciągu fibonaciego

function fibonaci(n){
    let numbers = [0,1];
    for (let i = 2; i <= n ; i++ ){
        numbers.push(numbers[i-2] + numbers[i-1]);
    }
    return numbers[n];
}

//10 wynik 55
//30, 832040