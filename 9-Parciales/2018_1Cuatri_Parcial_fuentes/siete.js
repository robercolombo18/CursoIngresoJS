function mostrar()
{
    var nota;
    var sexo;
    var cont;
    var promedio;
    var cantidadNotas;
    var notaMinima;
    var bandera;
    var sexoMenor;
    var cantidadVaronesMayorSeis;

    cont=0;
    cantidadNotas=0;
    bandera=0;
    cantidadVaronesMayorSeis=0;


    while(cont<5)
    {
        nota=prompt("Ingrese la nota");
        nota=parseInt(nota);

        while(!(nota<=10 && nota>0))                                                                                    
        {
            nota=prompt("Incorrecto, ingrese una nota valida.");
            nota=parseInt(nota);
        }

        cantidadNotas=cantidadNotas+nota;
        cont++;

        sexo=prompt("Ingrese el sexo: (f) femenino o (m) masculino.");

        if(bandera==0)
        {
            notaMinima=nota
            bandera=1;
        }
        
        if(nota<notaMinima)
        {
            notaMinima=nota;
            sexoMenor=sexo;
            if(sexoMenor=="f")
            {
                sexoMenor="femenino";
            }
            else
            {
                sexoMenor="masculino";
            }
        }
        

        while(!(sexo=="f" || sexo=="m"))
        {
            sexo=prompt("Incorrecto, ingrese un sexo valido.");
        }

        if(sexo=="m" && nota>=6)
        {
            cantidadVaronesMayorSeis++;
        }



    }

    promedio=cantidadNotas/5

    alert("El promedio de las notas es: " + promedio + ". La nota mas baja es: " + notaMinima + " con el sexo de: " + sexoMenor + ". Cantidad de varones con nota 6 o mas: " + cantidadVaronesMayorSeis);
 
}
