showNotes(); 
 let addBtn = document.getElementById('addBtn');
 addBtn.addEventListener('click', function(e){
     let text = document.getElementById("text");
     let notes = localStorage.getItem("notes");
     if (notes==null) {
       notesObj = [];
     } else {
    notesObj=JSON.parse(notes);
     }
     notesObj.push(text.value);
     localStorage.setItem("notes", JSON.stringify(notesObj));
     text.value = "";
     console.log(notesObj);
     showNotes();    
 })
 function showNotes(){ // show element from local storage
     let notes = localStorage.getItem("notes");
     if(notes==null) {
         notesObj = [];   
     }
     else {
        notesObj=JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function(e,i) {
        html += `<div class="mx-3 my-3 card" style="width: 18rem;">
        <!-- <img src="..." class="card-img-top" alt="..."> -->
        <div class="card-body">
          <h5 class="card-title">Note ${i +1}</h5>
          <p class="card-text">${e }</p>
          <button id="${i}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete</button>
        </div>
      </div>`;
    });
    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0){
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = "No notes";
    }
 }
function deleteNote(i){ //delete notes
    console.log("delete",i);
    let notes = localStorage.getItem("notes");
     if (notes==null) {
         notesObj = [];
     } else {
         notesObj=JSON.parse(notes);
     }
     notesObj.splice(i,1);
     localStorage.setItem("notes", JSON.stringify(notesObj));
     showNotes();
}

