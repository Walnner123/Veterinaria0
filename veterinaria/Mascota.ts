export class Mascota {
// Propiedades privadas para almacenar los datos de la mascota.
    private id: string;
    private nombreDueno: string;
    private nombreMascota: string;
    private edad: number;
    private peso: number;

// El constructor recibe los datos de la mascota y los asigna a las propiedades internas.
    constructor(id: string, nombreDueno: string, nombreMascota: string, edad: number, peso: number)
        //this se usa para acceder a las propiedades del objeto (la clase).
        {
        this.id = id;
        this.nombreDueno = nombreDueno;
        this.nombreMascota = nombreMascota;
        this.edad = edad;
        this.peso = peso;
    }

    // Devuelve el ID de la mascota (usado por Veterinaria.ts para búsqueda).
    getId(): string {
        return this.id;
    }

    // Permite acceder(leer) a los datos de la mascota (sinmodificarla) para mostrar datos después de la búsqueda.
    getNombreDueno(): string {
        return this.nombreDueno;
    }

    getNombreMascota(): string {
        return this.nombreMascota;
    }

    getEdad(): number {
        return this.edad;
    }

    getPeso(): number {
        return this.peso;
    }

    // Permite modificar los datos de la mascota (usado por Veterinaria.ts para actualización).
    setNombreDueno(nombre: string) {
        this.nombreDueno = nombre;
    }

    setNombreMascota(nombre: string) {
        this.nombreMascota = nombre;
    }

    setEdad(edad: number) {
        this.edad = edad;
    }

    setPeso(peso: number) {
        this.peso = peso;
    }

    // Muestra en consola todos los datos de la mascota (llamado desde main.ts después de búsqueda).
    mostrarDatos() {
        console.log("\n--- Perfil Mascota ---");
        console.log("ID:", this.id);
        console.log("Dueño:", this.nombreDueno);
        console.log("Mascota:", this.nombreMascota);
        console.log("Edad:", this.edad);
        console.log("Peso:", this.peso);
    }
}
