function sorting (data){

    data.sort((a,b)=>a-b)
    let result = []

    while(data.length){
        result.push(data.shift())
        if (data.length){
            result.push(data.pop())
        }
    }
    return result
}
console.log(sorting([1, 65, 3, 52, 48, 63, 31, -3, 18, 56,29]));
