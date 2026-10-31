function reversed(str){
    let rev = '';
    for(let i=str.length-1;i>=0;i--){
        rev += str[i]
    }
    return rev
}
console.log(reversed('khalid'))


function rs(s){
    let reversed = '';
    for(let i=s.length-1;i>=0;i--){
        reversed += s[i]
    }
    return reversed
}
 console.log(rs('DeDs'))