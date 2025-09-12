// supabase.js
const { createClient } = supabase;

const SUPABASE_URL = "https://qehhrhsmlrsxqugvuida.supabase.co";  
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFlaGhyaHNtbHJzeHF1Z3Z1aWRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc2NzcyMjQsImV4cCI6MjA3MzI1MzIyNH0.HA9VzmLuCUVe35iKNJqrBGZ6rWXcu_q7GPrNJAMUytQ";           // <- tu API key

window.supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
