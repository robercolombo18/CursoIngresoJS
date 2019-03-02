function mostrar()
{
    var precio;
    var descuento;
    var preciofinal;

    precio=prompt("Ingrese el precio.");
    descuento=prompt("Ingrese el descuento.");

    precio=parseInt(precio);
    descuento=parseInt(descuento);

    preciofinal=precio-(precio*descuento/100);

    document.getElementById("elPrecioFinal").value=preciofinal;


}
