const imgCabecera = document.getElementById("imgCabecera");
const audienciaImg = document.getElementById("audiencia");
const capacidades = document.querySelector(".capacidades");
const navBarr = document.querySelector(".navBarr");
const divPreguntas = document.getElementById("preguntas");

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

const armarDivs = i => {
    const span = document.createElement("SPAN");
    const div = document.createElement("DIV");

    span.textContent = preguntas[i];

    div.appendChild(span);
    divPreguntas.appendChild(div);

    div.addEventListener("click", () => {
        console.log(i);
    });
}

const mapear = () => {
    for(question in preguntas){
        armarDivs(question);
    }
}

mapear();