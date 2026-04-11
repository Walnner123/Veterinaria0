import { Veterinaria } from "./Veterinaria.ts";
// Crea una instancia del sistema de gestión veterinaria y le asigna la variable veterinaria.
const veterinaria = new Veterinaria();

function menu() {
    let opcion = prompt(
        "\n1 Registrar mascota\n" +
        "2 Buscar mascota\n" +
        "3 Modificar mascota\n" +
        "4 Salir"
    );
    // Usa prompt(Deno). para mostrar un menú y obtener la opción del usuario.

    switch (opcion) {
// Evalúa la opción seleccionada por el usuario y llama a la instancia veterinaria.
        case "1":

            const dueno = prompt("Nombre del dueño:");
            const mascota = prompt("Nombre de mascota:");
            const edad = Number(prompt("Edad mascota:"));
            const peso = Number(prompt("Peso mascota:"));
            // Pide los datos de la nueva mascota .

            veterinaria.registrarMascota(
                dueno!,
                mascota!,
                edad,
                peso
            );
            // Llama a veterinaria.registrarMascota() (de Veterinaria.ts), que crea una nueva Mascota (de Mascota.ts) y la guarda en el arreglo interno.

            menu();
            break;

        case "2":

            const id = prompt("ID de la mascota:");
            const resultado = veterinaria.buscarMascota(id!);
            // Llama a veterinaria.buscarMascota() (de Veterinaria.ts), que busca en el arreglo de Mascota y devuelve la instancia si existe.

            if (resultado) {

                resultado.mostrarDatos();
                // Si se encuentra la mascota, llama a resultado.mostrarDato().

            } else {

                console.log("No se encontró la mascota");
                // Si no existe, informa al usuario.

            }

            menu();
            break;

        case "3":

            const idModificar = prompt("ID:");
            // Pide el ID de la mascota cuya información se va a modificar.

            const nuevoDueno = prompt("Nuevo dueño:");
            const nuevaMascota = prompt("Nuevo nombre mascota:");
            const nuevaEdad = Number(prompt("Nueva edad:"));
            const nuevoPeso = Number(prompt("Nuevo peso:"));
            // Solicita los nuevos datos para actualizar la mascota.

            veterinaria.modificarMascota(
                idModificar!,
                nuevoDueno!,
                nuevaMascota!,
                nuevaEdad,
                nuevoPeso
            );
            // Llama a veterinaria.modificarMascota() (de Veterinaria.ts), que busca la Mascota y actualiza sus datos usando setters (de Mascota.ts).

            menu();
            break;

        case "4":
            console.log("Programa terminado");
            // Finaliza el programa sin volver a mostrar el menú.
            break;

        default:
            console.log("Opción inválida");
            // Si la opción no es válida, regresa al menú.
            menu();
    }

}

menu();
// Inicia la ejecución del programa mostrando el menú principal.
