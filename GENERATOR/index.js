// Los generadores son funciones de las que se puede salir y volver a entrar.
      // Su contexto (asociación de variables) será conservado entre las reentradas.
      // Cada vez que llamamos next, la ejecución del generador va a continuar hasta el proximo yield
function* simpleGenerator() {
    console.log('GENERATOR START');
    yield 1;
    yield 2;
    yield 3;
    console.log('GENERATOR END');
}

// const gen = simpleGenerator();

// Podemos hacer generadores infinitos.
function* idMaker() {
    let id = 1;
    while (true) {
        yield id;
        id = id + 1;
    }
}

// Cuando llamamos next también podemos pasar valores que la función recibe.
function* idMakerWithReset() {
    let id = 1;
    let reset;
    while (true) {
        reset = yield id;
        if (reset) {
        id = 1;
        } else {
        id = id + 1;
        }
    }
}

// Ahora hagamos un ejemplo un poco más complejo: la secuencia fibonacci
function* fibonacci() {
    let a = 1;
    let b = 1;
    while (true) {
        const nextNumber = a + b;
        a = b;
        b = nextNumber;
        yield nextNumber;
    }
}
