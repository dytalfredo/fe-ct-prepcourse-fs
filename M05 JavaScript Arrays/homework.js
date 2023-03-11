/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0]
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[array.length -1]
}

function obtenerLargoDelArray(array) {
   return array.length
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
}

function incrementarPorUno(array) {
   return array.map((num) =>{return num+1})
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:

   array.push(elemento)
   return array
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   
   array.unshift(elemento)
   return array
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   return palabras.join(' ');


}

function arrayContiene(array, elemento) {

   return array.includes(elemento)
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
}

function agregarNumeros(arrayOfNums) {
   var suma = 0
   for (let index = 0; index < arrayOfNums.length; index++) {
      
      suma+=arrayOfNums[index]
   }
   return suma
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
}

function promedioResultadosTest(resultadosTest) {
   var promedio = 0
   for (let index = 0; index < resultadosTest.length; index++) {
      promedio +=resultadosTest[index]
      
   }
   return promedio/resultadosTest.length
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
}

function numeroMasGrande(arrayOfNums) {
   var max=0
   for (var num of arrayOfNums){
      if(max<num){
         max=num
      }
   }return max
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   var mul
   if (arguments.length===0){
      return 0
   }else if (arguments.length===1){
      return arguments[0]
   }else {
      for (let index = 0; index < arguments.length; index++) {
         if(index===0){
            mul=arguments[index]
         }else{
            mul*=arguments[index]
         }
         
      }
      return mul
   }
}

function cuentoElementos(array) {
   var elemen=0
   for (let index = 0; index < array.length; index++) {
      if(array[index]>18){
         elemen++
      }
      
   }
   return elemen
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
}

function diaDeLaSemana(numeroDeDia) {
   switch (numeroDeDia) {
      case 1:
         
         return "Es fin de semana"
         case 2:
         
         return "Es dia laboral"
         case 3:
         
         return "Es dia laboral"
         case 4:
         
         return "Es dia laboral"
         case 5:
         
         return "Es dia laboral"
         case 6:
         
         return "Es dia laboral"
         case 7:
         
         return "Es fin de semana"
   
      default:
         return "Es dia laboral"
   }
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
}

function empiezaConNueve(num) {
   numeroseparado = num.toString().split("")
   if (numeroseparado[0]==="9"){
      return true
   }else{return false}
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
}

function todosIguales(array) {

for (let index = 0; index < array.length-1; index++) {
   if(array[index]!=array[index+1]){
      console.log(array[index])
      console.log(array[index+1])
      return false
   }
   
}
return true
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
}

function mesesDelAño(array) {
   var meses = []
   if(array.includes("Marzo") && array.includes("Noviembre") && array.includes("Enero") ){
      for (var mes of array){
         if(mes === "Marzo" || mes === "Noviembre" || mes === "Enero"){
            meses.push(mes)
         }
         
      }
      return meses
   }else{
      return "No se encontraron los meses pedidos"
   }
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
}

function tablaDelSeis() {
   var tabla = []
   for (let index = 0; index < 11; index++) {
      tabla.push(6*index)
      
   }
   return tabla
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
}

function mayorACien(array) {
   var mayores =  []
   for (var num of array){
      if(num>100){
         mayores.push(num)
      }
   }
   return mayores
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
  var iteraciones=0 
var array= []
   while (iteraciones<10) {
      iteraciones++
      num+=2
      array.push(num)
      if(num===iteraciones){
         array= "Se interrumpió la ejecución"
         break
      }
   }return array
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
}

function continueStatement(num) {


   var iteraciones=0 
  var array = []
 
   while (iteraciones<10) {
      iteraciones++
      
     
      if(iteraciones===5|| num===5){
         continue
      }else {
         num+=2
      array.push(num)
      }
   }return array
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
