// let fruits = ['apple', 'banana', 'qiwi', 'peach'];
// fruits.forEach(element => {
//   console.log(element);
// });

// let fruits = ['apple',
//   'banana',
//   false,
//   13,
//   'hello',
//   ['1', '2', '3'],
//   { name: 'JK', lastname: 'Jeon'},
//   12345];
// fruits.forEach((item) => {
//   console.log(typeof item);
// });

// let biases = [
//   {
//     name: 'Taehyung',
//     lastName: 'Kim',
//     age: 26
//   },
//   {
//     name: 'Lucas',
//     lastName: 'Wong',
//     age: 24
//   },
//   {
//     name: 'Jisung',
//     lastName: 'Han',
//     age: 22
//   },
//   {
//     name: 'Hoseok',
//     lastName: 'Jung',
//     age: 28
//   }
// ];
// let container = document.querySelector('#container');
// container.style.border = '1px solid black';
// container.style.padding = '5px';
// biases.forEach((item) => {
//   let person = document.createElement('div');
//   person.style.padding = '3px';
//   let name = `${item.name}, `;
//   let lastName  = `${item.lastName}, `;
//   let age  = item.age;
//   person.append(name);
//   person.append(lastName);
//   person.append(age);
//   container.append(person);
// }
// )


let company = [
  {
    name: "Hendery",
    resume: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nihil deleniti distinctio facilis, hic unde quisquam voluptate consequuntur quia nobis nemo repellendus minima dolorum harum excepturi omnis cumque rem commodi.",
    profession: "Front-end"
  },
  {
    name: "YangYang",
    resume: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nihil deleniti distinctio facilis, hic unde quisquam voluptate consequuntur quia nobis nemo repellendus minima dolorum harum excepturi omnis cumque rem commodi.",
    profession: "Java"
  },
  {
    name: "Kun",
    resume: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nihil deleniti distinctio facilis, hic unde quisquam voluptate consequuntur quia nobis nemo repellendus minima dolorum harum excepturi omnis cumque rem commodi.",
    profession: "3D Model"
  },
  {
    name: "Ten",
    resume: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nihil deleniti distinctio facilis, hic unde quisquam voluptate consequuntur quia nobis nemo repellendus minima dolorum harum excepturi omnis cumque rem commodi.",
    profession: "Designer"
  },
];
let container = document.querySelector('#container2');
container2.style.border = '1px solid black';
container2.style.padding = '5px';
company.forEach((item) => {
  let worker = document.createElement('div');
  worker.style.padding = '3px';
  let h1 = document.createElement('h1');
  let p = document.createElement('p');
  let span = document.createElement('span');
  let h1 = `${item.name}, `;
  let p = `${item.resume}, `;
  let span = item.profession;
  worker.append(h1);
  worker.append(p);
  worker.append(span);
  container2.append(worker);
}
)