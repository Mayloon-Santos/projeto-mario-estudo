const botaoTrailer = document.querySelector('.botao-trailer');
const botaoFecharModal = document.querySelector('.fechar-modal');
const video = document.getElementById('video');
const modal = document.querySelector('.modal');
const linkDoVideo = video.src;

function abrirModal(linkDoVideo) {
    modal.classList.add("aberto");
    video.setAttribute('src', linkDoVideo);
}

function fecharModal() {
    modal.classList.remove("aberto");
    video.setAttribute("src", "");
}

botaoTrailer.addEventListener("click", () => {
    abrirModal(linkDoVideo);
});

botaoFecharModal.addEventListener("click", fecharModal);