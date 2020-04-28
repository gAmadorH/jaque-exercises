# jaque-exercises
[![build state](https://travis-ci.com/gAmadorH/jaque-exercises.svg?branch=master)](https://travis-ci.com/gAmadorH/jaque-exercises)
[![coverage status](https://coveralls.io/repos/github/gAmadorH/jaque-exercises/badge.svg)](https://coveralls.io/github/gAmadorH/jaque-exercises)
[![dependencies status](https://david-dm.org/gAmadorH/jaque-exercises.svg)](https://david-dm.org/gAmadorH/jaque-exercises)
[![dev dependencies status](https://david-dm.org/gAmadorH/jaque-exercises/dev-status.svg)](https://david-dm.org/gAmadorH/jaque-exercises#info=devDependencies)
[![license](https://img.shields.io/github/license/gAmadorH/jaque-exercises.svg?color=blue)](https://github.com/gAmadorH/jaque-exercises/blob/master/LICENSE)
[![code style](https://img.shields.io/badge/code_style-eslint-blueviolet.svg)](https://eslint.org/)
[![style guide](https://img.shields.io/badge/style_guide-airbnb-ff69b4.svg)](https://eslint.org/)

Technical test using Javascript

## install

```bash
git clone https://github.com/gAmadorH/jaque-exercises.git
cd jaque-exercises
```

## run scripts

```bash
# greeting
npm start 

# test
npm test

#code coverage
npm run cover

# linter
npm run lint
```

## exercise 1 - largest contiguous succession sub array

Escribir una función que reciba un arreglo de números y obtenga el subarreglo más  
grande en el que cada elemento del subarreglo sea mayor que el anterior. Por ejemplo si  
el arreglo es [3,2,5,9,1,3] tiene regresar [2,5,9]  

### logica

const { length } = array;
se declaran un areglo aux1 de la misma longitud que el arr de entrada lleno de 1
aux1 = [1, 1, 1, ...]
se declaro un arr aux2 con cada elemento de arr de entrada como arreglos
aux2 = [[element1], [element2], [element3], ...]

se calcula la longitud de los sub arreglos acendentes posibles en en arr de entrada y se almacenan en el auxiliar
arr [0, 3, 2, 4]
long [1, 2, 1, 3]

el primer sub array correspondiente al elemento 1 tiene longitud 1, debido que no hay elemento menor anterior a el [0]
el segundo sub array corresponiende al elemento 2 tiene longitud 2, debido a que hay elementos menores anterior a el [0, 3]
el tercer sub array corresponiende al elemento 3 tiene longitud 1, debido a que no hay elementos menores anterior a el [2]
el cuarto sub array corresponiende al elemento 4 tiene longitud 3, debido a que hay elementos menores anterior a el [1, 3, 4]

encuentra la longitud del sub array maxima
encuentra el indice correspondinte a esa longitud maxima
devuelve el array acendente correspondiente a ese indice

### complejidad

time:

```text
aux1 = new Array(length).fill(1);     O(n)  
aux2 = array.map((item) => [item]);   O(n)  

for (let i = 1; i < length; i += 1) {  
  for (let j = 0; j < i; j += 1) {    O(n^2)  
  }  
}

runtime complexity = O(n^2)
```


space:

```
const aux1 = new Array(length).fill(1);   O(n)
const aux2 = array.map((item) => [item]); O(n)

for (let i = 1; i < length; i += 1) {
  for (let j = 0; j < i; j += 1) {
    if (array[i] > array[j]) {
      aux1[i] = aux1[j] + 1;
      aux2[i] = aux2[j].concat([array[i]]);   O(n^2)
    }
  }
}

ejemplo en el peor de los caoss
[0, 1, 2, 3, 4, ..., n]

  aux2 = [
    [0],
    [0, 1],
    [0, 1, 2],
    [0, 1, 2, 3],
    ....
    [0, 1, 2, 3, .., n]
  ]

space complexity = O(n^2)
```
<p>&nbsp;</p>


## exercise 2 - sum range of values

Escribir una función que reciba 2 enteros no negativos n y m y obtenga el resultado de  
n+(n+1)+(n+2)+...+m. Por ejemplo si los numeros son 3 y 6 la respuesta debe ser 18  
que es el resultado de 3+4+5+6.  

### logica

defines una variable acumuladora
total = 0

empeizas un ciclo desde el numero minimo
i = min

que termina hasta el numero maxico
i <= max

sumas al acumulador en cada iteracion
total += i

### complejidad

time:

iteraciones n = max - nin
runtime complexity = O(n)

space:

total = una variable

space complexity = O(1)

<p>&nbsp;</p>


## exercise 3 - k-th largest element

Dado un arreglo de números desordenado y un entero k, escribe una función que  
encuentre el k-ésimo elemento más grande. Por ejemplo si el arreglo es [7,2,5,9,8,3] y k  
es 2 debe regresar 8.  

### logica

remueves duplicados del array
ordenas el array
extraes el numero n desde el final

### complejidad

```
time:

noDuplicates(arry)    O(n)   ver ejercio 4
arr.sort()            O(nlog(n))

runtime complexity = O(nlog(n))
```

```
space:

noDuplicates(arry)    O(n)   ver ejercio 4

space complexity = O(n)
```

<p>&nbsp;</p>


## exercise 4 - remove duplicate elements of array

Escribe una función que reciba un arreglo de números y quite los elementos duplicados.  

### logica

inicialisa un array vacio de salida
output = []

iteras sobre el array de entrada
  por cada elemento verificas si este ya existe en el array de salida
    si no existe lo insertas en el array de salida

### complejidad

```
time:

input.forEach((element) => {          O(n)
  if (!output.includes(element)) {    O(1)
    output.push(element)              O(1)
  }
})

runtime complexity = O(n)
```

```
space:

space complexity = O(n)  en el peor de los casos ninguno se repite
```

<p>&nbsp;</p>


## exercise 5 - balance brackets and square brackets expression

Dada una cadena de paréntesis y corchetes escribe una función que regresa si la  
cadena está bien balanceada, es decir, por cada paréntesis o corchete que abre hay uno  
al mismo nivel que que cierra. Por ejemplo si recibe ‘([])’ o ‘[()[]]’ tiene que regresar true y  
si recibe ‘([)]’ tiene que regresar false.  


### logica
inicalizas stack como arreglo vacio
stack = []

inicializas una bandera de balance y la declaras como falso
isBalanced = false

se iterara por cada caracter de la expresion
from 0 to express.length
  si el elemento es '(' o '[' (elementos de apertura de expresion)  
    estos se meten a la stack
  de lo contrario seran evaluados de forma diferente
    si el stack esta vacio
      el ciclo termina (esto significa que en iteraciones anteriores jamas se inserto un bracket de inicio)

    por otro lado sino paso lo anterior se saca el ultimo elemento insertado del stack
  
    si el ultimo elemento es de apertura y el elemento de iteracion no lo cierra
      el ciclo termina (no se pudo balancear)

despues de la iteracion la pila deberia quedar vacia
  si fue asi la bandera de balance es cambiado a verdadero

### complejidad

```
time:
const array = expression.split('');  O(n)

for (let i = 0; i < array.length; i += 1) {    O(n)
  if (['(', '['].includes(element)) {          O(1)
    stack.push(element);                       O(1)
  } else {
    if (stack.length <= 0) {
      break;
    }

    const currentElement = stack.pop();         O(1)

    if (currentElement === '(' && element !== ')') {
      break;
    }

    if (currentElement === '[' && element !== ']') {
      break;
    }
  }
}

runtime complexity = o(n)
```

```
space:

const array = expression.split('');     O(n)
const stack = [];
let isBalanced = false;

for (let i = 0; i < array.length; i += 1) {
  const element = array[i];                   O(1)

  if (['(', '['].includes(element)) {
    stack.push(element);                      O(n) en el peor de los casos (todos fueran elementos de entrada)
  } else {
    if (stack.length <= 0) {
      break;
    }

    const currentElement = stack.pop();

    if (currentElement === '(' && element !== ')') {
      break;
    }

    if (currentElement === '[' && element !== ']') {
      break;
    }
  }
}

space complexity = o(n)
```


<p>&nbsp;</p>


## exercise 6 - schedules and classrooms

Tienes un conjunto de clases que tienen una hora de inicio y una de final, hay que
acomodarlas en el menor número de salones sin que se traslapan, una clase de 11:00 a
14:00 no puede estar en el mismo salón que una de 12:00 a 15:00. Escribe una función
que encuentre ese número de salones, por ejemplo si tienes clases de 11:00 a 14:00,
12:00 a 15:00 y 14:30 a 16:00 el menor número de salones es 2.

### logica
se realizo un mapa de bit en un array por cada media hora del dia (cada media hora inicia en 0)
por cada schedule de los schedules totales de entrada
  se calcula los indices de inicio y fin de la clase
  se itera sobre el rango de inidicies calculados
    se suma a la casilla de la hora correspondiente

  se calcula cual es el numero maxico en el mapa y se optiene el numero minimo de salones necesarios

### complejidad

```
time:

schedules.forEach((schedule) => {                           O(n)
    const [hour1, half1] = schedule[0].split(':');
    const [hour2, half2] = schedule[1].split(':');

    const startIndex = 2 * hour1 + (half1 === '30' ? 1 : 0);
    const endIndex = 2 * hour2 + (half2 === '30' ? 1 : 0);

    for (let i = startIndex; i <= endIndex; i += 1) {     O(n)
      map[i] += 1;
    }
  });

runtime complexity = o(n^2)
```

```
space:

const map = [
  0, 0, // 00:00 - 00:30   index 0, 1
  0, 0, // 01:00 - 01:30   index 2, 3
  0, 0, // 02:00 - 02:30   index 4, 5
  0, 0, // 03:00 - 03:30   index 6, 7
  0, 0, // 04:00 - 04:30   index 8, 9
  0, 0, // 05:00 - 05:30   index 10, 11
  0, 0, // 06:00 - 06:30   index 12, 13
  0, 0, // 07:00 - 07:30   index 14, 15
  0, 0, // 08:00 - 08:30   index 16, 17
  0, 0, // 09:00 - 09:30   index 18, 19
  0, 0, // 10:00 - 10:30   index 20, 21
  0, 0, // 11:00 - 11:30   index 22, 23

  0, 0, // 12:00 - 12:30   index 24, 25
  0, 0, // 13:00 - 13:30   index 26, 27
  0, 0, // 14:00 - 14:30   index 28, 29
  0, 0, // 15:00 - 15:30   index 30, 31
  0, 0, // 16:00 - 16:30   index 32, 33
  0, 0, // 17:00 - 17:30   index 34, 35
  0, 0, // 18:00 - 18:30   index 36, 37
  0, 0, // 19:00 - 19:30   index 38, 39
  0, 0, // 20:00 - 20:30   index 40, 41
  0, 0, // 21:00 - 21:30   index 42, 43
  0, 0, // 22:00 - 22:30   index 44, 45
  0, 0, // 23:00 - 23:30   index 46, 47
];

space complexity = o(48)
```

<p>&nbsp;</p>
