'use strict';

const budgetBtn = document.querySelector('.budgetBtn');
const expBtn = document.querySelector('.expBtn');
const budgetInput = document.querySelector('#budget');
const expTypeInput = document.querySelector('#exp');
const amountInputExp = document.querySelector('#amount');
const budSpan = document.querySelector('.budSpan');
const expSpan = document.querySelector('.expSpan');
const balSpan = document.querySelector('.balSpan');
const outputDiv = document.querySelector('.output');
const balP  = document.querySelector('.balP');
const utotcont = document.querySelector('.utotcont');
let budget = 0;
let expenses = 0;
let balance = 0;

window.addEventListener('load',()=>{
  
     budgetInput.value = '';
      expTypeInput.value = '';
    amountInputExp.value = '';
})

budgetBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    let budgetNummer = Number(budgetInput.value);
    budget += budgetNummer;
   budSpan.textContent = budget;
   balSpan.textContent = budget;
   if(budget > 0){
       balSpan.style.color = 'green';
       balP.style.color = 'green';
   } else {
       balSpan.style.color = 'red';
       balP.style.color = 'red';
   }


})

expBtn.addEventListener('click', (e)=>{
e.preventDefault();
createExpenseItem(expTypeInput.value, amountInputExp.value);

})

function createExpenseItem(type, num){
    expTypeInput.value = '';
    amountInputExp.value = '';
    let ul = document.createElement('ul');
    let li = document.createElement('li');
    li.style.marginRight = '20px';
    ul.appendChild(li);
    let div = document.createElement('div');
    div.classList.add('itemsContainer');
    let h5 = document.createElement('h5');
    h5.textContent = type;
    h5.style.color = 'red';
    h5.style.marginRight = '100%'
    let h52 = document.createElement('h5');
    h52.style.marginRight = '60%'
    h52.style.color = 'red';
    h52.textContent = '$'+num;
    let i = document.createElement('i');
    i.classList.add('fas');
    i.classList.add('fa-trash');
    i.style.color = 'red';
    i.style.fontSize = '0.7rem'
    i.style.cursor = 'pointer';
    let i2 = document.createElement('i');
    i2.classList.add('fas');
    i2.classList.add('fa-edit');
      i2.style.color = 'rgb(10, 58, 112)';
    i2.style.fontSize = '0.7rem'
    i2.style.cursor = 'pointer';
    i.addEventListener('click', ()=>{
    div.parentElement.removeChild(div);
     expenses -= Number(num);
    expSpan.textContent = Number(expenses);
    balance = budget - expenses;
    balSpan.textContent = balance;
    if(balance > 0){
       balSpan.style.color = 'green';
       balP.style.color = 'green';
   } else {
       balSpan.style.color = 'red';
       balP.style.color = 'red';
   }
    })
    i2.addEventListener('click', ()=>{
      expTypeInput.focus();
      div.parentElement.removeChild(div);
         expenses -= Number(num);
    expSpan.textContent = Number(expenses);
    balance = budget - expenses;
    balSpan.textContent = balance;

    expTypeInput.value = li.firstElementChild.textContent;
    if(balance > 0){
       balSpan.style.color = 'green';
       balP.style.color = 'green';
   } else {
       balSpan.style.color = 'red';
       balP.style.color = 'red';
       

   }
       
})
  
    li.appendChild(h5);
    li.appendChild(h52);
    li.appendChild(i);
    li.appendChild(i2);
    div.appendChild(ul);
   utotcont.appendChild(div);

    expenses += Number(num);
    expSpan.textContent = Number(expenses);
    balance = budget - expenses;
    balSpan.textContent = balance;
     if(balance > 0){
       balSpan.style.color = 'green';
       balP.style.color = 'green';
   } else {
       balSpan.style.color = 'red';
       balP.style.color = 'red';
    

}

}