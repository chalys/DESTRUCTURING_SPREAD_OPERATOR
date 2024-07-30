let number = [1,2,3,4,5,6,7,8,9,10];

let [position0, x , position2, y , position4, ...restOfArray] = number;

console.log('valor en la posición 0: ',position0);
console.log('valor en la posición 2: ',position2);
console.log('valor en la posición 4: ',position4);

let newArray = [x,y,...restOfArray];
console.log(newArray);

let mascota = {
    Nombre: "Thayson",
    Tipo: "Perro",
    Color: "Negro",
    Raza: "Mixta"
};

let { Nombre, Tipo, Color, Raza} = mascota
console.log(`Hola les presento a mi mascota su nombre es: ${Nombre}, es un hermoso ${Tipo}, de color: ${Color} y su raza es: ${Raza}.`);