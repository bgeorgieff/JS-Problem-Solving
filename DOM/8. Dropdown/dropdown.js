function addItem() {
    let newItemText = document.getElementById('newItemText');
    let newItemValue = document.getElementById('newItemValue');
    let dropDown = document.getElementById('menu');

    let newOption = document.createElement('option');
    newOption.textContent = (`${newItemText.value} - ${newItemValue.value}`)
    dropDown.appendChild(newOption)

    newItemText.value = '';
    newItemValue.value = '';
}
