document.addEventListener('DOMContentLoaded', () => {

    const dataContainer = document.getElementById('data-container');
    
    // função para tratar os erros das solicitações
    const handleErrors = (response) => {
        if (!response.ok){
            throw Error(response.statusText);
        }
        
        return response;
    };
    
    // função para buscar os dados da API
    const fetchData = async () => {
        try {
            // fazendo uma requisição GET
            const response = await fetch('http://localhost:3000/alunos');
    
            // tratando o erro na resposta
            handleErrors(response);
    
            // converter os dados para JSON
            const alunos = await response.json();
    
            // exibindo os dados na pagina
            alunos.forEach(aluno => {
                const alunoElement = document.createElement('div');
        alunoElement.innerHTML=`<strong>${aluno.nome}</strong><p>${aluno.curso}</p>`
        dataContainer.appendChild(alunoElement);
            });
    
    
        } catch (error) {
            console.log('erro ao buscar os dados', error);
        }
    
    };
    
    // chamando a função para carregar os dados na tela
    fetchData();
    
    
    });