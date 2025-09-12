import { createClient } from 'https://esm.sh/@supabase/supabase-js'

const supabaseUrl = "https://qehhrhsmlrsxqugvuida.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp4aXB5d3lob2J0bHhhYWVyYXppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTczMzE5ODYsImV4cCI6MjA3MjkwNzk4Nn0.YB_mgNKRBrJ8-Z7jnT5_xeQV0zrmAiRqVZ8JqgLxjVs";
const supabase = createClient(supabaseUrl, supabaseKey);

// Referencias DOM
const form = document.getElementById("marcaForm");
const tabla = document.querySelector("#ranking tbody");
const selectPrueba = document.getElementById("prueba");
const inputArtefacto = document.getElementById("artefacto");

// -----------------------------
// FUNCIONES
// -----------------------------

// Calcular categoría según fecha de nacimiento
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

// Actualizar Artefacto/Vallas automáticamente
function actualizarArtefacto() {
  const fechaNacimiento = document.getElementById("fechaNacimiento").value;
  const sexo = document.getElementById("sexo").value;
  const prueba = selectPrueba.value;

  if (!fechaNacimiento || !sexo || !prueba) {
    inputArtefacto.value = "";
    return;
  }

  const categoria = calcularCategoria(fechaNacimiento);
  const infoPrueba = pruebas[categoria]?.[sexo]?.[prueba];

  if (!infoPrueba) {
    inputArtefacto.value = "";
    return;
  }

  let texto = "";
  if (infoPrueba.peso) texto += `Peso: ${infoPrueba.peso} kg `;
  if (infoPrueba.altura) texto += `Altura: ${infoPrueba.altura} m `;
  if (infoPrueba.separacion) texto += `Separación: ${infoPrueba.separacion} m `;
  if (infoPrueba.vallas) texto += `Vallas: ${infoPrueba.vallas} `;

  inputArtefacto.value = texto.trim();
}

// Rellenar select de pruebas dinámicamente
function cargarPruebas() {
  selectPrueba.innerHTML = '<option value="">-- Selecciona --</option>';

  // Tomamos la primera categoría y sexo como referencia para mostrar pruebas
  const categoria = "Sub16"; // valor por defecto para mostrar algo
  const sexo = "M";

  Object.keys(pruebas[categoria][sexo]).forEach(p => {
    const opt = document.createElement("option");
    opt.value = p;
    opt.textContent = p;
    selectPrueba.appendChild(opt);
  });
}

// -----------------------------
// EVENTOS
// -----------------------------

// Cambios que actualizan Artefacto/Vallas
document.getElementById("fechaNacimiento").addEventListener("change", actualizarArtefacto);
document.getElementById("sexo").addEventListener("change", actualizarArtefacto);
selectPrueba.addEventListener("change", actualizarArtefacto);

// Enviar formulario y guardar en Supabase
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
  const artefacto = inputArtefacto.value;

  // Guardar en Supabase
  const { data, error } = await supabase
    .from("marcas")
    .insert([{ nombre, categoria, sexo, prueba, fechaMarca, marca, instalacion, artefacto }]);

  if (error) {
    alert("Error al guardar: " + error.message);
  } else {
    alert("Marca guardada");
    form.reset();
    inputArtefacto.value = "";
    cargarRanking();
  }
});

// -----------------------------
// Mostrar ranking
// -----------------------------
async function cargarRanking() {
  const { data, error } = await supabase
    .from("marcas")
    .select("*")
    .order("marca", { ascending: true });

  if (error) {
    console.error("Error cargando ranking:", error);
    return;
  }

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

// -----------------------------
// INICIALIZACIÓN
// -----------------------------
cargarPruebas();
cargarRanking();

