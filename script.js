let textArea = document.querySelector(".calculator__display");
let numbers = document.querySelectorAll(".calculator__number");
let mathOperation = document.querySelectorAll(".calculator__math-operation");
let equalsTo = document.querySelector(".calculator__equals");
let result = "";
let isCalculated = false;

Array.from(numbers).forEach((number) => {
    number.addEventListener("click", displayNumber);
});

Array.from(mathOperation).forEach((operation) => {
    operation.addEventListener("click", displayOperator);
});

function displayNumber(event) {
    const target = event.target;

    if (
        (target.textContent === "0" && textArea.textContent === "") ||
        (target.textContent === "." && textArea.textContent === "")
    ) {
        return;
    }

    result += target.textContent;
    textArea.textContent += target.textContent;
}

function displayOperator(event) {
    const target = event.target;

    if (textArea.textContent === "") {
        return;
    }

    result += target.textContent;
    textArea.textContent += target.textContent;

    for (let i = 0; i < textArea.textContent.length; i++) {
        switch (textArea.textContent[i]) {
            case " ":
                textArea.textContent = textArea.textContent.replaceAll(" ", "");
                break;
            case "\n":
                textArea.textContent = textArea.textContent.replaceAll(
                    "\n",
                    ""
                );
                break;
        }
    }

    for (let i = 0; i < textArea.textContent.length; i++) {
        if (
            textArea.textContent[i] === target.textContent.trim() &&
            textArea.textContent[i - 1] === target.textContent.trim()
        ) {
            textArea.textContent = textArea.textContent.slice(
                0,
                textArea.textContent.length - 1
            );
            result = textArea.textContent;
        }
    }
}

equalsTo.addEventListener("click", () => {
    checkLastValue(textArea.textContent[textArea.textContent.length - 1]);
    textArea.textContent = eval(result);
    isCalculated = true;
});

function reset() {
    result = "";
    textArea.textContent = "";
    isCalculated = false;
}

function del() {
    if (!textArea.textContent || isCalculated) {
        return;
    }
    for (let i = 0; i < textArea.textContent.length; i++) {
        switch (textArea.textContent[i]) {
            case " ":
                textArea.textContent = textArea.textContent.replaceAll(" ", "");
                break;
            case "\n":
                textArea.textContent = textArea.textContent.replaceAll(
                    "\n",
                    ""
                );
                break;
        }
    }

    textArea.textContent = textArea.textContent.replace(
        textArea.textContent[textArea.textContent.length - 1],
        ""
    );
}

function checkLastValue(value) {
    if (
        value === "+" ||
        value === "-" ||
        value === "*" ||
        value === "/" ||
        value === "."
    ) {
        return;
    }
}
