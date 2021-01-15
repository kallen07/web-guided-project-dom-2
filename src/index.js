
// 👉 TASK 1- Select the following elements from the DOM:
// A- BUTTONS
const launchButton = document.querySelector("#launchButton");
//console.log("launchButton", launchButton);

const confirmButton = document.querySelector('#confirmButton')
const cancelButton = document.querySelector('#cancelButton')
// B- MESSAGES
const successMessage = document.querySelector('.success')
const failureMessage = document.querySelector('.failure')
// C- MODAL
const modal = document.querySelector('.modal')

// window.onload = function() {
//     console.log("html done loading");
//     const launchButton = document.querySelector("#launchButton");
//     console.log("launchButton", launchButton);
// }

// window.onload = function() {
//     console.log("window.onload #2")
// }

// target.addEventListener()


// 👉 TASK 2- Demo handling click events on button#launchButton, using:
//  A- HTML inside index.html
//  B- The DOM's element.onclick attribute
//  C- element.addEventListener('click', callback)
launchButton.onclick = function() {
    console.log("in the js!");
}

function printEventListener(event) {
    console.log(event);
    console.log(`
        event target: ${event.target.nodeName}
        timestamp:    ${Math.floor(event.timeStamp/1000)}
        event type:   ${event.type}
        current target: ${event.currentTarget.nodeName}
    `)
    if (event.currentTarget.nodeName === "DIV") {
        event.stopPropagation();
    }
}
launchButton.addEventListener("click", printEventListener);


// 👉 TASK 3- Create a function that launches!
// It should open the confirmation modal.
// Add it as an event listener for click events on the launch button.

const openModal = (event) => {
    modal.classList.remove('off');
    successMessage.classList.add('off');
    failureMessage.classList.add('off');
}

launchButton.addEventListener('click', openModal);

// 👉 TASK 4- Create a function to confirm the launch.
// It should close the modal and display a success report.
// Add it as a listener for clicks on the confirmation button.

function successFunc(event) {
    successMessage.classList.remove('off');
    modal.classList.add('off');
};
confirmButton.addEventListener('click', successFunc);

// 👉 TASK 5- Create a function to cancel the launch.
// It should close the modal and display a failure report.
// Add it as a listener for clicks on the cancellation button.

cancelButton.addEventListener('click', (event) => {
    modal.classList.add('off');
    failureMessage.classList.remove('off');
});


// 👉 TASK 6- Create a function that closes the modal if
// the user hits the Escape key on their keyboard.
// Add it as an event listener for 'keydown' events on document.

function closeModal(event) {
    if (event.key === "Escape") {
      modal.classList.add("off");
    }
}
document.addEventListener("keydown", closeModal);


// 👉 TASK 7- Add to ALL ELEMENTS ON THE PAGE an event listener for click events.
// It should console.log the target 🎯 of the event.
// It should also console.log the CURRENT target 🧭 of the event.
// Play with stopPropagation and stopImmediatePropagation.

const htmlElems = Array.from(document.all);

htmlElems.forEach(function(elem) {
    elem.addEventListener("click", printEventListener);
});

// preventDefault()

function anchorEventListener(event) {
    event.preventDefault();
    console.log("prevented default!");
}

document.querySelector("a").addEventListener("click", anchorEventListener);


// 👉 TASK 8- [STRETCH] Create helper functions to make the code
// more readable in tasks 3, 4, 5, 6
// function openModal() {

// }

// function closeModal() {

// }

// function killReports() {

// }


// 👉 TASK 9- [STRETCH] Using the mouseover event on 'document',
// log to the console the X and Y coordinates
// of the mouse pointer, as it moves over the screen.
