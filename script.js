let boxes = document.querySelectorAll(".cells");
let resetbtn = document.querySelector(".resetbtn");
let messgecontainer=document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let newgame=document.querySelector('.newgame');

let turno = true;

const winning = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8]
];

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        console.log("box was clicked")
     if(turno){
        box.innerText="o";
        turno=false;
     }else{
        box.innerText="x";
        turno=true;
     }
     box.disabled=true;
     checkwinner();
    });
});


const checkwinner = ()=>{
    for(let pattern of winning){
        let pos1=boxes[pattern[0]].innerHTML;
        let pos2=boxes[pattern[1]].innerHTML;
        let pos3=boxes[pattern[2]].innerHTML;

        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1 === pos2 && pos2 === pos3){
                showWinner(pos1);
            }
        }
    }
}

const disabledbox=()=>{
    for(let box of boxes){
        box.disabled=true;
    };
};

const enabledbox=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerHTML="";
    };
};

const showWinner=(win)=>{
    msg.innerText = `congratulation, winner is ${win}`;
    messgecontainer.classList.remove("hide")
    disabledbox();
}

const resetgame = ()=>{
    turno = true;
    enabledbox();
    messgecontainer.classList.add("hide")
}

resetbtn.addEventListener('click',resetgame);
newgame.addEventListener('click',resetgame);