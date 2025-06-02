function magic (data){

    for (let i=0;i<data.length;i++){

        let rowOne = 0
        let rowTwo = 0
        let colOne = 0
        let colTwo = 0

        data[i].forEach(el => rowOne +=el)
        data[i+1].forEach(el => rowTwo +=el)
        data.forEach(row => colOne += row[i])
        data.forEach(row => colTwo += row[i+1])

        if (rowOne !== rowTwo || colOne !== colTwo){
            console.log(false);
            return
            
        }
    }
    console.log(true);
    
}
magic ([[11, 32, 45],
 [21, 0, 1],
 [21, 1, 1]]
)
