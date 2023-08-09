//criando botão de concluir tarefa
const finishButton = () => { 
    const finishButton = document.createElement('button');
    
    finishButton.classList.add('finish-button');
    finishButton.innerText = '';
    
    finishButton.addEventListener('click', productCompleted);

    return finishButton;
};

const productCompleted = (evento) => {
    const finishButton = evento.target;
    const completed = finishButton.parentElement;
    completed.classList.toggle('done');

    // Atualiza o status de conclusão no Local Storage
    const itemText = completed.querySelector('.text').textContent;
    const shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];

    const updatedList = shoppingList.map(item => {
        if (item.value === itemText) {
            item.done = !item.done; // Inverte o status de done
        }
        return item;
    });

    localStorage.setItem('shoppingList', JSON.stringify(updatedList));
};

export default finishButton;

