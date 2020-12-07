let submit = document.getElementById("submit");
let input = document.getElementById("user");
let nbRandom = Math.trunc(Math.random() * 100);
console.log(nbRandom);
let fleche = document.getElementById("arrow");
let use = document.getElementById("nbUse");

function createDiv(txt) {
    if (document.getElementById("div") === null) {
        let newDiv = document.createElement("div");
        newDiv.style.position = "absolute";
        newDiv.style.width = "100%";
        newDiv.style.height = "15vh";
        newDiv.style.top = "50%";
        newDiv.style.backgroundColor = "red"
        newDiv.style.zIndex = "2";
        newDiv.style.textAlign = "center";
        newDiv.style.color = "white";
        newDiv.style.padding = "10px";
        newDiv.style.fontSize = "2rem"
        newDiv.innerHTML = txt;
        newDiv.id = "div";
        let center = document.getElementById("center")
        center.appendChild(newDiv);
        return newDiv;
    }
}

function resetFunc(div, bool) {
    let reset = document.createElement("button");
    reset.style.width = "100%";
    reset.style.height = "30%";
    reset.style.backgroundColor = "white";
    reset.innerHTML = "RESET";
    reset.style.color = "blue";

    div.appendChild(reset);
    reset.addEventListener("click", function () {
        let use = document.getElementsByTagName("li");
        for (let i = use.length - 1; i > 0; i--) {
            use[i].remove()
        }
        use[0].innerHTML = "Nombre deja utilisé : <br>";
        div.remove();
        return reset;
    });

}

function affichage(x){
    if (x.matches){

    }
}

submit.addEventListener("click", function () {
    if (input.value.length > 0 && !isNaN(input.value) && (input.value > 0) && (input.value < 100)) {
        if (document.getElementsByTagName("li").length > 10) {
            let newDiv = createDiv("Perdu");
            if(newDiv !== undefined) {
                console.log(newDiv)
                let reset = resetFunc(newDiv);
            }
        } else if (input.value > nbRandom) {
            fleche.style.left = "50%"
            let newLi = document.createElement("li");
            newLi.innerHTML = input.value;
            use.appendChild(newLi);
        } else if (input.value < nbRandom) {
            fleche.style.left = "70%"
            let newLi = document.createElement("li");
            newLi.innerHTML = input.value;
            use.appendChild(newLi);
        } else {
            fleche.style.left = "30%";
            let newLi = document.createElement("li");
            newLi.innerHTML = input.value;
            use.appendChild(newLi);
            let newDiv = createDiv("GAGNE");
            let reset = resetFunc(newDiv);
            nbRandom = Math.trunc(Math.random() * 100);
            console.log(nbRandom);
        }

        console.log(document.getElementsByTagName("li").length);
    }

});
