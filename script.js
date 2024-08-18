document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Simulação de validação
        const name = form.querySelector('#name').value.trim();
        const email = form.querySelector('#email').value.trim();
        const motivo = form.querySelector('#motivo').value.trim();
        const message = form.querySelector('#message').value.trim();

        if (name && email && motivo && message) {
            // Se todos os campos estão preenchidos, mostra a mensagem de sucesso
            successMessage.style.display = 'block';

            // Limpa o formulário
            form.reset();
        } else {
            // Se algum campo está vazio, exibe um alerta
            alert('Por favor, preencha todos os campos.');
        }
    });
});