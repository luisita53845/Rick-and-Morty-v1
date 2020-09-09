//document.getElementById("change").onclick = prompt("Ingrese el nuevo nombre");

function changeName(idDiv) {

    let newName = prompt("Ingresa el nuevo nombre");
    document.getElementById(idDiv).innerHTML = newName;
}