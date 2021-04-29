function solve() {
	let quizz = document.getElementById('quizzie');
	let sections = document.getElementsByTagName('section');
	let result = document.querySelector('.results-inner h1');

	let rightAnswers = ["onclick", "JSON.stringify()", "A programming API for HTML and XML documents"];
	let userAnswers = 0;
	let currentStep = 0;

	let handler = (e) => {
		if(e.target.className === 'answer-text') {
			sections[currentStep].style.display = 'none';
			let isAnswerCorrect = rightAnswers.includes(e.target.innerHTML);
			if(isAnswerCorrect){
				userAnswers++;
			}
			currentStep++;
			if(currentStep < rightAnswers.length) {
				sections[currentStep].style.display = 'block';
			}
			if(currentStep === rightAnswers.length){
				quizz.removeEventListener('click', handler)
				document.querySelector('#results').style.display = 'block';
				result.innerHTML = rightAnswers.length === userAnswers ?
				'You are recognized as top JS Fan' : `You have ${userAnswers} right answers`
			}
		}
	}
		quizz.addEventListener('click', handler)

}
