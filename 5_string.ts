function reverseString(text){
    let textReversed = ""
    for(let i = text.length -1; i>= 0 ; i-- ){
        textReversed += text[i]
    }
    return textReversed
}
const originalString = "ABCDEFGH"
console.log(reverseString(originalString))