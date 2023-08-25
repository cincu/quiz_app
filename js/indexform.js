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
  });

  
  function create (question, answer, tags) {
    const bodyMain = document.querySelector('[data-js="main"]')
    const sectionToAppend = document.createElement('section')
   
    sectionToAppend.className = "section-card"
    
    const newTitle = document.createElement('h3')
    newTitle.textContent = ("question")

    const newAnswer = document.createElement('p')
    newAnswer.textContent = ("answer")

    const newTags = document.createElement('li')
    newTags.textContent = ("tags")

    newTitle.className = "section-card__title"
    newAnswer.className = "section-card__content"
    newTags.className = "section-card__hint"

    
    sectionToAppend.append(newTitle, newAnswer, newTags)
    bodyMain.append(sectionToAppend)
    
  };

