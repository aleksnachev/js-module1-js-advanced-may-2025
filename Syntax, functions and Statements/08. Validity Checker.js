function checker (...data){

    let x1 = Number(data[0])
    let y1 = Number(data[1])
    let x2 = Number(data[2])
    let y2 = Number(data[3])

    function distanceChecker (x1,y1,x2,y2){
        let distanceX = x1-x2
        let distanceY = y1-y2
        return Math.sqrt(distanceX**2 + distanceY**2)
    }

    if (Number.isInteger(distanceChecker(x1,y1,0,0))){
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    }else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(distanceChecker(x2,y2,0,0))){
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
        
    }else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(distanceChecker(x1,y1,x2,y2))){
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    }else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}
checker (2, 1, 1, 1)
