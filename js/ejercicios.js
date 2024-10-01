function MostrarEdadYNombre() 
{
    const nombre = prompt("Ingrese su nombre: ");
    const fechaDeNacimiento = prompt("Ingrese su fecha de nacimiento (YYYY-MM-DD): ");
    
    let edad = calcularEdad(fechaDeNacimiento);
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = "Hola " + nombre + ", tienes " + edad + " años!";
}
MostrarEdadYNombre();

