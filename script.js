// Ejemplo de uso de funciones
function mostrarMensaje() {
    alert('¡Hola, mundo!');
}

function limpiarConsola() {
    console.clear();
}

// Control de Flujo
function ejecutarIfElse() {
    let numero = 5;
    if (numero > 0) {
        console.log('El número es positivo');
    } else {
        console.log('El número es negativo o cero');
    }
}

function ejecutarSwitch() {
    let dia = 2;
    switch (dia) {
        case 1:
            console.log('Lunes');
            break;
        case 2:
            console.log('Martes');
            break;
        default:
            console.log('Otro día');
    }
}

// Bucles
function ejecutarFor() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}

function ejecutarWhile() {
    let i = 0;
    while (i < 5) {
        console.log(i);
        i++;
    }
}

function ejecutarDoWhile() {
    let j = 0;
    do {
        console.log(j);
        j++;
    } while (j < 5);
}

// Funciones
function ejecutarFunciones() {
    console.log(sumar(3, 4)); // 7
}

function sumar(a, b) {
    return a + b;
}

// Manejo de Errores
function ejecutarTryCatch() {
    try {
        throw new Error('¡Algo salió mal!');
    } catch (e) {
        console.error(e.message);
    }
}

function ejecutarObjetosError() {
    const error = new Error('Este es un error');
    console.log(error.message);
}

// Operadores
function ejecutarOperadoresAritmeticos() {
    let a = 10;
    let b = 5;
    console.log('Suma '+  (a + b)); // Suma
    console.log('Resta '+ (a - b)); // Resta
    console.log('Multiplicación '+ (a * b)); // Multiplicación
    console.log('División ' + (a / b)); // División
    console.log('Módulo ' + (a % b)); // Módulo
}

function ejecutarOperadoresLogicos() {
    let x = true;
    let y = false;
    console.log(x && y); // AND
    console.log(x || y); // OR
    console.log(!x); // NOT
}

// Números y Fechas
function ejecutarNumero() {
    let numero = Number('42');
    console.log(numero); // 42
}

function ejecutarMath() {
    console.log(Math.sqrt(16)); // 4
    console.log(Math.random()); // Número aleatorio entre 0 y 1
}

function ejecutarDate() {
    let fecha = new Date();
    console.log(fecha); // Fecha y hora actuales
}

// Colecciones
function ejecutarArreglos() {
    let arreglo = [1, 2, 3, 4, 5];
    console.log(arreglo[0]); // 1
}

function ejecutarArreglosTipados() {
    let arregloTipado = new Int32Array(5);
    arregloTipado[0] = 10;
    console.log(arregloTipado[0]); // 10
}

// DOM
function ejecutarDOM() {
    let elemento = document.getElementById('miElemento');
    console.log('Elemento encontrado:', elemento); // Imprime el elemento con id 'miElemento'
}
