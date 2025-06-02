function calorie (arr){

    let obj = {}

    for (let i=0;i<arr.length;i++){
        let el = arr[i]
        if (i%2==0){
            
            obj.el
        }else {
            obj[arr[i-1]] = Number(el)
        }
    }
    console.log(obj);

}
calorie(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])