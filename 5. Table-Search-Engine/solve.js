function solve() {
   let inputSelection = document.querySelectorAll('tbody tr');
   let searchButton = document.getElementById('searchBtn');

   let handler = e => {
      let searchInput = document.getElementById('searchField');
      
      inputSelection.forEach((e) => {
         let inputValues = e.innerText.replace(/\s/g, "");

         if (inputValues.toLowerCase().indexOf(searchInput.value) > -1) {
            e.classList.add('select');
         }
      })
      searchInput.value = "";
   };
   searchButton.addEventListener('click', handler);
}
