// No cambies los nombres de las funciones.

  // array.length === 3
  // var array = [2, "asd", true] (puede tener cualquier elemento, numérico, string, booleano)
  //              0    1     2
  // empieza a contar desde 0
function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
   return array[0];
   //return array.shift();
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array [array.length -1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}

//  0  1  2   3
// [1, 2, 5, 132]   tiene que dar:
// [2, 3, 6, 133]
function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var arrayAumentado = [];
  for (var i = 0; i < array.length; i++){
    arrayAumentado.push(array[i] + 1) 
  }
  return arrayAumentado;
  // .pop quita del final
}

//var array = ["pepe", "pajaro", "alfajor"]
//var elemento = "coca-cola"; "coca-cola" se tiene que agregar al final del array[]

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
 array.push(elemento);
 return array; 
}


// .shift quita del principio
function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}

// .thim = borra todos los espacios que hay al principio y al final. .thimstart / .thimend
// .join = juntar las palabras. (' ') con un espacio entre medio
function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  return palabras.join(' ');
}

// array[1, 2, 3, 4, 5]
// elemento       4
function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for(var i = 0; i < array.length; i++){
    if(array[i] === elemento){
      return true;
    }
  }
  return false;
  // return array.includes(elemento); / .includes se fija si incluye el elemento dentro del array.
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var total = 0;
  for(var i = 0; i < numeros.length; i++){
    total += numeros[i];
  }
  return total;
  // return numeros.reduce(function (acc, el){return acc + el})
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var total = 0;
  for(var i = 0; i < resultadosTest.length; i++){
    total += resultadosTest[i];
  }
  return total / resultadosTest.length;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var masGrande = 0;
  for(var i = 0; i < numeros.length; i++){
    if(numeros[i] > masGrande){
      masGrande = numeros[i];
    }
  }
  return masGrande;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  var acumulador = 1;
  if(arguments.length === 0){
    return 0;
  }else if(arguments.length === 1){
    return arguments[0];
  }else{
    for(var i = 0; i < arguments.length; i++){
        acumulador = acumulador * arguments[i]
    }
  }
  return acumulador;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  var contador = 0;
  for(var i = 0; i < arreglo.length; i++){
    if(arreglo[i] > 18){
      contador++;
    }
  }
  return contador;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  
  // 1domingo  2lunes  3martes  4miercoles  5jueves  6viernes  7sabado
  // 1 && 7 fin de semana
  // 2, 3, 4, 5, 6 dias laborales

  if(numeroDeDia === 1 || numeroDeDia === 7){
    return "Es fin de semana";
  }
  return "Es dia Laboral";
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  var num = n.toString()
  if(num.charAt(0) === "9"){
    return true;
  }
  return false;
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  for(var i = 0; i < arreglo.length - 1; i++){
    if(arreglo[i] !== arreglo [i+1]){
      return false;
    }
  }
  return true;
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var nuevoArray = [];
  for(var i = 0; i < array.length; i++){
    if(array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre"){
      nuevoArray.push(array[i]);
    }
  }
  if(nuevoArray.length < 3){
  return "No se encontraron los meses pedidos";
  }
  return nuevoArray;
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var newArray = [];
  for(var i = 0; i < array.length; i++){
    if(array[i] > 100){
      newArray.push(array[i])
    }
  }
  return newArray;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var array = [];
  var suma = numero;
  for(var i = 0; i < 10; i++){
    suma = suma + 2;
    if(suma === i){ break;
    }else{
      array.push(suma);
    }
  }
  if(i < 10){
    return "Se interrumpió la ejecución";
  }else{
  return array;
  }
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var array = [];
  var suma = numero;
  for(var i = 0; i < 10; i++){
    if(i === 5){
      continue
    }else{
      suma = suma + 2;
      array.push(suma);
    }
  }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

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
  mayorACien,
  breakStatement,
  continueStatement
};
