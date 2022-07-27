// mouseEnter 

let drums = document.querySelectorAll(".drum");

for (let i = 0; i < drums.length; i++) {

    drums[i].addEventListener("mouseenter", function () {
        let key = drums[i].innerHTML;

        makeSound(key);
        buttonAnimation(key);

    })
}

// keypress

document.addEventListener("keypress", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
})




function makeSound(key) {
    switch (key) {
        case 'W':
        case 'w':
            console.log();
            var audio = new Audio('sounds/crash.mp3');
            audio.play()
            break;
        case 'A':
        case 'a':
            console.log();
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play()

            break;
        case 'S':
        case 's':
            console.log();
            var audio = new Audio('sounds/snare.mp3');
            audio.play()
            break;
        case 'D':
        case 'd':
            console.log();
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play()

            break;
        case 'L':
        case 'l':
            console.log();
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play()

            break;
        case 'J':
        case 'j':
            console.log();
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play()

            break;
        case 'K':
        case 'k':
            console.log();
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play()

            break;

        default:
            break;
    }
}

function buttonAnimation(key) {
    let currentKey = document.querySelector("." + key);

    currentKey.classList.add("active");

    setTimeout(function () {
        currentKey.classList.remove("active");

    }, 500)
}