let number1= Number(prompt("Ingrese el primer numero:"))
let number2= Number(prompt("Ingrese el segundo numero:"))
 
if (number1 < number2) {
    console.log("El numero mayor es: "+ number1, "y el menor es : " + number2)
}else if(number1 > number2){
    console.log("El numero mayor es: "+ number2, "y el menor es: " + number1)
}else{
    console.log("Los numeros son iguales")
}