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

window.addEventListener("scroll", () => {
    imgCabecera.style.backgroundPositionY = `-${window.scrollY / 3}px`;

    if (window.scrollY > capacidades.offsetTop) {
        if (window.screen.width > 700) {
            audienciaImg.style.backgroundPositionY = `-${(window.scrollY - capacidades.offsetTop - (capacidades.clientHeight / 2)) / 2}px`;
        } else {
            audienciaImg.style.backgroundPositionY = `-${(window.scrollY - audienciaImg.offsetTop - (capacidades.clientHeight)) / 2}px`;
        }
    }

    if (window.scrollY > window.screen.height) {
        navBarr.style.position = "fixed";
        navBarr.style.top = "0";
    } else {
        navBarr.style.position = "absolute";
    }
});

const preguntas = ["Qué canales sociales usan",
    "Qué métricas pudo encontrar de sus redes sociales y de las visitas que reciben en sus sitios web",
    "Qué actividad tiene la audiencia con los canales sociales de las marcas",
    "Qué tipo de contenido publican", "En qué horarios postean",
    "Qué actividades han dejado buenos y malos resultados",
    "Qué oportunidades encuentra en lo observado", "Cómo puede mejorar la situación actual de la empresa en social media y la situación actual de la audiencia"
];

const textos = [
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam error rem perspiciatis ex numquam
    quisquam qui itaque eaque corporis sint iste voluptatum accusantium, ipsam explicabo aliquid cupiditate
    incidunt dolor doloremque?`,
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam error rem perspiciatis ex numquam
    quisquam qui itaque eaque corporis sint iste voluptatum accusantium, ipsam explicabo aliquid cupiditate
    incidunt dolor doloremque?`,
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam error rem perspiciatis ex numquam
    quisquam qui itaque eaque corporis sint iste voluptatum accusantium, ipsam explicabo aliquid cupiditate
    incidunt dolor doloremque?`,
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam error rem perspiciatis ex numquam
    quisquam qui itaque eaque corporis sint iste voluptatum accusantium, ipsam explicabo aliquid cupiditate
    incidunt dolor doloremque?`,
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam error rem perspiciatis ex numquam
    quisquam qui itaque eaque corporis sint iste voluptatum accusantium, ipsam explicabo aliquid cupiditate
    incidunt dolor doloremque?`,
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam error rem perspiciatis ex numquam
    quisquam qui itaque eaque corporis sint iste voluptatum accusantium, ipsam explicabo aliquid cupiditate
    incidunt dolor doloremque?`,
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam error rem perspiciatis ex numquam
    quisquam qui itaque eaque corporis sint iste voluptatum accusantium, ipsam explicabo aliquid cupiditate
    incidunt dolor doloremque?`,
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam error rem perspiciatis ex numquam
    quisquam qui itaque eaque corporis sint iste voluptatum accusantium, ipsam explicabo aliquid cupiditate
    incidunt dolor doloremque?`
];

const imagenes = [
    "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
    "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80",
    "https://images.unsplash.com/photo-1588466596988-f1e6f59370b9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=696&q=80",
    "https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=753&q=80",
    "https://images.unsplash.com/photo-1462899006636-339e08d1844e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
];

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
    modal.style.maxWidth = "0px";
    fondoModal.style.display = "flex";
    document.body.style.overflow = "hidden";
    tituloModal.textContent = titulo;
    textoModal.textContent = texto;
    imagenModal.style.backgroundImage = `url(${imagen})`;
    let ancho = 0;
    setInterval(() => {
        if(ancho < 850){
            ancho += 10;
            modal.style.maxWidth = `${ancho}px`;
        }
    }, 1);
}