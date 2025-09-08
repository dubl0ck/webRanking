import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// ⚠️ Sustituye por tus credenciales de Supabase
const SUPABASE_URL = "https://zxipywyhobtlxaaerazi.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp4aXB5d3lob2J0bHhhYWVyYXppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTczMzE5ODYsImV4cCI6MjA3MjkwNzk4Nn0.YB_mgNKRBrJ8-Z7jnT5_xeQV0zrmAiRqVZ8JqgLxjVs"; 
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// Obtener resultados ordenados por tiempo
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

// Renderizar en el HTML
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

getRanking();
