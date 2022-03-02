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
// });


let company = [
  {
    picture: './images/jessi.jpg',
    name: "Jessi",
    age: 'Age: 33',
    resume: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nihil deleniti distinctio facilis, hic unde quisquam voluptate consequuntur quia nobis nemo repellendus minima dolorum harum excepturi omnis cumque rem commodi.",
    profession: "Profession: Rap-singer"
  },
  {
    picture: './images/tae.jpg',
    name: "Park Jimin",
    age: 'Age: 26',
    resume: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nihil deleniti distinctio facilis, hic unde quisquam voluptate consequuntur quia nobis nemo repellendus minima dolorum harum excepturi omnis cumque rem commodi.",
    profession: "Profession: Model"
  },
  {
    picture: './images/solar.jpg',
    name: "Solar",
    age: 'Age: 29',
    resume: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nihil deleniti distinctio facilis, hic unde quisquam voluptate consequuntur quia nobis nemo repellendus minima dolorum harum excepturi omnis cumque rem commodi.",
    profession: "Profession: Singer"
  },
  {
    picture: './images/minho.jpg',
    name: "Lee Minho",
    age: 'Age: 24',
    resume: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nihil deleniti distinctio facilis, hic unde quisquam voluptate consequuntur quia nobis nemo repellendus minima dolorum harum excepturi omnis cumque rem commodi.",
    profession: "Profession: Actor"
  },
];
const container2 = document.querySelector('#container2');
container2.style.display = 'flex';
company.forEach((item) => {
  const worker = document.createElement('div');
  const img = document.createElement('img');
  const h1 = document.createElement('h1');
  const age = document.createElement('span');
  const p = document.createElement('p');
  const span = document.createElement('span');

  img.src = item.picture;
  h1.textContent = item.name;
  age.textContent = item.age;
  p.textContent = item.resume;
  span.textContent = item.profession;

  worker.style.padding = '15px';
  worker.style.margin = '15px';
  worker.style.border = '2px solid black';
  worker.style.borderRadius = '20px';
  img.style.width = '260px';
  img.style.height = '260px';
  img.style.borderRadius = '50%';
  h1.style.textAlign = 'center';
  age.style.display = 'block';
  age.style.marginBottom = '20px';
  span.style.fontWeight = 'bold';
  span.style.fontSize = '20px';

  worker.append(img);
  worker.append(h1);
  worker.append(age);
  worker.append(span);
  worker.append(p);
  container2.append(worker);
}
)