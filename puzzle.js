const soundBtn = document.querySelector('.btn');
const hintBtn = document.querySelector(".hint")
const checkBtn = document.querySelector(".morseCode .check");
const puzzle2CheckBtn = document.querySelector(".puzzle2 .check");

const fieldIcon1 = document.querySelector(".morseCode .field-icon");
const fieldIcon2 = document.querySelector(".puzzle2 .field-icon");
const input = document.querySelector(".morseCode input");

const puzzle2Input = document.querySelector(".puzzle2 input");

const audio = new Audio("./assests/conanOST.mp3");

const first = document.querySelector('.first');
const second = document.querySelector(".second");
const third = document.querySelector(".third");
const fourth = document.querySelector(".fourth");

const morseCode = document.querySelector(".morseCode");
const puzzleArea = document.querySelector(".puzzleArea");
const morsePass = document.querySelector(".morsePass");

const indicator = document.querySelector(".morseCode .indicator");
const puzzle2Indicator = document.querySelector(".puzzle2 .indicator");

const puzzle2 = document.querySelector(".puzzle2");
const puzzlePage = document.querySelector(".puzzlePage");

const body = document.querySelector("body");

const exit = document.querySelector(".exit");

soundBtn.addEventListener("click", () => {
    const replace = document.querySelectorAll(".replace");
   
    puzzlePage.classList.remove("hide");

    replace.forEach(element => {
        element.classList.add("hide");
        element.classList.remove("cautionPage");
    });

    setTimeout(() => {
        first.classList.add("show");
    }, 100);
    setTimeout(() => {
        second.classList.add("show");
    }, 600);
    setTimeout(() => {
        third.classList.add("show");
    }, 1100);
   
    setTimeout(() => {
        fourth.classList.add("show");
        audio.currentTime = 0;
        audio.play();
        body.classList.add("background");
    }, 1900);

    setTimeout(() => {
        puzzleArea.classList.add("show");
    }, 2700);
})


hintBtn.addEventListener("click", () => {
    hidden.forEach(element => {
        element.classList.remove("hide");
    });
    
    replace.forEach(element => {
        element.classList.add("hide");
    });

})


checkBtn.addEventListener("click", () => {
    const userPass = document.querySelector("input").value;
    console.log(userPass);
    if(userPass === "13JUN23") {
        console.log("well done");
        indicator.innerHTML = "Well Done"
        indicator.classList.add("solved");
        indicator.classList.remove("wrong");
        const flash = setInterval(() => {
            indicator.classList.toggle("show");
        }, 500);
        setTimeout(() => {
            clearInterval(flash);
            morseCode.classList.remove("show", "morseCode");
            morseCode.classList.add("hide");
            puzzle2.classList.remove("hide");
           
        }, 5000);

        setTimeout(() => {
            puzzle2.classList.add("puzzle");
            puzzle2.classList.add("show");
        }, 6000);
    } else {
        console.log("try again");
        indicator.innerHTML = "Try again";
        indicator.classList.remove("solved");
        indicator.classList.add("wrong");
        const flash = setInterval(() => {
            indicator.classList.toggle("show");
        }, 500);
        setTimeout(() => {
            clearInterval(flash);
        }, 5000);
    }
})

fieldIcon1.addEventListener("click", () => {
    fieldIcon1.classList.toggle("fa-eye-slash");
    fieldIcon1.classList.toggle("fa-eye");
    
    if (input.type === "password") {
        input.type = "text";
    } else {
        input.type = "password";
    }
})

fieldIcon2.addEventListener("click", () => {
    fieldIcon2.classList.toggle("fa-eye-slash");
    fieldIcon2.classList.toggle("fa-eye");
    
    if (puzzle2Input.type === "password") {
        puzzle2Input.type = "text";
    } else {
        puzzle2Input.type = "password";
    }
})


puzzle2CheckBtn.addEventListener("click", () => {
    const userPass = puzzle2Input.value;
    console.log(userPass);
    if(userPass === "Geranium" || userPass === "geranium" || userPass === "GERANIUM") {
        console.log("well done");
        puzzle2Indicator.innerHTML = "Case Closed"
        puzzle2Indicator.classList.add("solved");
        puzzle2Indicator.classList.remove("wrong");
        const flash = setInterval(() => {
            puzzle2Indicator.classList.toggle("show");
        }, 500);
        setTimeout(() => {
            clearInterval(flash);
            puzzle2.classList.add("hide");
            puzzle2.classList.remove("puzzle");
            exit.classList.remove("hide");
           
        }, 5000);

        setTimeout(() => {
            exit.classList.add("show");
        }, 6000);

        setTimeout(() => {
            window.location.href = "./album.html";
        }, 10000);
    } else {
        console.log("try again");
        puzzle2Indicator.innerHTML = "Try again";
        puzzle2Indicator.classList.remove("solved");
        puzzle2Indicator.classList.add("wrong");
        const flash = setInterval(() => {
            puzzle2Indicator.classList.toggle("show");
        }, 500);
        setTimeout(() => {
            clearInterval(flash);
        }, 5000);
    }
})