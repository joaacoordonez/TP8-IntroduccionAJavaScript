function calcularEdad(fechaNacimiento) 
{
    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mesNacimiento = nacimiento.getMonth();
    const mesActual = hoy.getMonth();
    const diaNacimiento = nacimiento.getDate();
    const diaActual = hoy.getDate();

    if (mesActual < mesNacimiento || (mesActual === mesNacimiento && diaActual < diaNacimiento)) 
    {
        edad--; 
    }

    return edad;
}

function verificarFruta(frutaBuscada, frutas) 
{
    return frutas.includes(frutaBuscada);
}
