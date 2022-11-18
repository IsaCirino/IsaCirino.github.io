let numberOfClick = 0;
let numberOneCreated = false;
let operationSelected = null;
let valueNumber1, valueNumber2;



// Função para Exibir o número selecionado 

function updateDisplay (buttonNumber){
   
    if (numberOfClick == 0) {
        display.innerText = buttonNumber;
    } else if (numberOfClick<8) {
        display.innerText += buttonNumber;
    } else {
        display.style.color = "#ff3764";
    }

    numberOfClick++

}


// Escutador de eventos do Botão C da Calculadora 
  clearButton.addEventListener("click", deleteDisplay);

// Função para limpar os valores/display
  function deleteDisplay () {
    display.innerText = 0;
    numberOfClick = 0;
    numberOneCreated = false;
}

plusButton.addEventListener("click", sum);
function sum() {
    // Number.parselnt(valor) ou + ou somente Number
    valueNumber1 = +display.innerText;

    display.style.color = "#fff";
    numberOneCreated = true;
    display.innerText = 0;
    numberOfClick = 0;
    operationSelected = "sum";
}

minusButton.addEventListener("click", subtraction)
function subtraction () {
    valueNumber1 = +display.innerText;

    display.style.color = "#fff";
    numberOneCreated = true;
    display.innerText = 0;
    numberOfClick = 0;
    operationSelected = "subtraction";
}

timesButton.addEventListener("click", multiplication)
function multiplication () {
    valueNumber1 = +display.innerText;

    display.style.color = "#fff";
    numberOneCreated = true;
    display.innerText = 0;
    numberOfClick = 0;
    operationSelected = "multiplication";
}

dividedButton.addEventListener("click", division)
function division () {
    valueNumber1 = +display.innerText;

    display.style.color = "#fff";
    numberOneCreated = true;
    display.innerText = 0;
    numberOfClick = 0;
    operationSelected = "division";
}

resultButton.addEventListener("click", result);
function result() {
    if (numberOneCreated == true) {
        valueNumber2 = +display.innerText;

        display.style.color = "#fff";

        if (operationSelected == "sum"){

            display.innerText = valueNumber1 + valueNumber2;

        } else if (operationSelected == "subtraction") {

            display.innerText = valueNumber1 - valueNumber2;

        } else if (operationSelected == "multiplication") {

            display.innerText = valueNumber1 * valueNumber2;

        } else if (operationSelected == "division") {

            display.innerText = valueNumber1 / valueNumber2;
        }
    }

}
    
