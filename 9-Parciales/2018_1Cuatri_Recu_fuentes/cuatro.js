function mostrar()
{
    var importeUno;
    var importeDos;
    var importeTres;
    var importeCuatro;
    var importeTotal;
    var mayor;

    importeUno=prompt("Ingrese importe 1");
    importeDos=prompt("Ingrese importe 2");
    importeTres=prompt("Ingrese importe 3");
    importeCuatro=prompt("Ingrese importe 4");

    importeUno=parseInt(importeUno);
    importeDos=parseInt(importeDos);
    importeTres=parseInt(importeTres);
    importeCuatro=parseInt(importeCuatro);

    importeTotal= (importeUno+importeDos+importeTres+importeCuatro);

    if(importeUno>importeDos && importeUno>importeTres && importeUno>importeCuatro)
    {
        mayor=importeUno;
    }
    else
    {
        if(importeDos>importeUno && importeDos>importeTres && importeDos>importeCuatro)
        {
            mayor=importeDos;
        }
        else
        {
            if(importeTres>importeUno && importeTres>importeDos && importeTres>importeTres>importeCuatro)
            {
                mayor=importeTres;
            }
            else
            {
                if(importeCuatro>importeUno && importeCuatro>importeDos && importeCuatro>importeTres)
                {
                    mayor=importeCuatro;
                }
            }
        
        }

    }

    if(importeTotal>100)
    {
        importeTotal=importeTotal-(importeTotal*0.10);
    }
    else
    {
        if(importeTotal>50)
        {
            importeTotal=importeTotal-(importeTotal*0.05);
        }
        else
        {
            importeTotal=importeTotal*1.15;
        }
    
    }

    alert("El mayor es: " + mayor + " y el importe total es: " + importeTotal);

}
