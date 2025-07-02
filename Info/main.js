// class User {
//     constructor(name, age, email) {
//     this.name = name;
//     this.age = age;
//     this.email = email
//     }
// };

// class Programador extends User {
//     constructor(name, age, email, language) {
//         super(name, age, email);
//         this.language = language;
//     }
// }

// const jose = Object.create(Programador, {
//         name: { value: "Jose"},
//         age: { value: 25},
//         email: { value: "cc@.com"},
//         lenguage: { value: "JavaScript" },
//         color: { value: "blue" }
//     }
// );
// console.log(jose);


//forma de crear un objeto con un constructor, sin utilizar la palabra new, pero dando acceso a las propiedades del objeto (modifcarlas propiedades del objeto)
// const rya = Object.create(Programador, {
//     name: { value: "Rya" },
//     age: { value: 28 },
//     email: { value: "rya@.com" },
//     }
// );

//creación de un objeto con un constructor, utilizando la palabra new, no se puede modificar las propiedades del objeto con (new), se debe utilizar Object.defineProperty
// const hugo = new Programador("Hugo", 30, "ccc@.com", "JavaScript");

//congela el objeto, no se pueden agregar,eliminar propiedades del objeto ni modificar sus propiedades
//  Object.freeze(hugo);


//me permite modificar las propiedades del objeto, pero si se uliza Objet.freeze, no se podra utilizar 
// Object.defineProperty(hugo, "name", {
//     enumerable: false,
//     configurable: false,
//     writable: false,
// });

// console.log(hugo); 

// let list = Object.entries(hugo);
// console.log(list);

