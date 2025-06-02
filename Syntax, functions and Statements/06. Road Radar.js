function road (speed,area){
    
    

    let speedLimit = {
        "motorway" : 130,
        "interstate" : 90,
        "city" : 50,
        "residential" : 20
    }

    let curSpeed = Number(speed)
    if (speedLimit[area] < curSpeed){
        let diff = Math.abs(speedLimit[area] - curSpeed)
        console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speedLimit[area]} - ${calculateCurStatus(diff)}`);
        
    }else {
        console.log(`Driving ${curSpeed} km/h in a ${speedLimit[area]} zone`);
        
    }

    function calculateCurStatus(speedDiff){

        if (speedDiff<=20){
            return "speeding"
        }else if (speedDiff<=40){
            return "excessive speeding"
        }else {
            return "reckless driving"
        }
    }

}
road (40, 'city')