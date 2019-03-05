//---------------------MODELO PARCIAL 1---------------------//


function mostrar()
{
    var velocidad;
    var combustible;
    var cont;
    var promedioVelocidad;
    var sumaVelocidad;
    var cantidadVelocidad;
    var velocidadMaxima;
    var velocidadMinima;
    var tipoCombustible;
    var bandera;
    var cantidadCombustibleLiquidos;
    var maximoSolido;


    cont=0
    sumaVelocidad=0;
    cantidadVelocidad=0;
    bandera=0;
    cantidadCombustibleLiquidos=0;


    while(cont<5)
    {
        cont++;

        velocidad=prompt("Ingrese la velocidad.");
        velocidad=parseInt(velocidad);

        while(!(velocidad>=0 && velocidad<=250))
        {
            velocidad=prompt("Ingrese una velocidad valida.");

        }

        combustible=prompt("Ingrese el tipo de combustible: (s) para solido o (l) para liquido.");

        while(!(combustible=="s" || combustible=="l"))
        {
            combustible=prompt("Ingrese un tipo de combustible valido.");

        }


        //-----------------PUNTO 1-----------------//

        if(velocidad>=0 && velocidad<=250)
        {
            sumaVelocidad=sumaVelocidad+velocidad;
            cantidadVelocidad++;
        }

        //------------------PUNTO 2------------------//

        if(bandera==0)
        {
            velocidadMaxima=velocidad;
            velocidadMinima=velocidad;
            bandera=1;
        }
        else
        {
            if(velocidad>velocidadMaxima)
            {
                velocidadMaxima=velocidad;
            }
            
            if(velocidad<velocidadMinima)
            {
                velocidadMinima=velocidad;
                tipoCombustible=combustible;
            }
        }

        //------------------PUNTO 3----------------------//

        if(combustible=="l" && velocidad>100)
        {
            cantidadCombustibleLiquidos++;
        }

        //-------------------PUNTO 4----------------------//

        if(velocidadMaxima==velocidad && combustible=="s")
        {
            maximoSolido=velocidadMaxima;
        }



        

        promedioVelocidad=sumaVelocidad/cantidadVelocidad;

    }

    alert("Promedio de velocidades totales: " + promedioVelocidad + " . La velocidad mas baja es: " + velocidadMinima + " con el tipo de combustible: " + tipoCombustible + ". Cantidad de combustibles liquidos que superan los 100km: " + cantidadCombustibleLiquidos + ". Velocidad mas alta de los de combustible solido: " + maximoSolido);

}
