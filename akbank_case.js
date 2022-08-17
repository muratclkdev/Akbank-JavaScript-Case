function oddishOrEvenish (p1) {
    if (!Number.isInteger(p1)) {
        return console.error(" fatal: Not an integer or empty")
    }
    let Snumber = p1.toString();
    let number = []
    let sum = 0

    for(let i = 0 ;i<Snumber.length;i++){
        number.push(Snumber.charAt(i))
    
    }
    
    for (let i = 0; i<number.length;i++) {
        sum += parseInt(number[i])
    }
    if  (sum % 2 === 0 ) {
        console.log(" Even")
    } else { console.log("Odd")}
}
// oddishOrEvenish(); Function call