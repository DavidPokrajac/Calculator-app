document.addEventListener("DOMContentLoaded", () => {
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

    checkTheme();

    function checkTheme() {
        let [inputOne, inputTwo, inputThree] = Array.from(secondInput);
        let lastChecked = localStorage.getItem("input-last-checked");

        switch (lastChecked) {
            case "theme-1":
                themeChange(inputOne.value, "");
                break;
            case "theme-2":
                themeChange(inputTwo.value, "--theme-two");
                break;
            case "theme-3":
                themeChange(inputThree.value, "--theme-three");
                break;
            default:
                themeChange(inputOne.value, "");
                break;
        }
    }

    function themeChange(value, theme) {
        if (value === "theme-1") {
            document.body.className = "body";
            calcDisplay.className = "calculator__display";
            calcButtons.className = "calculator__buttons";
            calcDelete.className = "calculator__delete";
            calcReset.className = "calculator__reset";
            calcEquals.className = "calculator__equals";
            label.className = "label";
            ball.className = "ball";
        }
        if (value === "theme-2" || value === "theme-3") {
            document.body.className = "body body" + theme;
            calcDisplay.className =
                "calculator__display calculator__display" + theme;
            calcButtons.className =
                "calculator__buttons calculator__buttons" + theme;
            calcDelete.className =
                "calculator__delete calculator__delete" + theme;
            calcReset.className = "calculator__reset calculator__reset" + theme;
            calcEquals.className =
                "calculator__equals calculator__equals" + theme;
            label.className = "label label__" + theme;
            ball.className = "ball ball__" + theme;
        }
    }

    function changeTheme(event) {
        if (event.target.value === "theme-2") {
            themeChange(event.target.value, "--theme-two");
            localStorage.setItem("input-last-checked", "theme-2");
        } else if (event.target.value === "theme-3") {
            themeChange(event.target.value, "--theme-three");
            localStorage.setItem("input-last-checked", "theme-3");
        } else if (event.target.value === "theme-1") {
            themeChange(event.target.value, "");
            localStorage.setItem("input-last-checked", "theme-1");
        }
    }
});
