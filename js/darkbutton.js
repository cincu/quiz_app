console.clear();


const darkButton = document.querySelector('[data-js="dark-button"]');
const bodyProfile = document.querySelector('[data-js="body"]');


darkButton.addEventListener('click', function (event) {
    event.preventDefault();
    bodyProfile.classList.toggle('dark')
    console.log('do you work')
});



// - if the body has the class "dark", the page is displayed in dark mode
// - query all 3 buttons with the 'data-js' attribute
// - add an event listener to each button:
//   - "switch to dark mode" button always adds the class "dark" to the body
//   - "switch to light mode" button always removes the class "dark" from the body
//   - "toggle mode" button toggles the class "dark" on the body

// Switch to the index.js file and find some light where there seems to be only darkness!
