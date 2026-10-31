function factorial(x){
    let f = 1;
    for (let i = x; i > 0; i--) {
        f=f*i
        
    }
    return f
}
console.log(factorial(4))