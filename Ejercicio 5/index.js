let edad = Number(prompt("Ingrese su edad:"))
let permisson =prompt("tiene permiso  si/no :")
 
if (edad >= 18 && permisson.toLowerCase() === "si") {
    console.log("Has ingresado con exito")
}else{
    console.log("No puedes ingresar")
}