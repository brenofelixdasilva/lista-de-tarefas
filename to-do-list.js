const input = document.getElementById('input');
const btn = document.getElementsByClassName('btn')[0];
const tarefas = document.getElementById('tarefas');

btn.addEventListener("click", function(){
    const valorInput = input.value.trim();;

    if (valorInput === "") return;

    const item = document.createElement('li'); // cria o elemento
    item.textContent = valorInput;
    tarefas.appendChild(item); 

    input.value = ""; // limpa o campo depois de adicionar
});

// Seleciona os elementos

// Adiciona o evento de escuta no input
input.addEventListener('keydown', function(evento) {
    // Verifica se a tecla pressionada foi "Enter"
    if (evento.key === 'Enter') {
        // Evita o comportamento padrão se estiver dentro de um formulário
        evento.preventDefault(); 
        
        // Simula o clique no botão
        btn.click();
    }
});

// Ação do botão de pesquisa
btn.addEventListener('click');

