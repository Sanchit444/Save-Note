showNotes(); 
 let addBtn = document.getElementById('addBtn');
 addBtn.addEventListener('click', function(e){
     let text = document.getElementById("text");
     let notes1 = localStorage.getItem("notes1");
     if (notes1==null) {
       notesObj = [];
     } else {
    notesObj=JSON.parse(notes1);
     }
     if(text.value == ""){
    alert("Please write something");
     }else{
     notesObj.push(text.value);
     localStorage.setItem("notes1", JSON.stringify(notesObj));
     text.value = "";
     console.log(notesObj);
     showNotes();    
 }})
 function showNotes(){ // show element from local storage
     let notes1 = localStorage.getItem("notes1");
     if(notes1==null) {
         notesObj = [];   
     }
     else {
        notesObj=JSON.parse(notes1);
    }
    let html = "";
    notesObj.forEach(function(e,i) {
        html += `<div class="mx-3 my-3 card" style="width: 18rem;">
        <!-- <img src="..." class="card-img-top" alt="..."> -->
        <div class="card-body">
          <h5 class="card-title">Note ${i +1}</h5>
          <p class="card-text">${e }</p>
          <button id="${i}" onclick="deleteNote(this.id)" class="btn btn-danger">Delete</button>
        </div>
      </div>`;
    });
    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0){
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = "<h3>No notes</h3>";
    }
 }
function deleteNote(i){ //delete notes
    console.log("delete",i);
    let notes1 = localStorage.getItem("notes1");
     if (notes1==null) {
         notesObj = [];
     } else {
         notesObj=JSON.parse(notes1);
     }
     notesObj.splice(i,1);
     localStorage.setItem("notes1", JSON.stringify(notesObj));
     showNotes();
}

