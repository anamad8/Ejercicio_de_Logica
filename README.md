<p align='left'>
    <img src='./img/logo.png' </img>
</p>

# Ejercicio de Lógica de Programación: Encuentra el Número Perdido


## Descripción:

Dado un conjunto de números enteros del 1 al N, donde N es un número impar mayor o igual a 3, todos los números están presentes dos veces, excepto uno. Tu tarea es encontrar ese
número único.


## Ejemplo:

Si tenemos el conjunto {1, 3, 2, 4, 2, 1, 3}, el número único es 4, ya que aparece solo una vez

## Instrucciones:

* Escribe un algoritmo en javascript o algún lenguaje, para encontrar el número único en un conjunto dado
* Utiliza estructuras de control de flujo, como bucles y condiciones, para implementar tu algoritmo.
* Asegúrate de manejar casos donde el conjunto de números sea válido (cumple con las condiciones descritas) y proporcione un resultado correcto.

## Preguntas para el Resolver:

* ¿Cómo abordaste el problema?
    - Primero que pensé fue que cuando el usuario escriba una cadena de números encuentre el número que no se repita, como estaba en el ejemplo.
    Por eso primero creé el HTML. Luego, ya que lo tenía, continué con el JavaScript, donde creé las funciones para que cuando el número se repita no se muestre, y para que cuando se repita se muestre.
    Cuando ya tenía esa parte hecha, la mejoré, de modo que cuando el usuario ingrese dos números iguales, por ejemplo, le diga "No se pudo detectar el número", o si ingresa una letra en el input, le diga "Entrada inválida: solo se permiten números separados por comas".
    Luego, cuando terminé con el JavaScript, seguí con el CSS para que quedara más bonito y el usuario pudiera ver mejor. 


* ¿Qué estrategia utilizaste para identificar el número único?
    - Primero que pence fue identificar el numero que no se repita. 
    El cual verifico si la entrada del usuario es válida, asegurándome de que solo contenga números separados por comas.  Luego, divido la entrada en una matriz de números y utilizo un conjunto para realizar un seguimiento de los números que he visto. Recorro la matriz de números y, por cada número, compruebo si ya está en el conjunto. Si está, lo elimino del conjunto; de lo contrario, lo agrego. Al final, el único número que queda en el conjunto es el número único en el conjunto de entrada. Si no se detecta ningún número único, muestro un mensaje indicando que no se pudo detectar el número.

* ¿Cómo manejas los casos donde el conjunto no cumple con las condiciones?
    -  Verifico si el conjunto tiene un número impar de elementos antes de comenzar el proceso de búsqueda del número único. Si el conjunto no cumple con esta condición, retorno un mensaje indicando que el conjunto no cumple con las condiciones especificadas.






