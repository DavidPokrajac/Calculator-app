let secondInput = document.querySelectorAll("input[type='radio']");
let calcDisplay = document.querySelector("textarea");
let calcButtons = document.querySelector(".calculator__buttons");
let calcReset = document.querySelector(".calculator__reset");
let calcDelete = document.querySelector(".calculator__delete");
let calcEquals = document.querySelector(".calculator__equals");
let label = document.querySelector(".label");
let ball = document.querySelector(".ball");

Array.from(secondInput).forEach((input) => {
    input.addEventListener("change", changeTheme);
});

function changeTheme(event) {
    if (event.target.value === "theme-2") {
        document.body.className += " body--theme-two";
        calcDisplay.className += " calculator__display--theme-two";
        calcButtons.className += " calculator__buttons--theme-two";
        calcDelete.className += " calculator__delete--theme-two";
        calcReset.className += " calculator__reset--theme-two";
        calcEquals.className += " calculator__equals--theme-two";
        label.className += " label__--theme-two";
        ball.className += " ball__--theme-two";
    } else if (event.target.value === "theme-3") {
        document.body.className = document.body.className.replace(
            "two",
            "three"
        );
        calcDisplay.className = calcDisplay.className.replace("two", "three");
        calcButtons.className = calcButtons.className.replace("two", "three");
        calcDelete.className = calcDelete.className.replace("two", "three");
        calcReset.className = calcReset.className.replace("two", "three");
        calcEquals.className = calcEquals.className.replace("two", "three");
        label.className = label.className.replace("two", "three");
        ball.className = ball.className.replace("two", "three");
    } else if (event.target.value === "theme-1") {
        document.body.className = document.body.className.replace(
            "body--theme-two",
            ""
        );
        calcDisplay.className = calcDisplay.className.replace(
            " calculator__display--theme-two",
            ""
        );
        calcButtons.className = calcButtons.className.replace(
            " calculator__buttons--theme-two",
            ""
        );
        calcDelete.className = calcDelete.className.replace(
            " calculator__delete--theme-two",
            ""
        );
        calcReset.className = calcReset.className.replace(
            " calculator__reset--theme-two",
            ""
        );
        calcEquals.className = calcEquals.className.replace(
            " calculator__equals--theme-two",
            ""
        );
        label.className = label.className.replace(" label__--theme-two", "");
        ball.className = ball.className.replace(" ball__--theme-two", "");
    }
}
