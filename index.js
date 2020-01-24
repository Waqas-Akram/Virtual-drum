var x = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
document.getElementById("date").innerHTML = x.getDate()+" "+months[x.getMonth()]+","+x.getUTCFullYear();
var drm_btn = document.querySelectorAll(".btn").length;
for(var i=0;i<drm_btn;i++){
    document.querySelectorAll(".btn")[i].addEventListener("click" , function(){
        var buttonInnerhtml = this.innerHTML;
        makesound(buttonInnerhtml);
        makeAnimation(buttonInnerhtml);
    });
}
    document.addEventListener("keydown", function(event){
        makesound(event.key);
        makeAnimation(event.key);
    });
  
    function makesound(key){
        switch(key){
            case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
             tom1.play();
             break;
            case "a":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
            case "s":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;
            case "d":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;
            case "j":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;
            case "k":
                var kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;
            case "l":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;
                default:
                    console.log("nothing is done");
        }
    };
    function makeAnimation(currentKey){
        var activeButton = document.querySelector("." + currentKey);
        activeButton.classList.add("pressed");
        setTimeout(function(){
            activeButton.classList.remove("pressed");
        },100);
    }