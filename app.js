const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");

//function that add one example at the end of list (it makes code more reusable)(help to dynamic website)
const generateTemplate = (todo) => {
  //write a template string
  const html = `
     <li class="list-group-item d-flex justify-content-between align-items-center">
         <span>${todo}</span>
         <i class="far fa-trash-alt delete"></i>
     </li>`;
  //add this new template at the end of list
  list.innerHTML += html;
};

//event listener + get event as a promiter action
addForm.addEventListener("submit", (e) => {
  //prevent from reloading
  e.preventDefault();
  //trim is a method to help remove spaces
  const todo = addForm.add.value.trim();
  //to stop from adding empty space (check if todo has length)(if there is a lenght then call the function)
  if (todo.length) {
    generateTemplate(todo);
    //to empty the form
    addForm.reset();
  }
});
//Not working

//dlete todos //attached an event listener to ul
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    e.target.generateElement.remove();
  }
});
