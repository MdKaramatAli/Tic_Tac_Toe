const box_value = document.querySelectorAll(".box");
const game_container = document.querySelector(".game_container");
const Restart = document.querySelector(".restart");
const info_box =  document.querySelector(".info");
const wining_pattens = [ 
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

let turn = 1;  
let value ;
box_value.forEach( (box) => {
   box.addEventListener("click",()=>
    {
        if(turn === 1)
        {
            value = "X";
            box.innerHTML = value;
            turn = 0;
        }
        else {
            value = "0";
            box.innerHTML = value;
            turn = 1;
        }
        box.disabled = true;

        //function to check winner
        check_winner();
    })
})


//checking Winner:::

const check_winner = () => {
    let c = 1;
    for(let pattern of wining_pattens)
    {
        let first_ele  = box_value[pattern[0]]. innerText;
        let middle_ele = box_value[pattern[1]]. innerText;
        let last_ele   = box_value[pattern[2]]. innerText;

        
        if(first_ele != "" && middle_ele !="" &&  last_ele != "")
        {
            c++;
            
            if(first_ele == middle_ele && middle_ele == last_ele )
            {
               
                if(value == "0") {
                    info_box.innerHTML = "Winner is :- 0";
                }
                else {
                    info_box.innerHTML = "Winner is :- x";
                }
                no_input();
            }
        }
    }
    if(c == box_value.length){
        info_box.innerHTML = " Match Draw ";
    }else{
        console.log(c , box_value.length );
    }

      



}
// no _input after winner;
const no_input = ( () =>{
    box_value.forEach( (box) => {
        // box.innerHTML = "";
        box.disabled = true;
    });
})

//   to clear the input of the box:: 

Restart.addEventListener("click", () =>{
    box_value.forEach( (box) => {
        box.innerHTML = "";
        box.disabled = false;
    });
    info_box.innerHTML = "";
    info_box.innerHTML = "Player 1 = x <br>Player 2 = 0";


})
