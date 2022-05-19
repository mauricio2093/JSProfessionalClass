      // Establece `this` usando `call`
function saludar() {
  console.log(`Hola. Soy ${this.name} ${this.apellido}`);
}

const richard = {
  name: 'Richard',
  apellido: 'Kaufman López',
};

saludar.call(richard);

// Establece `this` usando `call` y pasar argumentos a la función
function caminar(metros, direccion) {
  console.log(`${this.name} camina ${metros} metros hacia ${direccion}.`);
}

caminar.call(richard, 400, 'norte');

// Establece `this` usando `apply` y pasar argumentos a la función
const valores = [800, 'noreste'];
caminar.apply(richard, valores);

/*
  Call - comma
  Apply - arreglo
*/

// Establecer `this` en una nueva función usando `bind`
const daniel = { name: 'Daniel', apellido: 'Sánchez' };
const danielSaluda = saludar.bind(daniel);
danielSaluda();

const danielCamina = caminar.bind(daniel, 2000);
danielCamina('oeste');

// Cuándo es útil usar uno de estos métodos
const buttons = document.getElementsByClassName('call-to-action');
// buttons.forEach(button => {
//   button.onclick = () => alert('Nunca pares de aprender!');
// });

// NodeList
Array.prototype.forEach.call(buttons, button => {
  button.onclick = () => alert('Nunca pares de aprender!');
});
