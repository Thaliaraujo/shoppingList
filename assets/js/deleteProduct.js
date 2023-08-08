// criando botão de deletar tarefa.
const buttonDelete = () => { 
    const buttonDelete = document.createElement('button');

    buttonDelete.classList.add('delete-button');
    buttonDelete.innerText = '';
    buttonDelete.addEventListener('click', deleteProduct);

    return buttonDelete;
};

const deleteProduct = (evento) => { 
    const buttonDelete = evento.target;
    
    const productCompleted = buttonDelete.parentElement;

    productCompleted.remove();

    return buttonDelete;

};

export default buttonDelete;