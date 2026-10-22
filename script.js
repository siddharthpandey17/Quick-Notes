// Quick Notes starter: implement these features step by step.
const noteForm=document.querySelector("#note-form"), titleInput=document.querySelector("#note-title"), contentInput=document.querySelector("#note-content");
const saveButton=document.querySelector("#save-button"), cancelEditButton=document.querySelector("#cancel-edit"), editorHeading=document.querySelector("#editor-heading"), formStatus=document.querySelector("#form-status");
const searchInput=document.querySelector("#search-notes"), sortSelect=document.querySelector("#sort-notes"), notesGrid=document.querySelector("#notes-grid"), emptyState=document.querySelector("#empty-state"), noteCount=document.querySelector("#note-count");
// TODO 1: Load notes from localStorage (or start with []).
let notes=[];
let editingId=null;
// TODO 2: Implement saveNotes() with localStorage.
// TODO 3: Implement renderNotes(): search, sort and display note cards.
// TODO 4: Create/update notes in the form submit handler.
// TODO 5: Add pin/unpin and delete actions using event delegation.
// TODO 6: Implement cancel-edit behavior and update the note count.
// Use textContent for user-entered text to avoid injecting HTML.
noteForm.addEventListener("submit",(event)=>{event.preventDefault();/* TODO: validate, create/update, save and render */formStatus.textContent="Complete the TODOs in script.js to save notes.";});
searchInput.addEventListener("input",()=>{/* TODO: renderNotes() */});
sortSelect.addEventListener("change",()=>{/* TODO: renderNotes() */});
cancelEditButton.addEventListener("click",()=>{/* TODO: reset editingId and form UI */});
// Initial render goes here after implementing renderNotes().
