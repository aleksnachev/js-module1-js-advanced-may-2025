function argumentInfo (...args){

    let result = {}

    for (const el of args) {
        let type = typeof(el)

        console.log(`${type}: ${el}`)
        
        if (!result.hasOwnProperty(type)){
            result[type]= 0
        }
        result [type] +=1
        
    }
    let resultAsArr = Object.entries(result)

    resultAsArr.sort(([keyA, valueA],[keyB,valueB]) => valueB-valueA)

    for (const el of resultAsArr) {
        console.log(`${el[0]} = ${el[1]}`);
        
    }
}