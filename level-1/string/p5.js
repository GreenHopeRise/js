function longWordFinder(x){
    let counter = 0;
    let words = x.split(' ')
    let word = ''
    for (let i = 0; i < words.length; i++) {
        const wordLength = words[i].length 
        if (wordLength>counter) {
            counter = wordLength
            word = words[i]

            
        }
        
    }
    return counter, word
}
console.log(longWordFinder('i am a begineerr for myself xxxxxxxxxxx'))