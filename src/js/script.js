const stack =[];

const maxStackSize = 5;

const inputBox = document.getElementById("input");
const pushButton = document.getElementById("pushButton");
const emptyButton = document.getElementById("emptyButton");
const peekButton = document.getElementById("peekButton");



pushButton.addEventListener('click', function(){
  const value = inputBox.value.trim();
  if(value == ''){
    alert("Please enter a value!")
  }
  else if(stack.length == maxStackSize){
    alert("Stack was already full!")
  }
  else{
    stack.push(value);
    updateStackDisplay()
  }
})

emptyButton.addEventListener('click', function(){
  if(stack.length == 0){
    alert("Yes, Stack is empty")
  }
  else{
    alert("No, Stack is not empty")
  }
})

peekButton.addEventListener('click', function(){
  if(stack.length == 0){
    alert("Operation not allowed!")
  }
  else{
    alert("Top Value is:"+stack[stack.length-1]);
  }
})


function updateStackDisplay(){
  for(let i=0; i<maxStackSize; i++){
    const stackItem = document.getElementById((i+1));
    if(i < stack.length){
      stackItem.textContent = stack[i];
    }
    else{
      stackItem.textContent = '';
    }
  }
}