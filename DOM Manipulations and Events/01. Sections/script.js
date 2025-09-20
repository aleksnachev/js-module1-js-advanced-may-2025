function create(words) {
   const contentRef = document.getElementById("content")

   for (let i=0;i<words.length;i++){

      const word = words[i]

      const divEl = document.createElement("div")
      const pEl = document.createElement("p")

      pEl.textContent = word
      pEl.style.display = "none"

      divEl.appendChild(pEl)
      divEl.addEventListener("click", onClick)
      contentRef.appendChild(divEl)
   }

    function onClick(event) {
      const currenTarget = event.currentTarget
      const children1 = currenTarget.children
      const pEl = children1[0]
      const visibleState = pEl.style.display
      pEl.style.display = visibleState === "none"? "block":"none";
   }

  
}