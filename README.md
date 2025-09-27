# WEB-Laboratorio4

Preguntas

---
Pag 8: ¿Qué ocurre en cada caso presentado anteriormente con los operadores y porqué JS me permite esto?

- const expresion1 = (3 + 7) * 10;  ->  Se opera primero el paréntesis y luego se realiza la operación exterior.
- const expresion2 = 3 + 7 * 10;  ->  Se opera primero la multiplicación y luego la suma.
- const expresion3 = 2 ** 3 ** 2;  ->  Se operan los exponentes de derecha a izquierda.
- const sumaYAsigna = ++inicio;  ->  El valor de 'inicio' se aumenta en uno y luego se asigna a la variable.
- const asignaYSuma = inicio++;  ->  El valor de 'inicio' se asigna a la variable y luego se aumenta en uno.
- const restaYAsigna = --inicio;  ->  El valor de 'inicio' se disminuye en uno y luego se asigna a la variable.
- const asignaYResta = inicio--;  ->  El valor de 'inicio' se asigna a la variable y luego se disminuye en uno.
- x = y;  ->  El valor de 'y' se asigna a 'x'.
- x += z;  ->  El valor "x + z" se asigna a 'x'.
- x *= y;  ->  El valor "x * y" se asigna a 'x'.
- x /= y;  ->  El valor "x / y" se asigna a 'x'.
- x %= x;  ->  El valor "x % x" se asigna a 'x'.


---
Pag 9: ¿El comportamiento de los flujos de control es similar a otros lenguajes y ambientes de desarrollo?

Es similar a otros lenguajes con la diferencia de que JS ofrece más flexibilidad en relación a el tipo de variables que se usan para las comparaciones.
El operador "==" permite hacer comparaciones con variables de distinto tipo, las cuales pueden devolver 'true' si los valores son equivalentes; esto no sucede en otros lenguajes de programación. Adicionalmente el operador '===' se puede usar si es necesario que las variables tengan el mismo valor y el mismo tipo.
