function mostrar()
{
    var edad
    var soltero
    var casado
    var divorciado
    var estadocivil

    edad=document.getElementById("edad").value;
    estadocivil=document.getElementById("estadoCivil").value;
    soltero=document.getSelection("Soltero").value;
    casado=document.getSelection("Casado").value;
    divorciado=document.getSelection("Divorciado").value;

    edad=parseInt(edad);

    if(edad<18&estadocivil!=soltero){

    }
    else
    {
        alert("Es soltero y no es menor.");
    }

	


}