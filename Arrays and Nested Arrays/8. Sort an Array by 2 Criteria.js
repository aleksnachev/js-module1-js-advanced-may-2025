function sorting (data){

    data.sort((a,b) => a.length - b.length || a.localeCompare(b))
    console.log(data.join("\n"));
    
}
sorting(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']

)