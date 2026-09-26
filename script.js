// Número extraído do anúncio da imagem: 11970535262[cite: 1]
const numeroWhatsApp = "5511970535262";

function pedirWhatsApp(nomePrato, valor) {
    // Monta a mensagem personalizada para enviar via WhatsApp
    let mensagem = `Olá, Dona Cíntia! Gostaria de pedir: *${nomePrato}* no valor de R$ ${valor}.`;

    // Codifica o texto para URL
    let mensagemUrl = encodeURIComponent(mensagem);

    // Abre a conversa no WhatsApp em uma nova aba
    window.open(`https://wa.me/${numeroWhatsApp}?text=${mensagemUrl}`, '_blank');
}