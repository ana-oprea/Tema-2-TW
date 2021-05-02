function create(){
    let lab = document.createElement("LABEL");
    let inp;

    if (contor == 1){
        lab.innerText = "First Name:";
        inp = document.createElement("INPUT");
        inp.id = "input" + contor;
        inp.setAttribute("type", "text");
        document.querySelector("form").appendChild(lab);
        document.querySelector("form").appendChild(inp);
        lab.setAttribute("for", inp.id);
    }
    else{
        if (contor == 2){
            lab.innerText = "Last Name:";
            inp = document.createElement("INPUT");
            inp.id = "input" + contor;
            inp.setAttribute("type", "text");
            document.querySelector("form").appendChild(lab);
            document.querySelector("form").appendChild(inp);
            lab.setAttribute("for", inp.id);
        }
        else{
            if (contor == 3){
                lab.innerText = "Gender:";
                inp = document.createElement("select");
                inp.id = "input" + contor;
                document.querySelector("form").appendChild(lab);
                document.querySelector("form").appendChild(inp);
                for (var i = 0; i < 3; i++){
                    option = document.createElement("option");
                    if (i === 0){
                        option.value = "male";
                        option.innerText = "Male";
                    }
                    else{
                        if (i === 1){
                            option.value = "female";
                            option.innerText = "Female";
                        }
                        else{
                            option.value = "other";
                            option.innerText = "Other";
                        }
                    }
                    document.querySelector("select").appendChild(option);
                }
            }
            else{
                if (contor == 4){
                    let r = document.createElement("div");
                    document.querySelector("form").appendChild(lab);
                    document.querySelector("form").appendChild(r);
                    lab.innerText = "Favourite color:";
                    for (let i = 0; i < 6; i++){
                        let lab1 = document.createElement("label");
                        let inp1 = document.createElement("input");
                        inp1.setAttribute("type", "radio");
                        inp1.id = "input" + contor + i;
                        inp1.name = "culoare";
                        if (i === 0){
                            lab1.innerText = "black";
                            inp1.value = "black";
                        }
                        else{
                            if (i === 1){
                                lab1.innerText = "red";
                                inp1.value = "red";
                            }
                            else{
                                if (i === 2){
                                    lab1.innerText = "yellow";
                                    inp1.value = "yellow";
                                }
                                else{
                                    if (i === 3){
                                        lab1.innerText = "orange";
                                        inp1.value = "orange";
                                    }
                                    else{
                                        if (i === 4){
                                            lab1.innerText = "blue";
                                            inp1.value = "blue";
                                        }
                                        else{
                                            lab1.innerText = "pink";
                                            inp1.value = "pink";
                                        }
                                    }
                                }
                            }

                        }
                        lab1.setAttribute("for", "culoare");
                        document.querySelector("div").appendChild(inp1);
                        document.querySelector("div").appendChild(lab1);
                    }
                }
                else{
                    lab.innerText = "submit";
                    inp = document.createElement("button");
                    inp.id = "input" + contor;
                    inp.innerText = "Submit";
                    document.querySelector("form").appendChild(inp);
                }
            }
        }
        }

    ++contor;
}

let contor = 1;
alegeri = 3;
let ch1 = 0;
let ch2 = 0;
let ok = 1;

function buton (){
    let child = document.getElementById("form");
    let x1 = child[0].value;
    let x2 = child[1].value;
    let x3 = child[2].value;
    let x4;

    for (let j = 3; j <= 9; j++)
        if (child[j].checked){
            x4 = child[j].value;
            break;
        }

    while(child.firstChild)
        child.removeChild(child.firstChild);
    let pa = document.createElement("p");
    pa.innerText = x1;
    document.body.appendChild(pa);
    pa = document.createElement("p");
    pa.innerText = x2;
    document.body.appendChild(pa);
    pa = document.createElement("p");
    pa.innerText = x3;
    document.body.appendChild(pa);
    pa = document.createElement("p");
    pa.innerText = x4;
    document.body.appendChild(pa);
}

setTimeout(function(){ 
    if (ch1 === 0 && ch2 === 0){
        alert("Sesiunea a expirat"); 
        location.reload();
    }
}, 600000);


window.onload = () => {
    const bform = document.createElement("FORM");
    bform.id = "form";
    bform.classList.add("form");
    document.body.appendChild(bform);
    
    for (let i = 1; i <= 2; i++)
        create();
    document.getElementById("input1").oninput = function(){
        ch1 = 1;
        if (ch2 === 1 && ok === 1){
            create();
            ok = 2;
            document.getElementById("input3").oninput = function(){
                if (ok === 2){
                    create();
                    ok = 3;
                    document.getElementById("input40").onchange = function(){
                        if (ok === 3){
                            create();
                            ok = 4;
                            document.getElementById("input5").onclick = function (){
                                    buton();
                            }
                        }
                    }
                    document.getElementById("input41").oninput = function(){
                        if (ok === 3){
                            create();
                            ok = 4;
                            document.getElementById("input5").onclick = function (){
                                buton();
                        }
                        }

                    }
                    document.getElementById("input42").oninput = function(){
                        if (ok === 3){
                            create();
                            ok = 4;
                            document.getElementById("input5").onclick = function (){
                                buton();
                        }
                        }

                    }
                    document.getElementById("input43").oninput = function(){
                        if (ok === 3){
                            create();
                            ok = 4;
                            document.getElementById("input5").onclick = function (){
                                buton();
                        }
                        }

                    }
                    document.getElementById("input44").oninput = function(){
                        if (ok === 3){
                            create();
                            ok = 4;
                            document.getElementById("input5").onclick = function (){
                                buton();
                        }
                        }

                    }
                    document.getElementById("input45").oninput = function(){
                        if (ok === 3){
                            create();
                            ok = 4;
                            document.getElementById("input5").onclick = function (){
                                buton();
                        }
                        }
                    }
                }
            }
        }
    }

    document.getElementById("input2").oninput = function(){
        ch2 = 1;
        if (ch1 === 1 && ok === 1){
            create();
            ok = 2;
            document.getElementById("input3").oninput = function(){
                if (ok === 2){
                    create();
                    ok = 3;
                    document.getElementById("input40").onchange = function(){
                        if (ok === 3){
                            create();
                            ok = 4;
                            document.getElementById("input5").onclick = function (){
                                buton();
                        }
                        }

                    }
                    document.getElementById("input41").oninput = function(){
                        if (ok === 3){
                            create();
                            ok = 4;
                            document.getElementById("input5").onclick = function (){
                                buton();
                        }
                        }

                    }
                    document.getElementById("input42").oninput = function(){
                        if (ok === 3){
                            create();
                            ok = 4;
                            document.getElementById("input5").onclick = function (){
                                buton();
                        }
                        }

                    }
                    document.getElementById("input43").oninput = function(){
                        if (ok === 3){
                            create();
                            ok = 4;
                            document.getElementById("input5").onclick = function (){
                                buton();
                        }
                        }

                    }
                    document.getElementById("input44").oninput = function(){
                        if (ok === 3){
                            create();
                            ok = 4;
                            document.getElementById("input5").onclick = function (){
                                buton();
                        }
                        }

                    }
                    document.getElementById("input45").oninput = function(){
                        if (ok === 3){
                            create();
                            ok = 4;
                            document.getElementById("input5").onclick = function (){
                                buton();
                        }
                        }
                    }
                }
            }
        }
    }
}