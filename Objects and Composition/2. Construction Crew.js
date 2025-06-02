function constructionCrew (obj){

    if (obj.dizziness == true){
        let neededWater = 0.1*obj.weight*obj.experience;
        let curLevel = obj.levelOfHydrated;
        let neededLevel = neededWater+curLevel;
        obj.levelOfHydrated = neededLevel;
        obj.dizziness = false;
    }

   
    return obj;
}
console.log(constructionCrew ({ weight: 120,
  experience: 20,
  levelOfHydrated: 200,
  dizziness: true }

))