// Misael Edgar Zepeda Díaz
// Ch-34, semana 2-3 
// Practice excersises
/////////////////////////////////////////////////////////////////

console.log("Misael Edgar Zepeda Díaz");
console.log("Ch-34, Semana 2-3");
console.log("Practice excersises");

//Exercise #1 ( sugerencia join() )

console.log("Ejercicio 1");

let arr = ["This", "is", "a", "sentence."];

function printOutString(arreglo) {
    console.log(arreglo[0],arreglo[1],arreglo[2],arreglo[3]);
}

printOutString(arr);

/////////////////////////////////////////////////////////////////
//Exercise #2 (sugerencia map() )

console.log("Ejercicio 2");

function doblar(arreglo) {
    let nuevoArreglo=[];
    for( let i=0; i < arreglo.length; i++)
        {
           nuevoArreglo[i] = arreglo[i]*2; 
        }
    return nuevoArreglo;
}

let arreglo = [1,2,4,5];
console.log(doblar(arreglo));

/////////////////////////////////////////////////////////////////
// Exercise #3 Write a program to compute the sum and 
// product (multiplication) of an array of numbers. 
// Print out the sum and the product.

console.log("Ejercicio 3");

function sumarMultiplicar(arreglo) {
    let suma=0;
    let multiplicacion=[1];
    for( let i=0; i < arreglo.length; i++)
        {
            suma = suma + Number(arreglo[i]);
            multiplicacion = multiplicacion*arreglo[i];
        }
    return [suma,multiplicacion];
}

let arregloDos = [1,2,3,4];
console.log(sumarMultiplicar(arregloDos));

/////////////////////////////////////////////////////////////////
// Exercise #4 (sugerencia filter() e includes() )

console.log("Ejercicio 4");

let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];

function comparaNombres(arregloUno, arregloDos) {
    for( let i = 0; i < arregloUno.length; i++){
        for( let j = 0; j < arregloDos.length; j++){
            if(arregloUno[i] == arregloDos[j]){
                console.log(arregloUno[i]);
            }
        }
    }
}

comparaNombres(student1Courses, student2Courses);

/////////////////////////////////////////////////////////////////
//Exercise #5

console.log("Ejercicio 5");

let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

//1. Write a command that prints out all of the people in the list
console.log("1. Imprimir todos los nombres del arreglo:");
console.log(people);

//2. Write the command to remove "Dani" from the array.
console.log("2. Remover 'Dani' del arreglo: ");
//console.log(people.splice(1,1));
console.log(people);

//3. Write the command to remove "Juan" from the array.
console.log("3. Remover 'Juan' del arreglo:");
//console.log(people.splice(2,1));
console.log(people);

//4. Write the command to move "Luis" to the front of the array.
console.log("4. Mover 'Luis' al princípio del arreglo:");
people.unshift("Luis");
people.splice(2,1);
console.log(people);

//5. Write the command to add your name to the end of the array.
console.log("5. Agregar mi nombre al final del arreglo:");
people.push("Misael");
console.log(people);

//6. Using a loop, iterate through this array and after console.log "Maria", exit from the loop. (usar break)
console.log("6. Usando un ciclo, escribir todos los elementos del arreglo hasta encontrar 'Maria' y romper el ciclo:");
for (let i = 0; i < people.length; i++){
    if( people[i] == "Maria" ){
        break;
    }
    console.log(people[i]);
}

//7. Write the command that gives the indexOf where "Maria" is located.
console.log("7. Mostar el índice de 'Maria' en el arreglo:");
console.log(people.indexOf("Maria"));



/////////////////////////////////////////////////////////////////
// Exercise # 6
// Realizar una función que realice el algoritmo de burbuja.

console.log("Ejercicio 6");
console.log("Realizar función que realice el algoritmo de burbuja:");

let numerosUno = [3, 6, 12, 5, 100, 1];
let aux = 0;

function ordenarNumeros(numerosUno) {
    for( let i = 0; i < numerosUno.length - 1; i++){
        for( let j = i+1; j < numerosUno.length; j++){
            if(numerosUno[i] > numerosUno[j]){
                aux = numerosUno[i];
                numerosUno[i] = numerosUno[j];
                numerosUno[j] = aux;
            }
        }
    }
    return(numerosUno);
