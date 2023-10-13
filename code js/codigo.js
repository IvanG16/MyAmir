function consumoFantasma(){
    var input = parseInt(document.getElementsByClassName("ingreso")[0].value);
    document.getElementById("resulConsumo").value = input * 0.1;
    document.getElementById("resulConsumoAño").value = (input * 0.1) * 7;
}
document.getElementById("buttonIngreso").addEventListener("click", consumoFantasma)