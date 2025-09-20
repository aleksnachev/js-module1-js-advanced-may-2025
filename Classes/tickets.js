function traveling(arr,description){

    let finalArr = []
    class Ticket {
        destination;
        price;
        status;
        constructor(destination,price,status){
            this.destination=destination
            this.price = price
            this.status = status
        }
    }

    for (const el of arr) {
        const [destination,price,status] = el.split("|")
        let newTicket = new Ticket (destination,Number(price),status)
        finalArr.push(newTicket)
        
    }
    console.log(finalArr);
    

}
traveling (['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination')