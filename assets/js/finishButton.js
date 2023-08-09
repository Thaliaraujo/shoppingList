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

    completed.classList.toggle('done'); // Alterna a classe done ao clicar no botão
};

export default finishButton;
