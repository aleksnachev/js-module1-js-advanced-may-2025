window.addEventListener("load", solve);

function solve() {
    const addActivityBtnRef = document.getElementById('add-activity')
    const activityTypeRef = document.getElementById('type')
    const intensityRef = document.getElementById('intensity')
    const caloriesBurnedRef = document.getElementById('calories')
    const durationMinutesRef = document.getElementById('duration')
    const dateRef = document.getElementById('date')

    addActivityBtnRef.addEventListener('click',onActivity)

    const previewActivity = document.getElementById('preview-activity')
    const activityTableRef = document.getElementById('activities-table')
    function onActivity(a){
      a.preventDefault()
      const firstInfo = []
        if (
          activityTypeRef.value === "" ||
          intensityRef.value === "" ||
          caloriesBurnedRef.value === "" ||
          durationMinutesRef.value === "" ||
          dateRef.value === ""
        ){
          return
        }

        const liRef = document.createElement('li')
        const articleRef = document.createElement('article')
        previewActivity.appendChild(liRef)
        liRef.appendChild(articleRef)

        const p1 = document.createElement('p')
        p1.textContent = `Activity: ${activityTypeRef.value}`
        articleRef.appendChild(p1)

        const p2 = document.createElement('p')
        p2.textContent = `Intensity: ${intensityRef.value}`
        articleRef.appendChild(p2)

        const p3 = document.createElement('p')
        p3.textContent = `Duration: ${durationMinutesRef.value} min.`
        articleRef.appendChild(p3)

        const p4 = document.createElement('p')
        p4.textContent = `Date: ${dateRef.value}`
        articleRef.appendChild(p4)

        const p5 = document.createElement('p')
        p5.textContent = `Calories: ${caloriesBurnedRef.value}`
        articleRef.appendChild(p5)

        firstInfo.push(activityTypeRef.value)
        firstInfo.push(intensityRef.value)
        firstInfo.push(caloriesBurnedRef.value)
        firstInfo.push(durationMinutesRef.value)
        firstInfo.push(dateRef.value)

        activityTypeRef.value = ''
        intensityRef.value = ''
        caloriesBurnedRef.value = ''
        durationMinutesRef.value = ''
        dateRef.value = ''
        addActivityBtnRef.disabled = true

        const btnContainerRef = document.createElement('div')
        btnContainerRef.classList = 'btn-container'
        previewActivity.appendChild(btnContainerRef)

        const editBtnRef = document.createElement('button')
        editBtnRef.classList = 'edit-btn'
        editBtnRef.textContent = 'Edit'
        btnContainerRef.appendChild(editBtnRef)

        const nextBtnRef = document.createElement('button')
        nextBtnRef.classList = 'next-btn'
        nextBtnRef.textContent = 'Next'
        btnContainerRef.appendChild(nextBtnRef)

        editBtnRef.addEventListener('click',onEdit)
        nextBtnRef.addEventListener('click',onNext)

        function onEdit(e){
          e.preventDefault()
          addActivityBtnRef.disabled = false
          
          activityTypeRef.value = firstInfo[0]
          intensityRef.value = firstInfo[1]
          caloriesBurnedRef.value = firstInfo[2]
          durationMinutesRef.value = firstInfo[3]
          dateRef.value = firstInfo[4]
          
          previewActivity.removeChild(liRef)
          previewActivity.removeChild(btnContainerRef)

        }

        function onNext(e){
          e.preventDefault()
          addActivityBtnRef.disabled = false
          previewActivity.removeChild(liRef)
          previewActivity.removeChild(btnContainerRef)

          const tr = document.createElement('tr')
          activityTableRef.appendChild(tr)

          const td1 = document.createElement('td')
          td1.classList = 'type-cell'
          td1.textContent = firstInfo[0]
          tr.appendChild(td1)

          const td2 = document.createElement('td')
          td2.classList = 'duration-cell'
          td2.textContent = firstInfo[3]
          tr.appendChild(td2)

          const td3 = document.createElement('td')
          td3.classList = 'calories-cell'
          td3.textContent = firstInfo[2]
          tr.appendChild(td3)

          const td4 = document.createElement('td')
          td4.classList = 'date-cell'
          td4.textContent = firstInfo[4]
          tr.appendChild(td4)

          const td5 = document.createElement('td')
          td5.classList = 'intensity-cell'
          td5.textContent = firstInfo[1]
          tr.appendChild(td5)

          const td6 = document.createElement('td')
          td6.classList = 'btn-ceil'
          tr.appendChild(td6)

          const deleteBtnRef = document.createElement('button')
          deleteBtnRef.classList = 'delete-btn'
          deleteBtnRef.textContent = 'Delete'
          td6.appendChild(deleteBtnRef)

          deleteBtnRef.addEventListener('click',onDelete)

          function onDelete(e){
            e.preventDefault()
            activityTableRef.removeChild(tr)
          }
        }
    }
}
