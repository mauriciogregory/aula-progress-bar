var i = 0;
// var btn = document.querySelector("#btn");

function mover(){
    if(i ==0){
        i = 1;
        var elemento = document.getElementsByClassName("bar");
        var largura = 10;
        var classe = setInterval(frame, 100);
        function frame() {
            if(largura >= 100){
                clearInterval(classe);
                i = 0;
            } else {
                largura++;
                elemento.style.largura = largura + "%";
                elemento.namedItem = largura + "%";
            }
        }
    }
}

// btn.addEventListener('click', mover);