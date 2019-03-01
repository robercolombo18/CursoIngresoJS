function mostrar()
{
    var nota;
    var sexo;
    var cont;
    var promedio;
    var cantidadNotas;

    cont=0;
    cantidadNotas=0;


    while(cont<5)
    {
        nota=prompt("Ingrese la nota");
        sexo=prompt("Ingrese el sexo: (f) femenino o (m) masculino.");
        nota=parseInt(nota);
        cantidadNotas=cantidadNotas+nota;
        cont++;

        while(!(nota<=10 && nota>0))                                                                                    
        {
            nota=prompt("Incorrecto, ingrese una nota valida.");
            nota=parseInt(nota);
        }




    }

    promedio=cantidadNotas/5

    alert("El promedio de las notas es: " + promedio + " ");

}
