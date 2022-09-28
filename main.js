let randomNr, buttonsQuantity;

function setValue() {
    buttonsQuantity = document.querySelector('input').value;
    if (isNaN(buttonsQuantity)) {
        alert("Please enter a number.");
    } else {
        randomNr = Math.ceil(Math.random() * buttonsQuantity);
        generateButtons();
    }
}

function generateButtons() {
    for (let i = 1; i <= buttonsQuantity; ++i) {
        let button = document.createElement("button");
        button.innerHTML = i;
        button.setAttribute("id", i);
        button.onclick = function() {checkButton(i)};
        document.getElementById("buttonsList").appendChild(button);
    }
}

function checkButton(id) {
    if (id == randomNr) {
        luckResult.innerHTML = "Winner!";
    } else {
        luckResult.innerHTML = "Try again!";
    }
    document.getElementById("quantity").disabled = true;
    for(let i = 1; i <= buttonsQuantity; ++i) {
        document.getElementById(i).disabled = true;
    }
}
