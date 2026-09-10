const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];

// 4.1 - Saca a "Tendo" por consola atacando su posicion
console.log(aldeanos[3]);

// 4.2 - Coloca en el ultimo lugar de este array a "Cervasio"
aldeanos.push("Cervasio");
console.log(aldeanos);

// 4.3 - Cambia el primer elemento de este array por "Bambina"
aldeanos[0] = "Bambina";
console.log(aldeanos);

// 4.4 - Dale la vuelta a este array
aldeanos.reverse();
console.log(aldeanos);

// 4.5 - Cambia a "Narciso" por "Canela" haciendo uso de un metodo de array
let indiceNarciso = aldeanos.indexOf("Narciso");
if (indiceNarciso !== -1) {
  aldeanos.splice(indiceNarciso, 1, "Canela");
}
console.log(aldeanos);

// 4.6 - Imprime por consola el ultimo elemento sin atacar a la posicion explicitamente
console.log(aldeanos[aldeanos.length - 1]);