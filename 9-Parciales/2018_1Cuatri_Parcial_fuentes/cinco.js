function mostrar()
{
    var planeta;
    var mensaje;

    planeta=prompt("Ingrese un planeta.");

    switch(planeta)
    {
        case "mercurio":
            mensaje="Acá hace mas calor.";
        break;

        case "tierra":
            mensaje="Acá vivimos";
        break;

        case "saturno":
            mensaje="Aca hace mas frio";
        break;

        case "pluton":
            mensaje="Aca hace mucho mas frio";
        break;

        default:
            mensaje="No es un planeta valido.";
        break;

    }



    alert(mensaje);
}
