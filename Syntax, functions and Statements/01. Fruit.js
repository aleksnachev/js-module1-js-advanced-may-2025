function fruit (typeFruit, weightGrams, pricePerKilogram){

    let kg = weightGrams/1000
    console.log(`I need $${(pricePerKilogram*kg).toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${typeFruit}.`);
    

}
fruit ('orange', 2500, 1.80)