function mostrar()
{
    var velocidad;
    var combustible;
    var cont;
    var velocidadTotal;
    var promedio;
    var velocidadMinima;
    var velocidadMaxima;
    var cantidadCombustiblesLiquidos;
    var maximoSolido;
    var bandera;
    var sumaVelocidad;

    cont=0;
    velocidadTotal=0;
    velocidadMaxima=250;
    velocidadMinima=0;
    cantidadCombustiblesLiquidos=0;
    bandera=0;
    sumaVelocidad=0;

    while(cont<5)
    {
        velocidad=prompt("Ingrese la velocidad");
        velocidad=parseInt(velocidad);
        combustible=prompt("Ingrese el tipo de combustible: (s) Solido o (l) Liquido");

        sumaVelocidad=sumaVelocidad+velocidad;
        console.log("Suma velocidad: " + sumaVelocidad);

        while(!(velocidad>0 && velocidad<250))
        {
            velocidad=prompt("Incorrecto, ingrese una velocidad valida");
            velocidad=parseInt(velocidad);

        }



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
		

		
        



        if(combustible=="l" && velocidad>100)
        {
            cantidadCombustiblesLiquidos++;
        }

        if(combustible=="s" && velocidadMaxima==velocidad)
        {
            maximoSolido=velocidadMaxima;
        }

        cont++;
        console.log("velocidad minimo: " + velocidadMinima);
        console.log("velocidad maxima: " + velocidadMaxima);
    }

    promedio=sumaVelocidad/5;

    alert("El promedio de las velocidades totales es: " + promedio + ". La velocidad mas baja es: " + velocidadMinima + " con el tipo de combustible " + combustible + " . Cantidad de combustibles liquidos que superan los 100km: " + cantidadCombustiblesLiquidos + " . La velocidad mas alta de los de combustible solido es: " + maximoSolido);

}
