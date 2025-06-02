function cities (arr){

    let result = {}

    for (let row of arr) {
        let [town,product,price]= row.split(" | ")
        price = Number(price)

        if (!result.hasOwnProperty(product)){
            result[product] = {town,price}
        }

        if (price < result[product].price){
            result[product].town = town
            result[product].price = price
        }
    }

    for (let [key,value] of Object.entries(result)) {
        
        console.log(`${key} -> ${value.price} (${value.town})`);
        
    }

}
cities (['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
)