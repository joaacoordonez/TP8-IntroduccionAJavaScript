function MostrarEdadYNombre() 
{
    const nombre = prompt("Ingrese su nombre: ");
    const fechaDeNacimiento = prompt("Ingrese su fecha de nacimiento (YYYY-MM-DD): ");
    
    let edad = calcularEdad(fechaDeNacimiento);
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = "Hola " + nombre + ", tienes " + edad + " años!";
}
MostrarEdadYNombre();

function TirandoFruta()
{
    const frutas = ["Manzana", "Banana", "Naranja", "Frutilla", "Kiwi", "Mango", "Pera", "Piña", "Uva", "Cereza"];
    console.log("Lista de frutas:", frutas.join(", "));
    const frutaBuscada = prompt("Ingrese una fruta: ");
    const resultado2 = document.getElementById('resultado2');
    if (verificarFruta(frutaBuscada, frutas)) {
        resultado2.innerHTML = "Sí, tenemos " + [frutaBuscada] + "!";
    } 
    else 
    {
        resultado2.innerHTML = "No, no tenemos " + [frutaBuscada] + "!";
    }
}
TirandoFruta();

function ComparandoDatosYTipos() 
{
    const resultado3 = document.getElementById('resultado3');
    if (10 == '10') 
    {
        resultado3.innerHTML = "Son iguales";
    }
    if (10 === '10') 
    {
        resultado3.innerHTML = "Son iguales";
    }

    resultado3.innerHTML = console.log(typeof 10.6);

    // Si es verdad porque porque en java script cuando es true lo convierte a 1 entonces son iguales.
}

function Yoobjeto() 
{
    const Ciudad = {
        nombre: Londres,
        fechaFundacion: 47,
        poblacion: 8.982,
        extension: 1.572
    }

    for (let clave in Ciudad) {
        console.log("Clave: " + clave+ ", Valor: " + Ciudad[clave]);
    }
}

function Dobleelementos() 
{

}


