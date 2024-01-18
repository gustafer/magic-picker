const array = []
const phrases = [
    "You should 100% go with:",
    "Thats easy:",
    "Say no more:",
    "Isn't that obvious?",
    "Absolutely choose:",
    "No doubt about it:",
    "It's a no-brainer:",
    "Without a doubt, go for:",
    "Clearly, opt for:",
    "Undoubtedly, pick:",
    "It's crystal clear:",
    "No second thoughts, go with:",
    "Easily, go for:",
    "There's no question, choose:",
    "Unquestionably, select:",
    "It's a clear choice:",
    "Am i supposed to laugh?:",
    "Without hesitation, opt for:",
    "It's as clear as day:",
    "There's no debate, go with:",
    "Certainly, choose:",
    "It's a sure thing:",
    "There's no alternative, go for:",
    "It's plain to see, select:",
    "It's obvious, go with:"
    // made with chatgpt lmao
]

const answerVisor = document.getElementById("answer-visor")
const list = document.getElementById("list")
const listTitle = document.getElementById("list-title")
const titleInput = document.getElementById("title-input")


function changeTitle() {
    listTitle.innerHTML = ''
    titleInputValue = titleInput.value

    const newTitle = document.createTextNode(titleInputValue);
    console.log(newTitle)

    listTitle.appendChild(newTitle);
}

function pushValue() {
    const inputValue = document.getElementById("add-option-input").value

    if (inputValue === '') {
        alert('you gotta add something to the input!')
    } else {
        array.push(inputValue)
        answerVisor.innerHTML = ''
        list.innerHTML = array.join(', ')
        document.getElementById("add-option-input").value = ''
    }
}


chooseRandom = () => {
    if (array.length > 0) {
        const getRandomPhrase = phrases[(Math.floor(Math.random() * phrases.length))]

        answerVisor.innerHTML = getRandomPhrase + ' ' + array[(Math.floor(Math.random() * array.length))]

        // uncomment this if you want to be able to only random pick once
        // isValueAdded = false;
    } else {
        alert('Please add options!')
    }
}

clearList = () => {
    if (array.length > 0) {
        array.splice(0, array.length)
        list.innerHTML = ''
        answerVisor.innerHTML = ''
    } else {
        alert('nothing to clear!')
    }
}

// OPTION: press enter on input to trigger button
const addOptionInput = document.getElementById("add-option-input")
const addOptionButton = document.getElementById("add-option-button")

// for addOptionInput
addOptionInput.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      addOptionButton.click();
      // Remove current option
    }
  });
// OPTION: press enter on input to trigger button
const changeTitleButton = document.getElementById("change-title-button")

titleInput.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      changeTitleButton.click();
      // Remove current option
    }
  });