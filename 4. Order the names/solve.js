function solve() {
    let button = document.querySelector('button');
    let listPosition = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's' , 't', 'u', 'v', 'w', 'z', 'y', 'z'];
    
    let handler = e => {
        let currentInput = document.querySelectorAll('input')[0];
        let firstLetter = currentInput.value[0].toLocaleLowerCase();
        let firstLetterIndex = listPosition.indexOf(firstLetter);
        let inputPosition  = document.querySelectorAll('li')[firstLetterIndex];
        if(inputPosition.innerHTML) {
            inputPosition.innerHTML +=  `, ` + currentInput.value;
        } else {
            inputPosition.innerHTML += currentInput.value;
        }
        currentInput.value = '';
    }

    button.addEventListener('click', handler);
}
