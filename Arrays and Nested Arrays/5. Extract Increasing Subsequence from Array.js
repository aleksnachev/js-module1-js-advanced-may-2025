function solve (data){

    return data.reduce((acc,el) => {
        if (!acc.length){
            acc.push(el)
        }else if (el >= acc[acc.length-1]){
            acc.push(el)
        }
        return acc
    }, [])

}
console.log(solve ([1, 
3, 
8, 
4, 
10, 
12, 
3, 
2, 
24]
))