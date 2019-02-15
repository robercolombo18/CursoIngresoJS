function mostrar()
{
    var amigos
    var preciototal
    var preciocadauno

    amigos=prompt("Ingrese la cantidad de amigos");
    preciototal=prompt("Ingrese el precio total");

    amigos=parseInt(amigos);
    preciototal=parseInt(preciototal);
    preciocadauno=parseInt(preciocadauno);

    preciocadauno=(preciototal/amigos)+(preciototal/amigos*0.10);

    alert("Son un grupo de " + amigos + " amigos, cada uno debe pagar " + preciocadauno + " incluido el 10% de propina, el precio no incluye el IVA.");

}
