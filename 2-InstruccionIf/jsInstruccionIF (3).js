function mostrar()
{
    var edad

    edad=document.getElementById("edad").value;

    edad=parseInt(edad);

    if(edad>=18){
        alert("Usted es mayor de edad.");
    }
    else{(edad<18);
        alert("Usted es menor de edad.");
    }
    


}