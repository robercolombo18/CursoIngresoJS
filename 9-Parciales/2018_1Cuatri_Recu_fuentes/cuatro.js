function mostrar()
{
    var librouno
    var librodos
    var precio15descuento
    var tarjeta

    librouno=prompt("Usted ha comprado dos libros, ingrese el precio del primer libro");
    librodos=prompt("Ingrese el precio del segundo libro");
    tarjeta=prompt("Ingrese 1 si usted abonará con tarjeta, de lo contrario ingrese 0");

    librouno=parseInt(librouno);
    librouno=parseInt(librodos);
    precio15descuento=parseInt(precio15descuento);
    tarjeta=parseint(tarjeta);


    libros=librouno+librodos;
    precio15descuento=libros*0.15;

    if(libros>2000){
        alert("Su compra supera los $2000, se le aplica un descuento adicional del 15%, queda en " + precio15descuento);
    }
    else
    {
        if(tarjeta==1){
            alert("Usted pagará con tarjeta, se le agrega un 10% de recargo, queda en " + [precio15descuento*0.10]);
        }
        else{
            alert("Usted abonará en efectivo, el precio final es " + precio15descuento);
        }


    }
}
