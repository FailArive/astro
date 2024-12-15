
const products = document.querySelectorAll(".product")

window.filterProduct = function (value) {
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
        if(value.toUpperCase() == button.innerText.replace(/\s+/g, "").toUpperCase()){
            button.classList.add("activeb");
        }
        else{
            button.classList.remove("activeb");
        }
    });

    products.forEach((product) => {
        if(value == "all"){
            product.classList.remove("hide");
        }
        else{
            if(product.classList.contains(value)){
                product.classList.remove("hide");
            }
            else{
                product.classList.add("hide");
            }
        }
    });
}

window.onload = () => {
    filterProduct("all")
}