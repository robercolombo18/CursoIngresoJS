function mostrar()
{
    var precio
    var descuento
    var resultado

    precio=prompt("Ingrese precio");
    descuento=prompt("Ingrese el descuento");
    
    precio=parseInt(precio);
    descuento=parseInt(descuento);
    resultado=precio-descuento%100;

    document.getElementById("elPrecioFinal").value=resultado;

}
