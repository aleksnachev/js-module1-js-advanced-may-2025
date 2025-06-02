function carFactory(obj){

    let newObj={
        model: obj.model
    }

    if (obj.power<=90){
        newObj.engine = { power: 90, volume: 1800 }
    }else if (obj.power <=120){
        newObj.engine = { power: 120, volume: 2400 }
    }else {
        newObj.engine = { power: 200, volume: 3500 }
    }

    if (obj.carriage == 'hatchback'){
        newObj.carriage = {type: 'hatchback', color: obj.color}
    }else if (obj.carriage == "coupe"){
        newObj.carriage = {type: 'coupe', color: obj.color}
    }
    
    if (obj.wheelsize %2 == 0){
        let newWheels = Math.floor(obj.wheelsize-1)
        newObj.wheels = [newWheels,newWheels,newWheels,newWheels]
    }else {
        let newWheels = Math.floor(obj.wheelsize)
        newObj.wheels = [newWheels,newWheels,newWheels,newWheels]
    }

    return newObj
    
}
carFactory ({ model: 'VW Golf II',
  power: 90,
  color: 'blue',
  carriage: 'hatchback',
  wheelsize: 14 }
)