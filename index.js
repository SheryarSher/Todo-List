"use strict"
const items = document.getElementById('items')
const submit = document.getElementById('submit')
const values = document.getElementById('values')
function saveItems(e) {
    e.preventDefault()
    const newLi = document.createElement('li');
    newLi.classList.add('paraStyle')
    newLi.innerHTML = items.value
    items.value = ""
    values.appendChild(newLi);
    
    newLi.addEventListener('click' , ()=>{
        newLi.style.color='blue'
    } )
    newLi.addEventListener('dblclick' , ()=>{
        values.removeChild(newLi)
    } )
  
    
         
    
}


submit.addEventListener('click', saveItems)