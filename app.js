import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// ⚠️ Sustituye por tus credenciales de Supabase
const SUPABASE_URL = "https://zxipywyhobtlxaaerazi.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp4aXB5d3lob2J0bHhhYWVyYXppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTczMzE5ODYsImV4cCI6MjA3MjkwNzk4Nn0.YB_mgNKRBrJ8-Z7jnT5_xeQV0zrmAiRqVZ8JqgLxjVs"; 
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);


// Obtener resultados ordenados
async function getRanking() {
  const { data, error } = await supabase
    .from("results")
    .select("*")
    .order("time_seconds", { ascending: true });

  if (error) {
    console.error("Error obteniendo datos:", error);
    document.getElementById("ranking").innerHTML = "<p>Error cargando ranking</p>";
    return;
  }

  renderRanking(data);
}

// Insertar nuevo resultado
async function addResult(name, time) {
  const { error } = await supabase
    .from("results")
    .insert([{ athlete_name: name, time_seconds: time }]);

  if (error) {
    console.error("Error insertando:", error);
    alert("❌ No se pudo añadir el resultado.");
  } else {
    alert("✅ Resultado añadido correctamente!");
    getRanking(); // recargar el ranking
  }
}

// Renderizar ranking
function renderRanking(results) {
  const container = document.getElementById("ranking");
  
  if (!results.length) {
    container.innerHTML = "<p>No hay resultados todavía.</p>";
    return;
  }

  container.innerHTML = results
    .map((r, i) => `<p><strong>${i+1}.</strong> ${r.athlete_name} - ${r.time_seconds}s</p>`)
    .join("");
}

// Manejo del formulario
document.getElementById("add-result-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("athlete-name").value.trim();
  const time = parseFloat(document.getElementById("athlete-time").value);

  if (!name || isNaN(time)) {
    alert("⚠️ Por favor, rellena todos los campos correctamente.");
    return;
  }

  await addResult(name, time);

  // limpiar inputs
  document.getElementById("athlete-name").value = "";
  document.getElementById("athlete-time").value = "";
});

getRanking();