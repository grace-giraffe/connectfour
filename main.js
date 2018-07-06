var buttons = document.querySelectorAll("button"); 
console.log(buttons)
var currentPlayer= "red";

 function handleClick(event){
    var cell= event.target;
    var col=cell.className;
    var bcol=document.getElementsByClassName(col);
    console.log(bcol)
    for(let i=bcol.length-1;i>0;i--){
       if(!bcol[i].classList.contains("checker")){
            bcol[i].classList.add(currentPlayer,"checker");
            if(currentPlayer=="red"){
                currentPlayer="black"
            } else {
                currentPlayer="red"
            }
            break;
       }
    }
}
for(let i=0; i<buttons.length;i++){
    buttons[i].onclick=handleClick
}

