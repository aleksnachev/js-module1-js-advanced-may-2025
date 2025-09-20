class BikeRentalService{
    constructor(name,location){
        this.name = name
        this.location = location
        this.availableBikes = []
    }

    addBikes(bikes){
        let succesfullyAdded = ""
        for (const bike of bikes) {
            const [brand,quantity,price]= bike.split("-")
            let isItFound = false
            for (const el of this.availableBikes) {
                if (el.brand === brand){
                    isItFound = true
                    el.quantity+=quantity
                    if (price>el.price){
                        el.price = price
                    }
                    return
                }
            }

                if (!isItFound){
                    let newBike = {
                    brand,
                    quantity,
                    price
                    }
                    this.availableBikes.push(newBike)
                    if(!succesfullyAdded.includes(newBike.brand)){
                        succesfullyAdded += `${newBike.brand}, `
                    }
                }
        }
        return `Successfully added ${succesfullyAdded}`
    }
}
const rentalService = new BikeRentalService("MyBikes", "CityCenter");
console.log(rentalService.addBikes(["Mountain Bike-5-150", "City Bike-10-100", "Electric Bike-3-200", "Electric Bike-8-400"]));
