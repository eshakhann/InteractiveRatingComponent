const ratingButtons = document.querySelectorAll(".rating-btn");
const submitBtn = document.querySelector(".submit-btn");

let selectedRating = null;

const card = document.querySelector(".card");
const thankYouCard = document.querySelector(".thank-you-card");
const selectedRatingText = document.getElementById("selected-rating");

ratingButtons.forEach(function(button){
    button.addEventListener("click", function(){
        ratingButtons.forEach(btn => {
            btn.classList.remove("active");
        });
        button.classList.add("active");
        selectedRating = button.textContent;
        console.log(selectedRating);
    });
});

submitBtn.addEventListener("click", function () {
    if (selectedRating === null) {
    alert("Please select a rating.");
    return;
    }
    document.querySelector(".card").style.display = "none";
       
    document.querySelector(".thank-you-card").style.display = "block";

    document.getElementById("selected-rating").textContent =
    `You selected ${selectedRating} out of 5`;
});
