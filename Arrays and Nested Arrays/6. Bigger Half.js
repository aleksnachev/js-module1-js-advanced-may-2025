function bigger (arr){
    
    arr.sort((a,b) => a-b)
    let middle = Math.floor(arr.length/2)
    let result = arr.slice(middle)
    return result
}
console.log(bigger ([4, 7, 2, 5]))