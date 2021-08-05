const preguntas = ["Qué canales sociales usan",
    "Qué métricas pudo encontrar de sus redes sociales y de las visitas que reciben en sus sitios web",
    "Qué actividad tiene la audiencia con los canales sociales de las marcas",
    "Qué tipo de contenido publican", "En qué horarios postean",
    "Qué actividades han dejado buenos y malos resultados",
    "Qué oportunidades encuentra en lo observado", "Cómo puede mejorar la situación actual de la empresa en social media y la situación actual de la audiencia"
];

const textos = [
    `
                         <div>
                            <h2>Instagram</h2>
                            <div>
                                <p>
                                    DATALINE SAS solo cuenta con 6 publicaciones, 53 seguidores y 12 seguidos en esta
                                    red social, lo que
                                    fácilmente demuestra que no tienen un fuerte departamento de social-media que ayude
                                    a
                                    resaltar a la empresa en esta red social a pesar de que ya tienen más 20 de años de
                                    permanencia en el mercado como lo dice en su perfil.
                                </p>
                            </div>
                            <div class="divImagenes">
                                <img src="img/Imagen1.png" alt="Instagram 1">
                            </div>
                            <div>
                                <p>
                                    Hay que resaltar que su perfil tiene el acceso directo a la página web de la
                                    compañía y
                                    que al presionar la opción de contacto aparece su número de celular y el correo
                                    institucional:
                                </p>
                            </div>
                            <div class="divImagenes">
                                <img src="img/Imagen2.png" alt="Instagram 2">
                            </div>
                            <div>
                                <p>
                                    En sus historias muestran sus principales clientes y las ciudades en dónde hacen
                                    presencia, aunque cabe resaltar el hecho que la última vez que las actualizaron fue
                                    hace
                                    64 semanas.
                                </p>
                            </div>
                            <div class="divImagenes">
                                <div>
                                    <img src="img/Imagen3.png" alt="Instagram 3">
                                </div>
                                <div>
                                    <img src="img/Imagen4.png" alt="Instagram 4">
                                </div>
                            </div>
                            <h2>Facebook</h2>
                            <div>
                                <p>
                                    Se aprecia que manejan una página en Facebook bastante descuidada, una portada con
                                    la
                                    información básica de la empresa, un botón de WhatsApp, un solo me gusta y dos
                                    seguidores:
                                </p>
                            </div>
                            <div class="divImagenes">
                                <img src="img/Imagen5.png" alt="Facebook 1">
                            </div>
                            <div>
                                <p>
                                    La página no cuenta con opiniones, solo tiene 3 fotos y la última publicación que
                                    realizaron fue en el 19 de diciembre del 2020, en el inicio se puede ver el correo
                                    institucional y el número de celular corporativo únicamente:
                                </p>
                            </div>
                            <div class="divImagenes imgGrid">
                                <div>
                                    <img src="img/Imagen6.png" alt="Facebook 6">
                                </div>
                                <div>
                                    <img src="img/Imagen7.png" alt="Facebook 7">
                                </div>
                                <div>
                                    <img src="img/Imagen8.png" alt="Facebook 8">
                                </div>
                                <div>
                                    <img src="img/Imagen9.png" alt="Facebook 9">
                                </div>
                            </div>
                            <h2>Twitter</h2>
                            <div>
                                <p>
                                    No tienen perfil, solo existe una publicación en donde es mencionada, fue el 17 de
                                    octubre del 2017 para un evento, publicado por el perfil del ParqueElSauce:
                                </p>
                            </div>
                            <div class="divImagenes">
                                <img src="img/Imagen10.png" alt="Twitter 1">
                            </div>
                        </div>
    `,
    `2Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam error rem perspiciatis ex numquam
    quisquam qui itaque eaque corporis sint iste voluptatum accusantium, ipsam explicabo aliquid cupiditate
    incidunt dolor doloremque?`,
    `3Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam error rem perspiciatis ex numquam
    quisquam qui itaque eaque corporis sint iste voluptatum accusantium, ipsam explicabo aliquid cupiditate
    incidunt dolor doloremque?`,
    `4Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam error rem perspiciatis ex numquam
    quisquam qui itaque eaque corporis sint iste voluptatum accusantium, ipsam explicabo aliquid cupiditate
    incidunt dolor doloremque?`,
    `5Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam error rem perspiciatis ex numquam
    quisquam qui itaque eaque corporis sint iste voluptatum accusantium, ipsam explicabo aliquid cupiditate
    incidunt dolor doloremque?`,
    `6Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam error rem perspiciatis ex numquam
    quisquam qui itaque eaque corporis sint iste voluptatum accusantium, ipsam explicabo aliquid cupiditate
    incidunt dolor doloremque?`,
    `7Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam error rem perspiciatis ex numquam
    quisquam qui itaque eaque corporis sint iste voluptatum accusantium, ipsam explicabo aliquid cupiditate
    incidunt dolor doloremque?`,
    `8Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam error rem perspiciatis ex numquam
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