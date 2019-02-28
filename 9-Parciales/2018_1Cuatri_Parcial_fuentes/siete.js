function mostrar()
{
    var nota;
    var sexo;
    var cont;
    var promedio;
    var cantidadNotas;

    cont=0

    while(nota>=0 && nota<=10 && cont<5)
    {
        nota=prompt("Ingrese la nota");
        sexo=prompt("Ingrese el sexo: (f) femenino o (m) masculino.");
        nota=parseInt(nota);
        cantidadNotas=cantidadNotas+nota;
        cont++;
    }

    promedio=cantidadNotas/5

    alert("El promedio de las notas es: " + promedio + " ")

}
