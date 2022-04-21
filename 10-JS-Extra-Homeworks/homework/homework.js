// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  return Object.entries(objeto)
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el string y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var splitedString = string.split('')
  var counterObj = {}
  
  splitedString.forEach(function(element){
    let counter = 0;
    for(let i = 0; i<splitedString.length; i++){
      if(element === splitedString[i]){
        counter++;
      }
    }
    counterObj[element] = counter
  })
  return counterObj
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var sArr = s.split('')
  var sArrUpper = []
  var sArrLower = []
  var capToFrontArr = []

  for(let i = 0; i<sArr.length; i++){
    (sArr[i] === sArr[i].toUpperCase())? sArrUpper.push(sArr[i]): sArrLower.push(sArr[i]);
  }

  return capToFrontArr.concat(sArrUpper, sArrLower).join('')
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var strWords = str.split(' '); 
  var asMirrorArr = []
  
  strWords.forEach(function(element){
    asMirrorArr.push(element.split('').reverse().join(''))
  })

  return asMirrorArr.join(' ')
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  return (numero.toString() === numero.toString().split('').reverse().join(''))? 'Es capicua': 
  'No es capicua'; 
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var strArr = cadena.split('')
  var arrWithOut = []

  for(let i = 0; i<strArr.length; i++){
    if(strArr[i] === 'a'|| strArr[i] === 'b'|| strArr[i] === 'c'){
      continue; 
    } else {
      arrWithOut.push(strArr[i])
    }
  }

  return arrWithOut.join('')
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var asc = arr.sort((a,b) => a.length - b.length)
  return asc
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí 
  var interArr = [] 
  for(let i = 0; i<arreglo1.length; i++){
    for(let j = 0; j<arreglo2.length; j++){
      if(arreglo1[i]===arreglo2[j]){
        interArr.push(arreglo1[i])
      }
    }
  }
  return interArr
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

