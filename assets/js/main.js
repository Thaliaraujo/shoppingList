import finishButton from './finishButton.js';
import buttonDelete from './deleteButton.js';

// Função para carregar a lista do Local Storage
const loadListFromLocalStorage = () => {
  const storedList = JSON.parse(localStorage.getItem('shoppingList')) || [];
  
  const list = document.querySelector('[data-list]');
  list.innerHTML = ''; // Limpa a lista para carregar os itens do Local Storage
  
  storedList.forEach(item => {
    const product = document.createElement('li');
    product.classList.add('product');
    if (item.done) { // Adiciona a classe done se o item estiver concluído
      product.classList.add('done');
    }
    const text = `<p class="text">${item.value}</p><p class="amount">${item.amount}</p>`;
    product.innerHTML = text;

    product.appendChild(finishButton());
    product.appendChild(buttonDelete());
    list.appendChild(product);
  });
};

// Função para adicionar tarefa
const createProduct = (value, amount) => {
  const list = document.querySelector('[data-list]');
  
  const product = document.createElement('li');
  product.classList.add('product');
  const text = `<p class="text">${value}</p><p class="amount">${amount}</p>`;
  product.innerHTML = text;

  product.appendChild(finishButton());
  product.appendChild(buttonDelete());
  list.appendChild(product);
};

// Função para salvar a lista no Local Storage
const saveListToLocalStorage = () => {
  const listItems = document.querySelectorAll('.product');
  const shoppingList = [];
  
  listItems.forEach(item => {
    const textElement = item.querySelector('.text');
    const amountElement = item.querySelector('.amount');
    
    shoppingList.push({ value: textElement.textContent, amount: amountElement.textContent, done: item.classList.contains('done') }); // Adiciona o atributo done ao objeto
  });
  
  localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
};

// Adicionar evento de clique ao botão de adicionar
const newProductButton = document.querySelector('[data-form-button]');
newProductButton.addEventListener('click', (event) => {
  event.preventDefault();
  
  const input = document.querySelector('[data-form-input]');
  const amountInput = document.querySelector('[name="amount"]');
  const value = input.value.trim();
  const amount = amountInput.value.trim();
  
  if (value !== '' && amount !== '') {
    createProduct(value, amount);
    saveListToLocalStorage();
    input.value = '';
    amountInput.value = '';
  }
});

// Carregar lista do Local Storage ao carregar a página
window.addEventListener('DOMContentLoaded', () => {
  loadListFromLocalStorage();
});

// Atualizar lista no Local Storage ao marcar uma tarefa como concluída ou excluir uma tarefa
const list = document.querySelector('[data-list]');
list.addEventListener('click', (event) => {
  if (event.target.classList.contains('finish-button') || event.target.classList.contains('delete-button')) {
    saveListToLocalStorage();
  }
});

