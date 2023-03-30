const choices = document.querySelector('.choices');
const choice = document.querySelector('.choice');
const stop = document.querySelector('.stop');

var num = 2;

choices.addEventListener('click', () => {
    if (num >= 4) {
        stop.innerText = "Only four options allowed"
    } else {
        const NewChoice = document.createElement("input");
        const label = document.createElement("label");
        num += 1;
        console.log(num)
        label.innerText = `Option ${num}`
        label.classList.add('labell')
        NewChoice.classList.add('inputt')
        choice.appendChild(label)
        choice.appendChild(NewChoice)
    }
});

console.log(num)