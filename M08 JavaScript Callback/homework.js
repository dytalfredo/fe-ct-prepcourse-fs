/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:
   var nombreNuevo = nombre.split("");
   nombreNuevo[0] = nombreNuevo[0].toUpperCase();
   return nombreNuevo.join("");
}

function invocarCallback(cb) {
   cb();
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
}

function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:
   return cb(num1,num2);
}

function sumarArray(arrayOfNumbers, cb) {
   var suma =0
   for (let index = 0; index < arrayOfNumbers.length; index++) {
      suma+=arrayOfNumbers[index];
      
   }
   cb(suma)
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
}

function forEach(array, cb) {
   for (let index = 0; index < array.length; index++) {
      cb(array[index]);
      
   }
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:
}

function map(array, cb) {
   var nuevoArreglo=[]
   for (let index = 0; index < array.length; index++) {
      nuevoArreglo.push(cb(array[index]));
      
   }
   return nuevoArreglo;
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:
}

function filter(arrayOfStrings) {
   var nuevoArreglo = [];
   for (let index = 0; index < arrayOfStrings.length; index++) {
      if(arrayOfStrings[index].charAt(0)==="a"){
         nuevoArreglo.push(arrayOfStrings[index])
      }
      
   }
   return nuevoArreglo;
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};
