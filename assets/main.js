const buttons = document.getElementsByClassName("open_model");
console.log(buttons)
for(const button of buttons )  { 
    console.log(button)
    button.addEventListener("click", function() {
        document.getElementsByClassName("modal_wrapper").classList.add("open");
    });
    };

