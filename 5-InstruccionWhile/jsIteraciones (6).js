function mostrar()
{

	var contador;
	var acumulador;
	var numeros;

	contador=0;
	acumulador=0;

	while(contador<5)
	{
		numeros=prompt("Ingresa un numero");
		numeros=parseInt(numeros);
		acumulador=acumulador+numeros;
		console.log(acumulador);
		contador++;
	}



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}