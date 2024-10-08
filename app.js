let msg_container = document.querySelector(".msg_container");
let closing_msg = document.querySelector(".closing_msgs");
let count = 0;


const check_numb = (ans_numb) => {
    document.getElementById('submit-btn').addEventListener('click', () => {
        count++
        const inputValue = document.getElementById('quantity').value;
        
        if (inputValue === '') {
            alert('Please enter a number.');
        } else {
            const number = parseInt(inputValue);
            if (number >= 1 && number <= 100) {
                if(number>ans_numb){
                    alert("Go lower");
                   
                } else if(number==ans_numb){
                    showWinner();
                } else{
                    alert("Go higher");
                }
            } else {
                alert('Number must be between 1 and 100.');
            }
        }
    });
    
}

const showWinner = () => {
    console.log(`You guessed the number is ${count} chances.`);
    closing_msg.classList.add(count);
    closing_msg.classList.remove("hide");
    msg_container.classList.add("hide");


}

const Game_begins = () =>{
    document.getElementById("strt-btn").addEventListener("click",()=>{
        let ans_numb = Math.floor(Math.random() * 100)+1;
        console.log(ans_numb);
        msg_container.classList.remove("hide");
        closing_msg.classList.add("hide");
        check_numb(ans_numb);
       
    });
}


Game_begins();
