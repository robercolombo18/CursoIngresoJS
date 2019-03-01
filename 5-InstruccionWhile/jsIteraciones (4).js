function mostrar()
{

	var numero;
	
	while(!(numero<10 && numero>=0))
	{
		numero=prompt("Ingrese un numero entre 0 y 9");
		numero=parseInt(numero);

		
	}

	document.getElementById("Numero").value=numero;

}