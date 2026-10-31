function reversed(word){
    let revWord= ''
    for (let i = word.length-1; i >= 0; i--) {
        revWord += word[i];
        

    }
    if(word===revWord){
        console.log('palindrome')
    }else{
        console.log('not palindrome')
    }
    
}

reversed('madam')
reversed('boss')