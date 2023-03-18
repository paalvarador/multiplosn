function calcularMultiplos(){
    const base = document.getElementById("base").value;
    const n = document.getElementById("cuantos").value;
    let element = "";

    for (let index = 0; index < n; index++) {
        const number = base * index;
        element = element + number + ", ";
    }

    document.getElementById("container-response").style.visibility = "visible";
    document.getElementById("label-response").innerHTML = element;
    
}
