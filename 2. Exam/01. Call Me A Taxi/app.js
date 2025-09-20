window.addEventListener('load', solve);

function solve() {

    const pickupLocationRef = document.getElementById('pick-up-location')
    const dropOffLocationRef = document.getElementById('drop-off-location')
    const passengerNumRef = document.getElementById('number-of-passengers')
    const timeForRef = document.getElementById('date-time')
    const typeTaxiRef = document.getElementById('taxi-type')

    const orderInfoRef = document.querySelector('.order-info-list')

    const orderBtnRef = document.getElementById('order-btn')
    orderBtnRef.addEventListener('click',onOrder)

    const confirmOrderRef = document.querySelector('.confirm-order-list')
function onOrder(e){
    e.preventDefault()
    if (
        pickupLocationRef.value === '' ||
        dropOffLocationRef.value === '' ||
        passengerNumRef.value === '' ||
        timeForRef.value === '' ||
        typeTaxiRef.value === ''
    ){
        return
    }
    orderBtnRef.disabled = true

    let firstInfo = []

    const liRef = document.createElement('li')
    liRef.classList = 'order-content'
    orderInfoRef.appendChild(liRef)

    const articleRef = document.createElement('article')
    liRef.appendChild(articleRef)

    const h3OneRef = document.createElement('h3')
    h3OneRef.textContent = `Pick From: ${pickupLocationRef.value.trim()}`
    articleRef.appendChild(h3OneRef)
    firstInfo.push(pickupLocationRef.value)

    const h3TwoRef = document.createElement('h3')
    h3TwoRef.textContent = `Drop-Off: ${dropOffLocationRef.value.trim()}`
    articleRef.appendChild(h3TwoRef)
    firstInfo.push(dropOffLocationRef.value.trim())

    const p1 = document.createElement('p')
    p1.textContent = `Passengers: ${passengerNumRef.value}`
    articleRef.appendChild(p1)
    firstInfo.push(passengerNumRef.value)

    const p2 = document.createElement('p')
    p2.textContent = `Time: ${timeForRef.value}`
    articleRef.appendChild(p2)
    firstInfo.push(timeForRef.value)

    const p3 = document.createElement('p')
    p3.textContent = `Type: ${typeTaxiRef.value}`
    articleRef.appendChild(p3)
    firstInfo.push(typeTaxiRef.value)

    pickupLocationRef.value = ''
    dropOffLocationRef.value = ''
    passengerNumRef.value = ''
    timeForRef.value = ''
    typeTaxiRef.value = ''

    const divRef = document.createElement('div')
    divRef.classList = 'btn-wrapper'
    liRef.appendChild(divRef)

    const editBtnRef = document.createElement('button')
    editBtnRef.classList = 'edit-btn'
    editBtnRef.textContent = 'Edit'
    divRef.appendChild(editBtnRef)

    const continueBtnRef = document.createElement('button')
    continueBtnRef.classList = 'continue-btn'
    continueBtnRef.textContent = 'Continue'
    divRef.appendChild(continueBtnRef)

    editBtnRef.addEventListener('click',onEdit)
    continueBtnRef.addEventListener('click',onContinue)

    function onEdit(e){
        e.preventDefault()
        pickupLocationRef.value = firstInfo[0]
        dropOffLocationRef.value = firstInfo[1]
        passengerNumRef.value = firstInfo[2]
        timeForRef.value = firstInfo[3]
        typeTaxiRef.value = firstInfo[4]

        orderInfoRef.removeChild(liRef)

        orderBtnRef.disabled = false

    }

    function onContinue(e){
        e.preventDefault()
        orderInfoRef.removeChild(liRef)

        const newLiRef = document.createElement('li')
        newLiRef.classList = 'order-content'

        confirmOrderRef.appendChild(newLiRef)
        newLiRef.appendChild(articleRef)

        const newDivRef = document.createElement('div')
        newDivRef.classList = 'btn-wrapper'
        newLiRef.appendChild(newDivRef)

        const cancelBtnRef = document.createElement('button')
        cancelBtnRef.classList = 'cancel-btn'
        cancelBtnRef.textContent = 'Cancel'
        newDivRef.appendChild(cancelBtnRef)

        const confirmBtnRef = document.createElement('button')
        confirmBtnRef.classList = 'confirm-btn'
        confirmBtnRef.textContent = 'Confirm'
        newDivRef.appendChild(confirmBtnRef)

        cancelBtnRef.addEventListener('click',onCancel)
        confirmBtnRef.addEventListener('click',onConfirm)

        const status = document.getElementById('status')
        function onCancel(e){
            e.preventDefault()
            confirmOrderRef.removeChild(newLiRef)
            orderBtnRef.disabled = false

            status.classList = 'taxi-not-complete'
            status.textContent = "Taxi request was not completed."
        }

        function onConfirm(e){
            e.preventDefault()
            confirmOrderRef.removeChild(newLiRef)
            orderBtnRef.disabled = false

            status.classList = 'taxi-ordered'
            status.textContent = 'Taxi has been successfully ordered.'
        }
        status.addEventListener('click',onStatus)

        function onStatus(e){
            e.preventDefault()
            window.location.reload();
        }
    }
}
}



    
    
