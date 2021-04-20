const fizzbuzz = function(number){
    for(let n=1; n<=number; n++){
        if(n % 3 === 0){
            console.log("fizz")
        }
        else(n % 5 === 0){
            console.log("buzz")
        }
    }
}

fizzbuzz(28)