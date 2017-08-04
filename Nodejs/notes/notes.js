const fs = require('fs');

let addNote = (title, body) => {
  let notes = [];
  let note = {
    title,
    body
  };

  try {
    let noteString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(noteString);
  } catch(e) {
    
  }

  notes.push(note);
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

let getAll = () => {
  console.log('Getting notes...');
};

let getNote = (title) => {
  console.log('Getting note... ', title);
};

let removeNote = (title) => {
  console.log('Removing note... ', title);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
}
