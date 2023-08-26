  //form submit:
  console.clear();

  const form = document.querySelector('[data-js="add-form"]');
  
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log('data', data);
    create();
    form.reset();
    event.target.elements.question.focus();
    alert('thanks for the contribution!');
  });

  
  function create (question, answer, tags) {
    const bodyMain = document.querySelector('[data-js="main"]')
    const sectionToAppend = document.createElement('section')
   
    sectionToAppend.className = "section-card"
    
    const newTitle = document.createElement('h3')
    newTitle.textContent = `new question: ${form.question.value}`

    const newAnswer = document.createElement('p')
    newAnswer.textContent = `new answer: ${form.answer.value}`

    const newTags = document.createElement('li')
    newTags.textContent = `new tags: ${form.tags.value}`
    
    newTitle.className = "section-card__title"
    newAnswer.className = "section-card__content"
    newTags.className = "section-card__hint"

    
    sectionToAppend.append(newTitle, newAnswer, newTags)
    bodyMain.append(sectionToAppend)
  };

  //challenge4:
const questionCharCount = document.querySelector('[data-js="text-input"]');
const charCount = document.querySelector('[data-js="charCount"]');
const maxLength = questionCharCount.getAttribute('maxlength');

questionCharCount.addEventListener('input', updateCharCount);

function updateCharCount () {
  const currentLength = questionCharCount.value.length
  const charLeft = maxLength - currentLength
  charCount.textContent = `Characters left: ${charLeft}`
}

questionCharCount.addEventListener('input', updateCharCount);

