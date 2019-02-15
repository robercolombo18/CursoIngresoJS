function mostrar()
{
    var precio
    var descuento
    var preciodescuento
    var preciofinal

    precio=document.getElementById("elNombre").value;

    precio=parseInt(precio);
    preciodescuento=parseInt(preciodescuento);
    preciofinal=parseInt(preciofinal);

    preciodescuento=precio-(precio*10/100);
    preciofinal=preciodescuento+(preciodescuento*21/100);



    alert("Tu compra es de " + precio + " , tenes un descuento del 10%, queda en " + preciodescuento + " , mas el iva es " + preciofinal);
  
}