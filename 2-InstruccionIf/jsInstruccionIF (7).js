function mostrar()
{
    var edad
    var estadocivil
    var soltero
    var casado
    var divorciado

    edad=document.getElementById("edad").value;
    estadocivil=document.getElementById("estadoCivil").value;
    soltero=document.getSelection("Soltero").value;
    casado=document.getSelection("Casado").value;
    divorciado=document.getSelection("Divorciado").value;

    edad=parseInt(edad);

    if(edad<18&estadocivil!=soltero){
        alert("Es muy pequeño para NO ser soltero.");
    }
    else
    {

    }


	


}