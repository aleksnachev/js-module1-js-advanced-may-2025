function solve() {
    let textAreaRef = document.getElementById("input")
    let resRef = document.getElementById("output")
    let incomeTex = textAreaRef.value.split(".").filter(e => e.length>0)

    for (let i=0;i<incomeTex.length; i+=3){
      let result = []

      for (let x=0;x<3;x++){
        if (!incomeTex[i+x]){
          break
        }
        result.push(incomeTex[i+x])
      }
      let buff = result.join(".") + "."
      resRef.innerHTML += `<p>${buff.trim()}</p>`
    }
    
}