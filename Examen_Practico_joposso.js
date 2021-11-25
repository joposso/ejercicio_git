// Examen
//Punto_1
var numero1 = 5;
var numero2 = 8;
if (numero1 <= numero2) {
    alert("numero1 no es mayor que numero2")
}

if (numero2 >= 0) {
    alert("numero 2 es positivo")
}

if (numero1 < 0 || numero1 != 0) {
    alert("numero1 es negativo o distinto de cero")
}

if (++numero1 < numero2) {
    alert("incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2")
}



//punto_2
factorial = 5;
let temp = 1;
for (let i = 1; i <= factorial; i++) {
    temp *= i;
}
console.log(temp);


//punto_3
var numero = prompt("introduce un numero entero");
var resultado = parImpar(numero);
alert("el numero" + numero + "es" + resultado);

function parImpar(numero) {
    if (numero % 2 == 0) {
        return "par";
    }
    else {
        return "impar";
    }
}

//punto_4
function palindromo(cadena) {

    var resul = "La cadena \"" + cadena + "\" \n";
    var cadenaOr = cadena.toLowerCase();
    var letras = cadenaOr.split("");
    var cadena = "";
    for (i in letras) {
        if (letras[i] != " ") {
            cadena += letras[i];
        }
    }

    var letras = cadena.split("");
    var letrasReves = cadena.split("").reverse();
    var iguales = true;
    for (i in letras) {
        if (letras[i] == letrasReves[i]) {
        }
        else {
            iguales = false;
        }
    }

    if (iguales) {
        resul += " es un palíndromo";
    }
    else {
        resul += " no es un palíndromo";
    }

    return resul;
}

alert(palindromo("La ruta nos aporto otro paso natural"));

//punto_Bonus
function combinaciones(string, origen = '') {
    if (string.length == 1) {
        return [origen + string];
    } else {
        let res = [];
        for (let i = 0; i < string.length; i++) {
            res.push(
                ...combinaciones(string.substr(0, i) + string.substr(i + 1), string[i])
                    .map(x => origen + x)
            );
        }
        return res;
    }
}

function difer(array) {
    return [...new Set(array)];
}

function combinaciones1(string) {
    return difer(combinaciones(string));
}


var resul = combinaciones1('casa');

console.log(resul);

//punto_5

//Clase persona con las propiedades nombre y edad

Class persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    obtDetalle() {
        console.log(this.nombre);
        Console.log(this.edad);
    }

      

