// Inicialização da biblioteca de animações AOS
document.addEventListener('DOMContentLoaded', function () {
    AOS.init({
        duration: 800,  // Duração das animações em ms
        once: true,      // Executa a animação apenas uma vez ao rolar
        offset: 50
    });
});

// Número do WhatsApp extraído do cardápio
const numeroWhatsApp = "5511970535262";

// Função para redirecionar para o WhatsApp com mensagem formatada
function pedirWhatsApp(nomePrato, valor) {
    let mensagem = `Olá, Dona Cíntia! Gostaria de pedir: *${nomePrato}* no valor de R$ ${valor}.`;
    let mensagemUrl = encodeURIComponent(mensagem);
    window.open(`https://wa.me/${numeroWhatsApp}?text=${mensagemUrl}`, '_blank');
}