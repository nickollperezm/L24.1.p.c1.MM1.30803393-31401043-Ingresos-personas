/*
Dado el nombre y el ingreso de varias personas. Determinar e imprimir: el monto del ingreso
menor y el ingreso promedio.

Se dispone de los siguientes datos de varias personas: (nombre, ingreso) (Mary, 150),
(José, 135), (Carlos, 160), (Pedro, 75)

Monto del ingreso menor: 75$
Ingreso promedio:130
*/

import Cl_ingresos from "./Cl_Ingresos.js";
import Cl_persona from "./Cl_persona.js";

let ingresos = new Cl_ingresos();
let persona1 = new Cl_persona("Mary", 150);
let persona2 = new Cl_persona("Jose", 135);
let persona3 = new Cl_persona("Carlos", 160);
let persona4 = new Cl_persona("Pedro", 75);
ingresos.procesarPersona(persona1);
ingresos.procesarPersona(persona2);
ingresos.procesarPersona(persona3);
ingresos.procesarPersona(persona4);

let salida = document.getElementById("salida");
salida.innerHTML = `
Monto del ingreso menor: ${ingresos.ingresoMenor()}$
<br>Ingreso promedio: ${ingresos.ingresoPromedio()}$
`;