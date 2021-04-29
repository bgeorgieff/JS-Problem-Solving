function solve() {
   let addButton = [...document.querySelectorAll('button.add-product')];
   let addToTextArea = document.querySelector('textarea');
   let checkout = document.querySelectorAll('button.checkout')[0];
   let totalPrice = 0;
   let uniqueItems = []

   addButton.forEach((e, i) => {
      e.addEventListener('click', () => {
         let productName = document.querySelectorAll('div.product-title')[i];
         let productCost = document.querySelectorAll('div.product-line-price')[i];
         productCost = Number(productCost.textContent)
         addToTextArea.textContent += `Added ${productName.textContent} for ${productCost} to the cart.\n`;
         totalPrice += productCost;

         if(!uniqueItems.includes(productName.textContent)) {
            uniqueItems.push(productName.textContent)
         };
      });
   });

   let checkOutHandler = () => {
      if (uniqueItems.length <= 0) {
         alert('Your cart is empty')   
      } else {
      addToTextArea.textContent += `You bought ${uniqueItems.join(', ')} for ${totalPrice.toFixed(2)}.`;
      checkout.removeEventListener('click', checkOutHandler);
      }
   }

   checkout.addEventListener('click', checkOutHandler)
}
