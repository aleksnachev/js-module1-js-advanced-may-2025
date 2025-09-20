class FlightBookingSystem{
    constructor(agencyName){
        this.agencyName = agencyName
        this.flights = []
        this.bookings = []
        this.bookingsCount = 0
    }
    addFlight (flightNumber, destination, departureTime, price){
        if (this.flights.hasOwnProperty(flightNumber)){
            return `Flight ${flightNumber} to ${destination} is already available.`
        }else {
            let newFlight = {
                destination,
                departureTime,
                price
            }
            this.flights[flightNumber] = newFlight
            return `Flight ${flightNumber} to ${destination} has been added to the system.`
        }
    }
    bookFlight (passengerName, flightNumber){
        if(!this.flights.hasOwnProperty(flightNumber)){
            return `Flight ${flightNumber} is not available for booking.`
        }else {
            this.bookingsCount+=1
            let newBooking = {
                passengerName,
                flightNumber
            }
            this.bookings[passengerName] = newBooking
            return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`
        }
    }
    cancelBooking (passengerName, flightNumber){
        if(!this.bookings.hasOwnProperty(passengerName)){
            throw new Error(`Booking for passenger ${passengerName} on flight ${flightNumber} not found.`)
        }else {
            let index = this.bookings.indexOf(passengerName)
            this.bookings.splice(index,1)
            return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`
        }
    }
    showBookings (criteria) {
        //"all" "cheap" "expensive"
        let message = ''
        if (this.bookings.length === 0){
            throw new Error(`No bookings have been made yet.`)
        }
        if (criteria === "all"){

            message += `All bookings(${bookingsCount}):`
            for (const book of this.bookings) {
                let bookValues = Object.values(book)
                message += `${bookValues[0]} booked for flight ${bookValues[1]}.`
            }

        }else if (criteria === "cheap"){


        }else if (criteria === "expensive"){


        }
        

    }
}

const system = new FlightBookingSystem("TravelWorld");
  console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
  console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
  console.log(system.bookFlight("Alice", "AA101"));
  console.log(system.bookFlight("Bob", "BB202"));
  console.log(system.showBookings("all"));


