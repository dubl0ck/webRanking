// app.js

const form = document.getElementById("marcaForm");
const tabla = document.querySelector("#ranking tbody");
const selectPrueba = document.getElementById("prueba");
const inputArtefacto = document.getElementById("artefacto");

// TODO: JSON de categorías + pruebas (lo rellenaremos)
const pruebas = {
  "Sub16": {
    "H": { "Peso": "4kg", "100m vallas": "0.914m" },
    "F": { "Peso": "3kg", "100m vallas": "0.762m" }
  }
};

// Rellenar desplegable de pruebas
function cargarPruebas() {
  selectPrueba.innerHTML = "";
  Object.keys(pruebas["Sub16"]["H"]).forEach(p => {
    let opt = document.createElement("option");
    opt.value = p;
    opt.textContent = p;
    selectPrueba.appendChild(opt);
  });
}
cargarPruebas();

// Calcular categoría
function calcularCategoria(fechaNacimiento) {
  const year = new Date(fechaNacimiento).getFullYear();
  const edad = new Date().getFullYear() - year;

  if (edad < 10) return "Sub10";
  if (edad < 12) return "Sub12";
  if (edad < 14) return "Sub14";
  if (edad < 16) return "Sub16";
  if (edad < 18) return "Sub18";
  if (edad < 20) return "Sub20";
  if (edad < 23) return "Sub23";
  return "Absoluto";
}

// Guardar marca
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const fechaNacimiento = document.getElementById("fechaNacimiento").value;
  const sexo = document.getElementById("sexo").value;
  const prueba = selectPrueba.value;
  const fechaMarca = document.getElementById("fechaMarca").value;
  const marca = document.getElementById("marca").value;
  const instalacion = document.getElementById("instalacion").value;

  const categoria = calcularCategoria(fechaNacimiento);
  const artefacto = pruebas[categoria]?.[sexo]?.[prueba] || "";

  // Guardar en Supabase
  const { data, error } = await supabase
    .from("marcas")
    .insert([{ nombre, categoria, sexo, prueba, fechaMarca, marca, instalacion, artefacto }]);

  if (error) {
    alert("Error al guardar: " + error.message);
  } else {
    alert("Marca guardada");
    cargarRanking();
  }
});

// Mostrar ranking
async function cargarRanking() {
  const { data, error } = await supabase.from("marcas").select("*").order("marca", { ascending: true });
  if (error) return;

  tabla.innerHTML = "";
  data.forEach(row => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${row.nombre}</td>
      <td>${row.categoria}</td>
      <td>${row.sexo}</td>
      <td>${row.prueba}</td>
      <td>${row.marca}</td>
      <td>${row.fechaMarca}</td>
      <td>${row.artefacto}</td>
    `;
    tabla.appendChild(tr);
  });
}

cargarRanking();
