window.addEventListener("load", solve);

function solve() {
    let buttonRef = document.getElementById('purchase-btn')
    let butonClick = buttonRef.addEventListener('click', onClick)
    let ulRef = document.getElementById('ticket-preview')
    
    function onClick(e){
        e.preventDefault()
        let nowInfo = []
        
        let counterTickets = Number(document.getElementById('num-tickets').value)
        let seatingPreference = document.getElementById('seating-preference').value
        let name = document.getElementById('full-name').value
        let email = document.getElementById('email').value
        let phoneNumber = Number(document.getElementById('phone-number').value)

        let li = document.createElement('li')
        li.classList = 'ticket-purchase'
        ulRef.appendChild(li)

        let p1 = document.createElement('p')
        p1.textContent = `Count: ${counterTickets}`
        li.appendChild(p1)
        document.getElementById('num-tickets').value =""

        let p2 = document.createElement('p')
        p2.textContent = `Preference: ${seatingPreference}`
        li.appendChild(p2)
        document.getElementById('seating-preference').value =""

        let p3 = document.createElement('p')
        p3.textContent = `To: ${name}`
        li.appendChild(p3)
        document.getElementById('full-name').value=""

        let p4 = document.createElement('p')
        p4.textContent = `Email: ${email}`
        li.appendChild(p4)
        document.getElementById('email').value=""

        let p5 = document.createElement('p')
        p5.textContent = `Phone Number: ${phoneNumber}`
        li.appendChild(p5)
        document.getElementById('phone-number').value=""

        buttonRef.disabled = true
        
        let div1 = document.createElement('div')
        div1.classList = "btn-container"
        li.appendChild(div1)

         editButton = document.createElement('button')
        editButton.classList = "edit-btn"
        editButton.textContent = "Edit"
        div1.appendChild(editButton)
        
         nextButton = document.createElement('button')
        nextButton.classList = "next-btn"
        nextButton.textContent = "Next"
        div1.appendChild(nextButton)

        editButton.addEventListener('click', onEdit)
        nextButton.addEventListener('click',onNext)

        function onEdit(w){
            w.preventDefault()
            document.getElementById('num-tickets').value = counterTickets
            document.getElementById('seating-preference').value = seatingPreference
            document.getElementById('full-name').value = name
            document.getElementById('email').value= email
            document.getElementById('phone-number').value=phoneNumber

            ulRef.removeChild(li)
            buttonRef.disabled = false
            
        }

        function onNext(a){
            a.preventDefault()
            ulRef.textContent =""
            let ticketPurchase = document.getElementById('ticket-purchase')

            let li2 = document.createElement("li")
            li2.classList = 'ticket-purchase'

            li2.appendChild(p1)
            li2.appendChild(p2)
            li2.appendChild(p3)
            li2.appendChild(p4)
            li2.appendChild(p5)
            ticketPurchase.appendChild(li2)

            let buyBtn = document.createElement('button')
            buyBtn.textContent = 'Buy'
            buyBtn.classList = 'buy-btn'

            li2.appendChild(buyBtn)

            buyBtn.addEventListener('click',onBuy)

            function onBuy(b){
                b.preventDefault()
                ticketPurchase.removeChild(li2)
                let h2El = document.createElement('h2')
                h2El.textContent = "Thank you for your purchase!"
                let endDiv = document.querySelector(".bottom-content")
                endDiv.appendChild(h2El)

                let backBtn = document.createElement('button')
                backBtn.classList = 'back-btn'
                backBtn.textContent = 'Back'

                endDiv.appendChild(backBtn)

                backBtn.addEventListener('click',onBack)

                function onBack(){
                    endDiv.removeChild(h2El)
                    endDiv.removeChild(backBtn)
                    buttonRef.disabled = false
                }
            }
        }
    }

    
}
