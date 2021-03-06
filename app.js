const imgCabecera = document.getElementById("imgCabecera");
const audienciaImg = document.getElementById("audiencia");
const capacidades = document.querySelector(".capacidades");
const navBarr = document.querySelector(".navBarr");
const divPreguntas = document.getElementById("preguntas");
const closeBtn = document.querySelector(".closeBtn");
const fondoModal = document.querySelector(".fondoModal");
const tituloModal = document.querySelector(".tituloModal");
const textoModal = document.querySelector(".textoModal");
const imagenModal = document.querySelector(".imagenModal");
const modal = document.querySelector(".modal");
const listaNav = document.querySelector(".listaNav");
const botonNav = document.querySelector(".botonNav");
let visible = false;

botonNav.addEventListener("click", () => {
    if(visible){
        listaNav.style.display = "none";
        visible = false;
    } else {
        listaNav.style.display = "block";
        visible = true;
    }
});

window.addEventListener("scroll", () => {
    imgCabecera.style.backgroundPositionY = `-${window.scrollY / 3}px`;
    
    if (window.scrollY > window.screen.height) {
        navBarr.style.position = "fixed";
        navBarr.style.top = "0";
    } else {
        navBarr.style.position = "absolute";
    }
});

const armarDivs = i => {
    const span = document.createElement("SPAN");
    const div = document.createElement("DIV");

    span.textContent = preguntas[i];

    div.appendChild(span);
    divPreguntas.appendChild(div);

    div.addEventListener("click", () => {
        abrirModal(preguntas[i], textos[i], imagenes[i]);
    });
}

const mapear = () => {
    for(question in preguntas){
        armarDivs(question);
    }
}

mapear();

closeBtn.addEventListener("click", () => {
    fondoModal.style.display = "none";
    document.body.style.overflowY = "scroll";
});

const abrirModal = (titulo, texto, imagen) => {
    modal.style.maxWidth = "200px";
    fondoModal.style.display = "flex";
    let ancho = 200;
    setInterval(() => {
        if(ancho < 850){
            ancho += 15;
            modal.style.maxWidth = `${ancho}px`;
        }
    }, 1);
    document.body.style.overflow = "hidden";
    tituloModal.textContent = titulo;
    textoModal.innerHTML = texto;
    imagenModal.style.backgroundImage = `url(${imagen})`;
}