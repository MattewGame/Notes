document.addEventListener('DOMContentLoaded', function() {
    displayNotes();
});

function addNote() {
    let noteInput = document.getElementById('noteInput').value;
    if (noteInput === '') {
        alert('Введите текст заметки');
        return;
    }

    let notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.push(noteInput);
    localStorage.setItem('notes', JSON.stringify(notes));

    displayNotes();
    document.getElementById('noteInput').value = '';
}

function displayNotes() {
    let notes = JSON.parse(localStorage.getItem('notes')) || [];

    let noteList = document.getElementById('noteList');
    noteList.innerHTML = '';

    notes.forEach(function(note, index) {
        let li = document.createElement('li');
        li.textContent = note;
        noteList.appendChild(li);
    });
}