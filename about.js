const accordition = document.querySelectorAll(".accordition-for-item")

accordition.forEach(function(FAQ){
    const button = FAQ.querySelector("button");
    button.addEventListener("click", function(){
        FAQ.classList.toggle("showing");
    });
});