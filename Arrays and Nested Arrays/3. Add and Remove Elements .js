function solve (data){

    let num=1
    let res = []

    data.forEach(command => {
        command == "add"? res.push(num):res.pop()
        num++
        
    });
    let buff = res.length? res.join("\n"):"Empty"
    console.log(buff);
    
}
solve (['add', 
'add', 
'add', 
'add']
)