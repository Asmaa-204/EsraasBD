const fieldIcon = document.querySelector(".field-icon");
const input = document.querySelector("input");
const checkBtn = document.querySelector(".check");
const indicator = document.querySelector(".indicator");
const album = document.querySelector(".album");
const lock = document.querySelector(".lock");
const body = document.querySelector("body");

const first = document.querySelector('.first');
const second = document.querySelector(".second");
const third = document.querySelector(".third");

const audio = new Audio("./assests/romio.mp3");

fieldIcon.addEventListener("click", () => {
    fieldIcon.classList.toggle("fa-eye-slash");
    fieldIcon.classList.toggle("fa-eye");
    
    if (input.type === "password") {
        input.type = "text";
    } else {
        input.type = "password";
    }
})


audio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);

checkBtn.addEventListener("click", () => {
    const userPass = document.querySelector("input").value;
    console.log(userPass);
    if(userPass === "لا أبرح حتى أبلغ" || userPass === "لاأبرححتىأبلغ") {
        console.log("well done");
        indicator.innerHTML = "Well Done"
        indicator.classList.add("solved");
        indicator.classList.remove("hide");
        indicator.classList.remove("wrong");

        setTimeout(() => {
            lock.classList.add("hide");
            first.classList.remove("hide");
        }, 5000);

        setTimeout(() => {
            first.classList.add("show");
            first.classList.remove("hidden");
        }, 6000);
        setTimeout(() => {
            second.classList.remove("hide");
            first.classList.add("hide");
        }, 10000);
        
        
        setTimeout(() => {
            second.classList.add("show");
            second.classList.remove("hidden");

            audio.currentTime = 0;
            audio.play();
        }, 12000);
        setTimeout(() => {
            third.classList.remove("hide");
            second.classList.add("hide");
        }, 17000);
        
        
        setTimeout(() => {
            third.classList.add("show");
            third.classList.remove("hidden");
        }, 19000);
        setTimeout(() => {
            album.classList.remove("hide");
            third.classList.add("hide");
            album.classList.add("container");
            body.classList.remove("body1");
            body.classList.add("body2");
        }, 24000);

        setTimeout(() => {
            album.classList.add("show");
        }, 25000);
        

    } else {
        console.log("try again");
        indicator.innerHTML = "Try again";
        indicator.classList.remove("solved");
        indicator.classList.add("wrong");
        indicator.classList.remove("hide");
        const flash = setInterval(() => {
            indicator.classList.toggle("show");
        }, 500);
        setTimeout(() => {
            indicator.classList.add("hide");
        }, 5000);
    }
})
