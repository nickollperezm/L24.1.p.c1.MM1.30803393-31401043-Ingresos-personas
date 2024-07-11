export default class Cl_ingresos {
    constructor() {
        this.menorMonto = 9999;
        this.acumIngresos = 0;
        this.contPersonas = 0;
    }

    procesarPersona(persona) {
        if(persona.ingreso < this.menorMonto) {
            this.menorMonto = persona.ingreso;
        }
        this.acumIngresos += persona.ingreso;
        this.contPersonas++;
    }

    ingresoMenor() {
        return this.menorMonto;
    }

    ingresoPromedio() {
        return this.acumIngresos / this.contPersonas;
    }
}