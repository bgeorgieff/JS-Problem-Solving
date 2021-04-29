function notify(message) {
    let innerText = message;
    let timedDiv = document.getElementById('notification');
    timedDiv.textContent = innerText;
    timedDiv.style.display = 'block'
    setTimeout(function() {
        timedDiv.style.display = 'none';
    }, 2000)

}

// let reverseDate = () => {
//     let date = '04/2/20';
//     console.log(date.split('/').sort((a, b) => b - a).join('-'));
// }

// reverseDate()
