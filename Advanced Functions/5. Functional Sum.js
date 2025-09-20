function add(num){

    let state =0
    state+=num
    function sum(num){
        state+=num
        return sum
    }
    sum.toString = ()=>state
    return sum
}
