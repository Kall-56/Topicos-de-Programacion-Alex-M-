const fechaActual: Date = new Date();

class Persona {
    nombre: string;
    fechaNacimiento: Date;

    constructor(nombre: string, fechaNacimiento: Date) {
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
    }
}

function calculoEdad(fecha: Date): number {
    return fechaActual.getFullYear() - fecha.getFullYear();
}

function obtenerEdad(persona: Persona,
                     callback: (edad: Date) => number,
                     resultado: (res: {nombre: string, edad: number}) => void): void {
    console.log('Calculando Edad...');
    setTimeout(() => {
        console.log('Edad calculada');
        const edad = callback(persona.fechaNacimiento);
        resultado({nombre: persona.nombre, edad: edad});
    },
    2000);
}

const listaPersonas: Persona[] = [
    new Persona("Alex", new Date(2004, 5, 15)),
    new Persona("Jose", new Date(2004, 7, 21)),
    new Persona("María", new Date(1995, 3, 8)),
    new Persona("Carlos", new Date(1988, 11, 30)),
    new Persona("Laura", new Date(2000, 1, 25)),
    new Persona("Daniel", new Date(1992, 8, 12))
];

listaPersonas.forEach((persona: Persona) => {
    obtenerEdad(persona, calculoEdad, console.log);
});