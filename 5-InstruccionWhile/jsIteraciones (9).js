function mostrar()
{

	var contador;
	var respuesta;
	var numeroMaximo;
	var numeroMinimo;
	var numeroIngresado;
	var bandera;


	respuesta="si";
	contador=0;
	//numeroMaximo=-9999;
	//numeroMinimo=9999;
	bandera=0;

	while(respuesta!='no')
	{

		numeroIngresado=prompt("Ingrese numero");
		numeroIngresado=parseInt(numeroIngresado);

		if(bandera==0)
		{
			numeroMaximo=numeroIngresado;
			numeroMinimo=numeroIngresado;
			bandera=1;
	
		}
		else
		{
			if(numeroMaximo<numeroIngresado)
			{
				numeroMaximo=numeroIngresado;
			}
	
			if(numeroMinimo>numeroIngresado)
			{
				numeroMinimo=numeroIngresado;
			}

		}


		respuesta=prompt("Ingrese no para salir");
	}
	console.log("El maximo es: " + numeroMaximo);
	console.log("El minimo es: " + numeroMinimo);




}