// Calcular categoría automáticamente
function calcularCategoria(fechaNacimiento) {
  const hoy = new Date();
  const nacimiento = new Date(fechaNacimiento);
  const edad = hoy.getFullYear() - nacimiento.getFullYear();
  if (edad < 12) return "Sub12";
  if (edad < 14) return "Sub14";
  if (edad < 16) return "Sub16";
  if (edad < 18) return "Sub18";
  if (edad < 20) return "Sub20";
  return "Senior";
}

// Guardar marca en Supabase
document.getElementById("form-atleta").addEventListener("submit", async (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const fecha_nacimiento = document.getElementById("fecha_nacimiento").value;
  const sexo = document.getElementById("sexo").value;
  const prueba = document.getElementById("prueba").value;
  const fecha_marca = document.getElementById("fecha_marca").value;
  const marca = document.getElementById("marca").value;
  const instalacion = document.getElementById("instalacion").value;

  const categoria = calcularCategoria(fecha_nacimiento);

  const { error } = await supabase.from("marcas").insert([
    { nombre, fecha_nacimiento, sexo, prueba, fecha_marca, marca, instalacion, categoria }
  ]);

  if (error) {
    alert("Error al guardar: " + error.message);
  } else {
    alert("Marca guardada correctamente");
    cargarMarcas();
    e.target.reset();
  }
});

// Cargar registros
async function cargarMarcas() {
  const { data, error } = await supabase.from("marcas").select("*").order("fecha_marca", { ascending: false });

  if (error) {
    console.error("Error al cargar marcas:", error);
    return;
  }

  const tbody = document.querySelector("#tabla-marcas tbody");
  tbody.innerHTML = "";

  data.forEach(row => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${row.nombre}</td>
      <td>${row.categoria}</td>
      <td>${row.sexo}</td>
      <td>${row.prueba}</td>
      <td>${row.marca}</td>
      <td>${row.fecha_marca}</td>
      <td>${row.instalacion || ""}</td>
    `;
    tbody.appendChild(tr);
  });
}

cargarMarcas();
