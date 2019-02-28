function mostrar()
{
    var precio;
    var porcentaje;
    var preciofinal;

    precio=prompt("Ingrese el precio");
    porcentaje=prompt("Ingrese el porcentaje");

    precio=parseInt(precio);
    porcentaje=parseint(porcentaje);

    preciofinal=precio-(precio*porcentaje/100);

    document.getElementById("elPrecioFinal").value=preciofinal;

}
