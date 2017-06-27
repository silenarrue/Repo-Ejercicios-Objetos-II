/* Ejercicio 1 Objetos II */

var objeto = {

    inicio: 1,
    fin: 10
}


function suma(numInicial, numFinal) {
    var arrObjeto = [];
    arrObjeto.push(numInicial, 2, 3, 4, 5, 6, 7, 8, 9, numFinal);
    var resultado = 0;
    for (var i = 0; i < arrObjeto.length; i++) {
        resultado += arrObjeto[i];

    }

    return resultado;

}

return suma(objeto.inicio, objeto.fin);


/* Ejercicio 2 Objetos II */

function mensaje(edad) {
    if (edad > 18) {
        return "You are Awesome!!";
    } else {
        return "Upsiiii!!";
    }
}


function Coder(nombre, edad, ocupacion, genero) {
    this.nombre = nombre;
    this.edad = edad;
    this.ocupacion = ocupacion;
    this.genero = genero;
    this.mensaje = edad;
    this.mensajeFinal = mensaje;
}

function datosCoder(nombre, edad, ocupacion, genero) {
    return mensaje(coderMensaje.mensaje);
}

var coderMensaje = new Coder("Tamara", 22, "Estudiante Laboratoria", "Femenino");

return datosCoder(coderMensaje.mensaje);

/* Ejercicio 3 Objetos II*/

var arr = [6, 5, 4, 3, 2, 1];

function concatenar(arr) {
    var texto = {
        propiedad1: 6,
        propiedad2: 5,
        propiedad3: 4,
        propiedad4: 3,
        propiedad5: 2,
        propiedad6: 1,
    }
    var texto = {};
    for (var i = 1; i <= arr.length; ++i) {
        texto["propiedad" + i] = arr[i - 1];
    }
    var resultado = "";
    Object.getOwnPropertyNames(texto).forEach(function(propiedad) {

        resultado += propiedad + ' -> ' + texto[propiedad] + ";";

    });

    return resultado.slice(0, -1);
}

return concatenar(arr);

/* Ejercicio 4 Objetos II*/

function clinicaLab(nombre, apellido, edad, genero, ciudad, pais) {

    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.genero = genero;
    this.ciudad = ciudad;
    this.pais = pais;
    this.fichaPaciente = function() {
        return "Nombre: " + this.nombre + " " + this.apellido + "</br>" + " Edad: " + this.edad + "</br>" + "Pais: " + this.pais;
    }

}

var paciente = new clinicaLab("Blanca", "Perez", 23, "Femenino", "Santiago", "Chile");

return paciente.fichaPaciente();


//Pruebas unitarias ejercicio 1

var assert = require("assert");
describe("Suma valores de un objeto",function(){
   it("Probando con este Objeto{inicio: 1, fin: 10}",function(){
   assert.equal(55, multisuma(1, 10));
   })
});

 //Pruebas unitarias ejercicio 2

 var assert = require("assert");
 describe("Retornar un mensaje segun la edad",function(){
    it("Probando con estos datos: Tamara, 22, Estudiante Laboratoria, Femenino",function(){
    assert.equal("You are Awesome!!", datosCoder(22));
    })
 });
