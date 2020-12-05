// for all of document

document.getElementById("addBtn").addEventListener("click",function (e) {
  var input = document.getElementById("inputField").value;
 
  if (input == "" || input == " ") {
    document.getElementById("show").innerText = "Note-Down Your Task !";
  } else {
    
    var createList = document.createElement("li");
    var createBtn = document.createElement("button");
    var mainList = document.getElementById("mainList");
    createList.innerText = input;
    createBtn.innerText = "Del";
    createBtn.className = "Btn";
    createList.appendChild(createBtn);
    createList.className = "list";
    mainList.appendChild(createList);
    

    // for input blank
    var Blank = document.getElementById('inputField') ;
    Blank.value = '';
    
    
  }
 
  e.preventDefault();
});

document.querySelector("#mainList").addEventListener("click", function (e) {
  if (e.target.parentElement.classList.contains("list")) {
    if (confirm("Really finished this task ?")) {
      e.target.parentElement.remove();
    }
  }
});
