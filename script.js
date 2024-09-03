let ratingButtons = document.querySelectorAll(".rating-button");
let submit = document.querySelector(`input[value="Submit"]`);
let selected;

function selecRatingButton(button, index) {
    ratingButtons.forEach(element => element.classList.remove('selected'));
    button.classList.add('selected');
    selected = index;
    
}

ratingButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        selecRatingButton(button, index);
    })
})

submit.addEventListener("click", ()=>{
    if(selected !== undefined){
        document.querySelector(".rating-section").style.display = "none";
        document.querySelector(".ty-section").style.display = "flex"
        document.querySelector("span").innerHTML = selected + 1;
    }
})

