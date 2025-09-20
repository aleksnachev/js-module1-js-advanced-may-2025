window.addEventListener('load', solve);

function solve() {
    let firstNameRef = document.getElementById('first-name')
    let lastNameRef = document.getElementById('last-name')
    let fromDateRef = document.getElementById('from-date')
    let toDateRef = document.getElementById('to-date')

    let nextBtnRef = document.getElementById('next-btn')
    nextBtnRef.addEventListener('click',onNext)
    
    let vacationListRef = document.querySelector('.info-list')
    function onNext(event){
        event.preventDefault()
        if (
        firstNameRef.value.trim() === '' ||
        lastNameRef.value.trim() === '' ||
        fromDateRef.value === '' ||
        toDateRef.value === ''
        ) {
            return;
        }
        let firstInfo = [firstNameRef.value,lastNameRef.value,fromDateRef.value,toDateRef.value]
        
        if(fromDateRef.value>toDateRef.value){
            return
        }

        let vacationContentRef = document.createElement('li')
        vacationContentRef.classList = 'vacation-content'

        vacationListRef.appendChild(vacationContentRef)
        
        let article = document.createElement('article')
        vacationContentRef.appendChild(article)

        let h3 = document.createElement('h3')
        h3.textContent = `Name: ${firstNameRef.value.trim()} ${lastNameRef.value.trim()}`
        article.appendChild(h3)

        let p1 = document.createElement('p')
        p1.textContent =  `From date: ${fromDateRef.value}`
        article.appendChild(p1)

        let p2 = document.createElement('p')
        p2.textContent = `To date: ${toDateRef.value}`
        article.appendChild(p2)
        
        nextBtnRef.disabled = true

        let editBtnRef = document.createElement('button')
        editBtnRef.classList = 'edit-btn'
        editBtnRef.textContent = 'Edit'
        vacationContentRef.appendChild(editBtnRef)

        let continueBtnRef = document.createElement('button')
        continueBtnRef.classList = 'continue-btn'
        continueBtnRef.textContent = 'Continue'
        vacationContentRef.appendChild(continueBtnRef)

        editBtnRef.addEventListener('click',onEdit)
        continueBtnRef.addEventListener('click',onContinue)
        firstNameRef.value = ''
        lastNameRef.value = ''
        fromDateRef.value=''
        toDateRef.value = ''
        
        let confirmListRef = document.querySelector('.confirm-list')
        function onEdit(e){
            e.preventDefault()
            firstNameRef.value = firstInfo[0]
            lastNameRef.value = firstInfo[1]
            fromDateRef.value= firstInfo[2]
            toDateRef.value = firstInfo[3]
            vacationListRef.removeChild(vacationContentRef)
            nextBtnRef.disabled = false
            
        }

        function onContinue(e){
            e.preventDefault()
            //firstInfo
            //confirmListRef
            vacationListRef.removeChild(vacationContentRef)
            let confirmLiRef = document.createElement('li')
            confirmLiRef.classList = 'vacation-content'
            confirmListRef.appendChild(confirmLiRef)
            //
            let articleClone = article.cloneNode(true);
            confirmLiRef.appendChild(articleClone); 
            //
            //confirmLiRef.appendChild(article)
            
            let confirmBtnRef = document.createElement('button')
            confirmBtnRef.classList = 'confirm-btn'
            confirmBtnRef.textContent = 'Confirm'
            confirmLiRef.appendChild(confirmBtnRef)
            let cancelBtnRef = document.createElement('button')
            cancelBtnRef.classList = 'cancel-btn'
            cancelBtnRef.textContent = 'Cancel'
            confirmLiRef.appendChild(cancelBtnRef)

            confirmBtnRef.addEventListener('click',onConfirm)
            cancelBtnRef.addEventListener('click',onCancel)
            let statusRef = document.getElementById('status')
            function onConfirm(e){
                e.preventDefault()
                confirmListRef.removeChild(confirmLiRef)
                nextBtnRef.disabled = false
                statusRef.classList = 'vacation-confirmed'
                statusRef.textContent = 'Vacation Requested'
            }

            function onCancel(e){
                e.preventDefault()
                confirmListRef.removeChild(confirmLiRef)
                nextBtnRef.disabled = false
                statusRef.classList = 'vacation-cancelled'
                statusRef.textContent = 'Cancelled Vacation'
            }

            statusRef.addEventListener('click',onStatus)

            function onStatus(){
                window.location.reload();
            }
        }
    }

}


    
    
