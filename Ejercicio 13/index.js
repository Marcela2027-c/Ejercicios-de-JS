let opcion = Number(prompt("Ingresa la tabla que desee ver"))
 
for (let i = 1; i <= 10; i++) {
    console.log(opcion + "x" + i + "=" + (i * opcion))
}
 
14
 
let suma = 0;
 
for (let i = 1; i <= 100; i++) {
    suma = suma + i;
}
 
console.log("La suma del 1 al 100 es: " + suma)
 