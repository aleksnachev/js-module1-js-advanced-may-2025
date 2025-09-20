class Hotel{
    constructor(initialBudget){
        this.initialBudget = initialBudget
        this.roomAvailability = {}
        this.supplyStock = {}
    }

    restockSupplies(supplies) {
        let finalMessage = ''
        for (let supply of supplies) {
            let [supplyName,supplyQuantity,supplyTotalPrice] = supply.split(" ")
            supplyQuantity = Number(supplyQuantity)
            supplyTotalPrice = Number(supplyTotalPrice)
            

                if (this.supplyStock.hasOwnProperty(supplyName)){
                    this.supplyStock.supplyQuantity += supplyQuantity
                }else{
                    if (supplyTotalPrice<=this.initialBudget){
                        this.initialBudget -= supplyTotalPrice
                        let newSupply = {
                            supplyQuantity:supplyQuantity,
                            supplyTotalPrice:supplyTotalPrice
                        }

                        this.supplyStock[supplyName] = newSupply
                        finalMessage += `Successfully stocked ${supplyQuantity} ${supplyName}\n`
                    }else{
                        finalMessage+=`There was not enough money to restock ${supplyQuantity} ${supplyName}\n`
                    }
            }
        }
        return finalMessage.trim()
    }

    
    addRoomType(roomType, neededSupplies, pricePerNight) {
        let allSuplies = {}
        let message = ''
            for (const supply of neededSupplies) {
                let [supplyName,supplyQuantity] = supply.split(" ")
                supplyQuantity = Number(supplyQuantity)
                allSuplies[supplyName] = supplyQuantity
            }
            console.log(allSuplies);
            
        if (!this.roomAvailability.hasOwnProperty(roomType)){
            this.roomAvailability[roomType] = {
                neededSupplies: allSuplies,
                pricePerNight
            }
            message += `Great idea! Now with the ${roomType}, we have {number of room types} types of rooms available, any other ideas?`
        }else {
            return `The ${roomType} is already available in our hotel, try something different.`
        }
    }
}

let hotel = new Hotel(500);

console.log(hotel.restockSupplies(["Soap 100 50", "Towels 20 100", "Shampoo 50 75"]));

console.log(hotel.addRoomType("Deluxe Suite", ["Soap 5", "Towels 2"], 200));
console.log(hotel.addRoomType("Standard Room", ["Soap 2", "Towels 1"], 100));
console.log(hotel.addRoomType("Standard Room", ["Soap 2", "Towels 1"], 100));

