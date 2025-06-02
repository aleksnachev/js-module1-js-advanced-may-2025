function previousDay (year,month,day){

    
    let secDate = new Date(year,month-1,day-1)

    console.log(`${secDate.getFullYear()}-${secDate.getMonth() + 1}-${secDate.getDate()}`);
    
}