function create(words) {
   let $content = document.getElementById('content');
   let $newEl;
   let $newPara;

   words.forEach((element) => {
      $newEl = document.createElement('div');
      $newPara = document.createElement('p');
      $content.appendChild($newEl);
      $newEl.appendChild($newPara);
      $newPara.textContent = element;
      $newPara.style.display = "none";
   });

   let [...newDivs] = document.getElementsByTagName('div');
   newDivs.shift();

   newDivs.forEach((e, i) => {
      e.addEventListener('click', () => {
         let currentP = document.getElementsByTagName('p')[i]
         if (currentP.style.display === "none") {
            currentP.style.display = "block"
         }
      })
   })
}
