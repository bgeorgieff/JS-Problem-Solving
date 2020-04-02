function solve() {

   let sendButton = document.getElementById('send');
   let textArea = document.getElementById('chat_input');
   let messagesField = document.getElementById('chat_messages');

   sendButton.addEventListener('click', (e) => {
      let newEl = document.createElement('div');
      newEl.innerHTML = textArea.value;

      newEl.classList.add('message', 'my-message');
      messagesField.appendChild(newEl);
      textArea.value = '';
   })
}
