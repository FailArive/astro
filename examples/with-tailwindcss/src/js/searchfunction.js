window.search = () =>{
    const searchBox = document.getElementById("search-item").value.toUpperCase();

    const storeitems = document.getElementById("productl")

    const product = document.querySelectorAll(".product")
    const pname = storeitems.getElementsByTagName("h2")

    for (var i= 0; i < pname.length; i++) {
        let match = product[i].getElementsByTagName('h2')[0];

        if(match){
            let textvalue = match.textContent || match.innerHTML

            if(textvalue.toUpperCase().indexOf(searchBox) > -1){
                product[i].style.display = "";
            }
            else{
                product[i].style.display = "none";
            }
        }
    }
}

