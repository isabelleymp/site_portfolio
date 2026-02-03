<script>
    const modal = document.getElementById("videoModal");
    const videoPlayer = document.getElementById("videoPlayer");
    const closeBtn = document.querySelector(".close-modal");

    // Configura os cliques nos cards
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', () => {
            // Aqui você colocará o link de incorporação (embed) do seu vídeo
            const videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ"; // Exemplo
            videoPlayer.src = videoUrl;
            modal.style.display = "flex";
        });
    });

    // Fecha o modal
    closeBtn.onclick = () => {
        modal.style.display = "none";
        videoPlayer.src = ""; // Para o vídeo parar de tocar ao fechar
    }

    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = "none";
            videoPlayer.src = "";
        }
    }
</script>
