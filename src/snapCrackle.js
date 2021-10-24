function SnapCrackle(MaxValue) {
    
    let myArray = []
    for ( let contador = 1; contador <= MaxValue; contador++) {
        if (contador %2 !== 0 && contador % 5 === 0) {
        myArray.push(" SnapCrackle")
         
        }
        else if (contador %2 !== 0) {
        myArray.push(" Snap") 
        }
        else if (contador % 5 === 0) {
        myArray.push(" Crackle") 
        }else{
            myArray.push(contador)
        }
       
    }
    
    console.log(myArray.join(','))
}

console.log(SnapCrackle())