//---------------------MODELO PARCIAL 2---------------------//



function mostrar()
{
    var pais;
    var superficie;
    var respuesta;
    var cantidadPaisesImpar;
    var cantidadPaisesMenorCien;
    var cantidadPaisesIgualCien;
    var primerPaisSupero100;

    respuesta=true;
    cantidadPaisesImpar=0;
    cantidadPaisesMenorCien=0;
    cantidadPaisesIgualCien=0;
    primerPaisSupero100=0;


    while(respuesta==true)
    {
        pais=prompt("Ingrese el pais.");
        
        superficie=prompt("Ingrese la superficie.");
        superficie=parseInt(superficie);

        //------------------PUNTO 1-------------------//

        if(superficie%2 != 0)
        {
            cantidadPaisesImpar++;
        }

        //----------------PUNTO 2--------------------//

        if(superficie<100)
        {
            cantidadPaisesMenorCien++;
        }

        //----------------PUNTO 3---------------------//

        if(superficie==100)
        {
            cantidadPaisesIgualCien++;
        }

        //----------------PUNTO 4------------------//

        if()
        {
            
        }

        //--------------PUNTO 5-------------------//

        



        respuesta=confirm("Deseas continuar?");
    }


    alert("Cantidad de paises con superficie impar: " + cantidadPaisesImpar + ". Cantidad de paises con superficie menor a 100: " + cantidadPaisesMenorCien + " cantidad de paises con superficie igual a 100: " + cantidadPaisesIgualCien );
    

}
