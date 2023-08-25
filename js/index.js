// like button:

console.clear();
function bookmarkButtonClick(event) {
    const buttonElement = event.target;
    buttonElement.classList.toggle("section-card__liked");
  }
  
  const likeButton = document.querySelector('[data-js="like-button"]');

  likeButton.addEventListener("click", bookmarkButtonClick);

//the answer button:

  const answerButton = document.querySelector('[data-js="answer-button"]');
  
  function checkAnswerClick(event) {
    const answer = document.querySelector('[data-js="answer"]');
    const isActive = event.target.classList.contains("active")
    answer.classList.toggle("section-card__answer");
    if (isActive) {
      event.target.classList.remove("active")
      event.target.textContent = "check the answer"
    } else {
      event.target.classList.add("active")
      event.target.textContent = "hide the answer"
    }
  }
  answerButton.addEventListener("click", checkAnswerClick);
 

  
