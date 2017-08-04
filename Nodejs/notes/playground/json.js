// Converting object to string
// let obj = {
//   name: 'Andrew',
// };
//
// let stringObj = JSON.stringify(obj);

//Converting string to object
// let personString = '{"name": "Jarred", "age": 20}';
// let person = JSON.parse(personString);

const fs = require('fs');

let originalNote = {
  title: 'Title',
  body: 'Body',
};

let originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString);

let noteString = fs.readFileSync('notes.json');

let note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);
