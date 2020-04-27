// document.querySelector("button").addEventListener('click', handleClick);


//to listen for button click
for(var i=0;i<7;i++){
    document.querySelectorAll(".drum")[i].addEventListener('click',function(){
        playSound(this.innerHTML);
        buttonAnimation(this.innerHTML);
    });
}

function playSound(letter){
    switch(letter){
        case "w":
            let tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            let tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            let tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
      
        case "d":
            let tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;

        case "j":
            let snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "k":
            let crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "l":
            let kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        default:console.log(this.innerHTML);
    }
}


//detect keyboard press
document.addEventListener('keydown',function(event){
    playSound(event.key);
    buttonAnimation(event.key);
})

//animation
function buttonAnimation(currentKey){
    var btn = document.querySelector("."+currentKey);
    btn.classList.add("pressed");

    setTimeout(function(){
        btn.classList.remove("pressed");
    },100);
}