function search() {
   let searchedElement = document.getElementById("searchText").value 
   let towns = document.querySelectorAll("ul li")
   let resul1t = document.getElementById("result")
   let arrTown = Array.from(towns)
   let counter = 0;
   for (const el of arrTown) {
      if (el.textContent.includes(searchedElement)){
         counter++
         el.style.fontWeight = "bold"
         el.style.textDecoration = "underline"
      }
   }
   
   resul1t.textContent = `${counter} matches found`
   
}
