function generateReport() {
    let tableHeaderRef = document.querySelectorAll("thead tr th")
    let tableRowRef = document.querySelectorAll("tbody tr")
    let textAreaRef = document.getElementById("output")

    let headerToDisplay = new Map()
    let tableHeaderArr = Array.from(tableHeaderRef)

    for (let i =0;i<tableHeaderArr.length;i++){
        let th = tableHeaderArr[i]
        let isChecked = th.querySelector("input").checked

        if (isChecked){
            let text = th.textContent.trim()
            headerToDisplay.set(i,text.toLowerCase())
        }
    }
    let result = []
    tableRowRef.forEach (row => {
        let rowData=  {}
        headerToDisplay.forEach((k,v) =>{
            let currentRowText = row.cells[v].textContent
            rowData[k] = currentRowText
        })
        result.push(rowData)
    })

    textAreaRef.value = JSON.stringify(result)
}