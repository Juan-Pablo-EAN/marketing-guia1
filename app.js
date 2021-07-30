const imgCabecera = document.getElementById("imgCabecera");
const audienciaImg = document.getElementById("audiencia");
const capacidades = document.querySelector(".capacidades");

window.addEventListener("scroll", () => {
    imgCabecera.style.backgroundPositionY = `-${window.scrollY / 3}px`;

    if (window.scrollY > capacidades.offsetTop) {
        if (window.screen.width > 700) {
            audienciaImg.style.backgroundPositionY = `-${(window.scrollY - capacidades.offsetTop - (capacidades.clientHeight / 2)) / 2}px`;
        } else {
            audienciaImg.style.backgroundPositionY = `-${(window.scrollY - audienciaImg.offsetTop ) / 2}px`;
        }
    }
});

