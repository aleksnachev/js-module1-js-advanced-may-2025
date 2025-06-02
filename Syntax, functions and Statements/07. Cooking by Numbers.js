function cooking (arg1, ...params){

    let num = Number(arg1)
    let opEnum = {
        "chop": (num) => num/2,
        "dice": (num) => Math.sqrt(num),
        "spice": (num) => num +1,
        "bake": (num) => num*3,
        "fillet": (num) => num*0.8
    }


    for (let operation of params){

       num = opEnum[operation](num)
       console.log(num);
       
    }

}
cooking('9', 'dice', 'spice', 'chop', 'bake', 'fillet')