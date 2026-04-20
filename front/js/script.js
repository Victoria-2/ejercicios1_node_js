const loadFilms = document.querySelector(".loadFilms");
// Definimos el contenedor donde se volcarán las películas
const contenedorEstrenos = document.querySelector("#estrenos");

// IMPORTANTE: Sin los paréntesis ()
loadFilms.addEventListener("click", cargarPeliculas);

async function cargarPeliculas() {
  try {
    console.log("Cargando películas..."); // Para que veas en la consola que el clic funciona

    // 1. Buscamos los datos en el servidor
    const respuesta = await fetch("http://localhost:3000/");
    const datos = await respuesta.json();

    // 2. Limpiamos el contenido previo
    contenedorEstrenos.innerHTML = "<h2>Cartelera Actualizada</h2>";

    // Creamos un contenedor para que use el estilo de Grid que definimos en el CSS
    const lista = document.createElement("div");
    lista.classList.add("grid-pelis");

    // 3. Recorremos el array
    datos.cartelera.forEach((peli) => {
      const article = `
                <article class="peli-card">
                    <div style="padding: 20px;">
                        <h4>${peli.titulo}</h4>
                        <p>Precio: <strong>$${peli.precioEntrada}</strong></p>
                    </div>
                </article>
            `;
      lista.innerHTML += article;
    });

    contenedorEstrenos.appendChild(lista);
  } catch (error) {
    console.error("Error al cargar:", error);
    alert(
      "¡Error! Asegúrate de que el servidor de Node esté corriendo y tenga instalado CORS.",
    );
  }
}
