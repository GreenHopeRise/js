function fibonaci(x){
    let a=0
    let b=1
    let result = []
    for (let i = 0; i < x; i++) {
        result.push(a)
        let next = a+b
        a=b
        b=next
        
    }
    return result
}

console.log(fibonaci(5))