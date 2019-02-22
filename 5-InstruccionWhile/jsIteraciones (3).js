function mostrar()
{
    var clave 
    var cont
   
    clave=prompt("Ingrese la clave.");
    cont=0

    while(clave!="utn750" && cont<3)
    {
        clave=prompt("Ingrese la clave nuevamente.");
        console.log(++cont);

    }



}
