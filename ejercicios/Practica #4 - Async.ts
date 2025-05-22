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

function obtenerEdad(persona: Persona): Promise<{nombre: string, edad: number}> {
    return new Promise((resolve, reject) => {
        console.log('Calculando Edad...');
        setTimeout(() =>{
                const edad: number = calculoEdad(persona.fechaNacimiento);
                if (edad >= 0) {
                    console.log('Edad calculada');
                    resolve({nombre: persona.nombre, edad: edad});
                }
                else {
                    reject(new Error('Edad Invalida'));
                }
            },
            2000);
    });
}

const listaPersonas: Persona[] = [
    new Persona("Alex", new Date(2004, 5, 15)),
    new Persona("Jose", new Date(2004, 7, 21)),
    new Persona("María", new Date(1995, 3, 8)),
    new Persona("Carlos", new Date(1988, 11, 30)),
    new Persona("Laura", new Date(2000, 1, 25)),
    new Persona("Daniel", new Date(1992, 8, 12))
];

async function mostrarAsincrono() {
    try {
        const listaResultados: { nombre: string, edad: number }[] = await Promise.all(
            listaPersonas.map(persona => obtenerEdad(persona))
        );
        console.log(listaResultados);
    }
    catch (error) {
        // @ts-ignore
        console.error('[ERROR]', error.message);
    }
}

mostrarAsincrono()