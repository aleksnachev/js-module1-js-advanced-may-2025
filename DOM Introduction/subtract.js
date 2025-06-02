function subtract() {
    let firstNumAsString = document.getElementById("firstNumber").value
    let firstNumAsNum = Number(firstNumAsString)
    let secondNumAsString = document.getElementById("secondNumber").value
    let secondNumAsNum = Number(secondNumAsString)

    let result= firstNumAsNum - secondNumAsNum

    document.getElementById("result").textContent = result
}