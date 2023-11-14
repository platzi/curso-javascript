/*

estructura de datos

key / value 

objeto {
  propiedad: valor, 
  propiedad: valor, 
  propiedad: valor 
  Metodos
}

*/

const persona = {
  nombre: "John",
  edad: 30,
  direccion: {
    calle: "Av Insurgentre 187",
    ciudad: "CDMX",
  },
  saludar() {
    console.log(`hola, mi nombre es ${persona.nombre}`);
  },
};

console.log(persona);

console.log(persona.nombre);

persona.saludar();

persona.telefono = "555-555-5555";

console.log(persona.telefono);

persona.despedir = () => {
  console.log("Adios");
};

persona.despedir();

console.log(persona.direccion.calle);

delete persona.telefono;

delete persona.despedir();
