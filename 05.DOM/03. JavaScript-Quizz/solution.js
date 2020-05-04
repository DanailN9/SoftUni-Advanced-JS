function solve() {
  
    let quizze = document.getElementById('quizzie');
    let sections = document.getElementsByTagName('section');
    let result = document.querySelector('.results-inner h1');

    let correctAnswer = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
    let usersAnswer = 0;
    let currentStep = 0;

    let handler = (e) => {

        if (e.target.className === 'answer-text') {
            console.log(e.target.innerHTML)

            sections[currentStep].style.display = 'none';

            if (correctAnswer.some(answer => answer === e.target.innerHTML)) {
                usersAnswer++;
            } 
            currentStep++;

            if (currentStep < correctAnswer.length) {
                sections[currentStep].style.display = 'block';
            }
            
            if (currentStep === correctAnswer.length) {
                quizze.removeEventListener('click', handler)
                document.querySelector('#results').style.display = 'block'
                result.innerHTML =  correctAnswer.length === usersAnswer ? 
                'You are recognized as top JavaScript fan!': `You have ${usersAnswer} right answers`;
            }
        }
        
    }

    quizze.addEventListener('click', handler)
}
