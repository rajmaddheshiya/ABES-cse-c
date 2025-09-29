let todolist=[
{ item: 'buy milk',
  duedate: '23/09/2025'
},

{ item: 'Go to college',
  duedate:'30/09/2025'
},
];
displayItems();

function addTodo(){
  let inputElement= document.querySelector('#todo-input');
  let dateElement= document.querySelector('#todo-date');
  let todoItem=inputElement.value;
  let tododate=dateElement.value;
  todolist.push({item:todoItem, duedate:tododate});
  inputElement.value='';
  dateElement.value='';

  displayItems();
}

function displayItems(){
let containerElement=document.querySelector('.todo-container');

let newHtml='';

for(let i=0;i<todolist.length;i++){
// let item = todolist[i].item;
// let duedate = todolist[i].duedate;
 let {item,duedate} = todolist[i];
  newHtml += `
  
   <span>${item}</span>
   <span>${duedate}</span>
   <button class="btn-delete" onclick="todolist.splice(${i},1); displayItems();">Delete</button>
  
  `;
}
containerElement.innerHTML = newHtml;
}