function solve() {
    const sections = document.querySelectorAll('section');
    const result = document.getElementsByClassName('results-inner')[0].children[0];
    let answers = 0;

    sections.forEach(el => {
      el.addEventListener('click', operations);
    })

    function operations(e) {
      if (e.target.textContent === 'onclick' || e.target.textContent === 'JSON.stringify()' || e.target.textContent === 'A programming API for HTML and XML documents') {
        answers += 1;    
      }

      if (e.target.className  === 'answer-text') {
        e.currentTarget.style.display = 'none';
        e.currentTarget.nextElementSibling.style.display = 'block';
      }

      if (answers === 3) {
        result.textContent = "You are recognized as top JavaScript fan!";
      } else {
        result.textContent = `You have ${answers} right answers`;
      }
    }
}
