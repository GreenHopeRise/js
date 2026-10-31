function upperWord(x){
    let updatedSentence = ''
    let words = x.split(' ')


    for (let i = 0; i < words.length; i++) {
        let word = words[i]
        const capitalized = word[0].toUpperCase()+word.slice(1)
        updatedSentence += capitalized + ' '
        
        
    }
    return updatedSentence.trim()
}
console.log(upperWord('hi i am khalid'))