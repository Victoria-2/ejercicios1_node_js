const loadFilms = document.querySelector(".loadFilms");
const contenedorEstrenos = document.querySelector("#estrenos");

// CORRECCIÓN: Pasamos la función como referencia, SIN paréntesis ()
loadFilms.addEventListener("click", cargarPeliculas);

async function cargarPeliculas() {
  try {
    console.log("Intentando conectar con el servidor...");

    const respuesta = await fetch("http://localhost:3000/");

    if (!respuesta.ok) throw new Error("No se pudo obtener la cartelera");

    const datos = await respuesta.json();

    // Limpiamos el texto previo (el Lorem Ipsum)
    contenedorEstrenos.innerHTML =
      "<h2 class='titulo-seccion'>Estrenos <span>Disponibles</span></h2>";

    // Creamos el contenedor Grid
    const grid = document.createElement("div");
    grid.className = "grid-pelis";

    datos.cartelera.forEach((peli) => {
      const article = document.createElement("article");
      article.className = "peli-card";
      article.innerHTML = `
                <div style="padding: 20px;">
                    <h4>${peli.titulo}</h4>
                    <p>Precio: <strong>$${peli.precioEntrada}</strong></p>
                </div>
            `;
      grid.appendChild(article);
    });

    contenedorEstrenos.appendChild(grid);
    console.log("¡Películas cargadas con éxito!");
  } catch (error) {
    console.error("Error detallado:", error);
    contenedorEstrenos.innerHTML = `
            <p class="status-msg" style="color: var(--rojo-principal);">
                ⚠️ Error: No se pudo conectar al servidor.<br>
                <small>Verifica que Node.js esté corriendo en el puerto 3000.</small>
            </p>
        `;
  }
}
