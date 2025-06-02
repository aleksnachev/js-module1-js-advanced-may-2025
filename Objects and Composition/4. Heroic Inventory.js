function heroicInventory(arr){

    let allHeroes = []

    for (const token of arr) {
        let [name,level,items] = token.split(" / ")
        level = Number(level)
        items = items ? items.split(", "): []
        
        
       allHeroes.push({name,level,items})
        
    }
    let JsonArr = JSON.stringify(allHeroes)
    console.log(JsonArr);
    
}
heroicInventory(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
)