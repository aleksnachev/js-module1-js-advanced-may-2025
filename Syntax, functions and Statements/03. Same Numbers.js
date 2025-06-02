function solve (num){

    let numAsStr = num.toString()
    let firstNum = Number(numAsStr[0])
    let isIt = true
    let sum = firstNum
    for (let i=1; i<numAsStr.length; i++){
        let curNum = Number(numAsStr[i])
        if (curNum!= firstNum){
            isIt = false;
            
        }
        sum += curNum
    }
   console.log(isIt);
   console.log(sum);
   
   

}
solve (2222222)