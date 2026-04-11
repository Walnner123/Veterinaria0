// Importa la clase Mascota desde el archivo Mascota.ts
// para poder usarla en este archivo.
import { Mascota } from "./Mascota.ts";


//Esta parte crea la clase que administra todo el sistema de la veterinaria.
export class Veterinaria {

//Private: solo la clase Veterinaria puede acceder a esta variable
    private mascotas: Mascota[] = []; //Aquí se guardarán todas las mascotas registradas como objetos de tipo Mascota
    private contador: number = 1;//Esta variable sirve para generar los IDs únicos.

    //función privada que genera un ID y devuelve un string
    private generarID(): string {
        //const: declara una variable que no puede ser reasignada
        //const id : crea una variable id que no cambie
        const id = "AB" + this.contador; // AB + lo que contenga contador (1) = AB1
        this.contador++; //aumentar el contador en 1 para el próximo ID
        return id;// devolver el ID generado
    }

//Este método registra una nueva mascota dentro del sistema de la veterinaria.
    registrarMascota(nombreDueno: string, nombreMascota: string, edad: number, peso: number) {

        const id = this.generarID(); // Manda a llamar a la funcion generrarID y le retrorna un ID que se guarda en la variable id

        const mascota = new Mascota( //new Mascota: crear un nuevo objeto mascota
            //estos datos son enviados al constructor de la clase Mascota para crear el objeto
            id,
            nombreDueno,
            nombreMascota,
            edad,
            peso
        );

        this.mascotas.push(mascota); //Guardar la mascota en la lista Mascotas

        console.log("Mascota registrada con ID:", id);
    }
//Este método busca una mascota por su ID y devuelve el objeto Mascota si lo encuentra, o null si no lo encuentra.

                              //devuelve una mascota o nada
    buscarMascota(id: string): Mascota | null {
//revisar cada mascota de la lista
        for (let mascota of this.mascotas) {

//mascota.getId() = Obtiene el ID de esa mascota.
//si el ID de esta mascota es igual al ID buscado
            if (mascota.getId() === id) {
                return mascota;// retorna la mascota encontrada
                //se detiene el ciclo for
            }

        }

        return null; // Si no se encuentra la mascota, devuelve null
    }
//función que modifica los datos de una mascota usando su ID
    modificarMascota(id: string, nombreDueno: string, nombreMascota: string, edad: number, peso: number) {

        const mascota = this.buscarMascota(id);

        if (mascota) {
            //si mascota existe → entrar al bloque
           //si mascota es null → ir al else

             //cambiar el nombre del dueño
            mascota.setNombreDueno(nombreDueno);
            mascota.setNombreMascota(nombreMascota);
            mascota.setEdad(edad);
            mascota.setPeso(peso);

            console.log("Mascota actualizada");

        } else {

            console.log("Mascota no encontrada");

        }
    }
}




// Ejecutar el programa con :
// deno run -A main.ts
