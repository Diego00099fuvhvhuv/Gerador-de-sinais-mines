document.addEventListener('DOMContentLoaded', function() {
    const minasElement = document.getElementById('minas');
    const validadeElement = document.getElementById('validade');
    const resultElement = document.getElementById('result');
    const profitElement = document.getElementById('profit');
    const cashoutValueElement = document.getElementById('cashout-value');
    const randomButton = document.getElementById('random');
    const cashoutButton = document.getElementById('cashout');

    // Atualizar a validade do sinal em tempo real
    function updateValidade() {
        const now = new Date();
        const minutes = now.getMinutes();
        const nextQuarter = Math.ceil(minutes / 15) * 15;
        const validadeTime = new Date(now.setMinutes(nextQuarter, 0, 0));
        const formattedTime = validadeTime.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
        validadeElement.textContent = formattedTime;
    }

    // Gerar um novo sinal aleatório
    function generateSignal() {
        const minas = Math.floor(Math.random() * 5) + 1; // Entre 1 e 5 minas
        const profit = (Math.random() * 50 + 100).toFixed(2); // Entre 100% e 150%
        const cashout = (Math.random() * 10 + 10).toFixed(2); // Entre 10.00 e 20.00 BR

        minasElement.textContent = minas.toString().padStart(2, '0');
        resultElement.textContent = `Minas: ${minas}`;
        profitElement.textContent = `Nota: ${profit}%`;
        cashoutValueElement.textContent = `${cashout} BR`;
    }

    // Atualizar a cada 15 minutos (900000 ms)
    setInterval(updateValidade, 900000);
    updateValidade(); // Inicializar imediatamente

    // Gerar sinal ao clicar no botão RANDOM
    randomButton.addEventListener('click', generateSignal);

    // Gerar sinal inicial
    generateSignal();
});
