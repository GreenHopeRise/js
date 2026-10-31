function primeChecker(x){
    if(x<2){
            return 'not prime'
        }
    for (let i = 2; i < Math.sqrt(x); i++) {
        
        if(x%i===0){
            return 'not prime'

        }
        
    }
    return 'prime'
}

console.log(primeChecker(8))
