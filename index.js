// for(i=0;i<document.querySelectorAll("button").length;i++){
    

//     document.querySelectorAll("button")[i].addEventListener("click",function () {
//         var select=this.innerHTML;
//         switch (select) {
//             case "w":
//                 var audio=new Audio("sounds/crash.mp3");
//                 audio.play();
//                 break;
//             case "a":
//                 var audio=new Audio("sounds/kick-bass.mp3");
//                 audio.play();
//                 break;
//             case "s":
//                 var audio=new Audio("sounds/snare.mp3");
//                 audio.play();
//                 break;
//             case "d":
//                 var audio=new Audio("sounds/tom-1.mp3")
//                 audio.play();
//                 break;
//             case "j":
//                  var audio=new Audio("sounds/tom-2.mp3");
//                  audio.play();
//                  break;
//              case "k":
//                 var audio=new Audio("sounds/tom-3.mp3");
//                  audio.play();
//                 break;
//             case "l":
//                 var audio=new Audio("sounds/tom-4.mp3");
//                 audio.play();
//                 break;
        
//             default:
//                 console.log("select");
//                 break;
//         }
        
//     });
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

for(i=0;i<document.querySelectorAll("button").length;i++){

    document.querySelectorAll("button")[i].addEventListener("click",function () {

        if(this.innerHTML==="w"){
    var audio=new Audio("sounds/crash.mp3");
    audio.play();
}

else if(this.innerHTML==="a"){
    var audio=new Audio("sounds/kick-bass.mp3");
    audio.play();
}
else if(this.innerHTML==="s"){
    var audio=new Audio("sounds/snare.mp3");
    audio.play();
}
else if(this.innerHTML==="d"){
    var audio=new Audio("sounds/tom-1.mp3");
    audio.play();
}
else if(this.innerHTML==="j"){
    var audio=new Audio("sounds/tom-2.mp3");
    audio.play();
}
else if(this.innerHTML==="k"){
    var audio=new Audio("sounds/tom-3.mp3");
    audio.play();
}
else {
    var audio=new Audio("sounds/tom-4.mp3");
    audio.play();
}


    });
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////




    

    document.addEventListener("keypress",function (event) {
        var select=event.key;
        switch (select) {
            case "w":
                var audio=new Audio("sounds/crash.mp3");
                audio.play();
                break;
            case "a":
                var audio=new Audio("sounds/kick-bass.mp3");
                audio.play();
                break;
            case "s":
                var audio=new Audio("sounds/snare.mp3");
                audio.play();
                break;
            case "d":
                var audio=new Audio("sounds/tom-1.mp3")
                audio.play();
                break;
            case "j":
                 var audio=new Audio("sounds/tom-2.mp3");
                 audio.play();
                 break;
             case "k":
                var audio=new Audio("sounds/tom-3.mp3");
                 audio.play();
                break;
            case "l":
                var audio=new Audio("sounds/tom-4.mp3");
                audio.play();
                break;
        
            default:
                console.log("select");
                break;
        }
       
    });