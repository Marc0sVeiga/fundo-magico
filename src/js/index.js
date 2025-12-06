function setLoading(isLoading) {
    const btnSpan = document.getElementById('generate-btn');

    if (isLoading) {
        btnSpan.innerHTML = 'Gerando Background...';
    } else {
        btnSpan.innerHTML = 'Gerar Background Mágico';
    }
}



document.addEventListener('DOMContentLoaded', function () {

    //1. No JavaScript, pegar o evento de submit do formulário para evitar o carregamento da página.

    const form = document.querySelector('.form-group');
    const textArea = document.getElementById('description');

    form.addEventListener('submit', async function (event) {
        event.preventDefault();

        //2. Obter o valor digitado pelo usuário no campo de texto.

        const description = textArea.value.trim();

        if(!description){
            return;
        }
        // 3. Exibir um indicador de carregamento enquanto a requisição está sendo processada.
        setLoading(true);

        // 4. Fazer uma requisição HTTP (POST) para a API do n8n, enviando o texto do formulário no corpo da requisição em formato JSON.

        try{

            const response = await fetch('https://marc0sveiga.app.n8n.cloud/webhook/gerador-fundo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    description
                })                    
                
            });

            console.log(response);

        }catch{

        }finally{

        }
    });
})