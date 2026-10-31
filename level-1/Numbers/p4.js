function sumDigits(x){
    let sum=0
    while (x>0) {
        let digit = x%10
        sum = sum+digit
        x=Math.floor(x/10)
        
    }
    return sum
}
console.log(sumDigits(567))