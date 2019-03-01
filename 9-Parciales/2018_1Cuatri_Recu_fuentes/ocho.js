function mostrar()
{
    var pais;
    var superficie;
    var respuesta;
    var cantidadPaisesImpar;
    var cantidadPaisesMenor;
    var cantidadPaises100;
    var pais100superficie;
    var cantidadSuperficies;
    var superficieTotal;

    cantidadPaises100=0;
    cantidadPaisesImpar=0;
    cantidadPaisesMenor=0;
    cantidadSuperficies=0;
    superficieTotal=0;
    respuesta=true;

    while(respuesta==true)
    {
        pais=prompt("Ingrese el pais");
        superficie=prompt("Ingrese la superficie");
        superficie=parseInt(superficie);
        cantidadSuperficies++;
        superficieTotal=superficieTotal+superficie;

        console.log("Cantidad de superficies ingresadas: " + cantidadSuperficies);

        respuesta=confirm("Deseas continuar?");

        if(superficie%2!=0)
        {
            cantidadPaisesImpar++;
            console.log("Cantidad paises impar: " + cantidadPaisesImpar);
    
        }

        if(superficie<100)
        {
            cantidadPaisesMenor++;
            console.log("Cantidad paises con superficie menor a 100: " + cantidadPaisesMenor);
        }

        if(superficie==100)
        {
            cantidadPaises100++;
            console.log("Cantidad paises con superficie 100: " + cantidadPaises100);
        }

        
        if(superficie>100)
        {
            pais100superficie=pais;
            console.log("Primer pais que supero los 100: " + pais100superficie);
        }

        



    }


    promedio=superficieTotal/cantidadSuperficies;
    console.log("El promedio de los km es: " + promedio);


    //alert("Cantidad de paises con superficie impar: " + cantidadPaisesImpar + " . Cantidad de paises con superficie menor a 100: " + cantidadPaisesMenor + " . Cantidad de paises con superficie igual a 100: " + cantidadPaises100 + " . Primer pais que supero los 100 de superficie: " + pais100superficie + " . Promedio de km ingresados: " + promedio + " . Pais que menos territorio tiene: " + menorPais);







    

}
