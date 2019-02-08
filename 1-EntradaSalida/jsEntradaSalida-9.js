/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var importe
    var resultado
    importe=document.getElementById("sueldo").value;
    importe=parseInt(importe);
    resultado=importe*1.10;

    document.getElementById("resultado").value=resultado;



	
}
