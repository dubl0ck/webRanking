// supabase.js
import { createClient } from 'https://esm.sh/@supabase/supabase-js'

const supabaseUrl = "https://qehhrhsmlrsxqugvuida.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFlaGhyaHNtbHJzeHF1Z3Z1aWRhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc2NzcyMjQsImV4cCI6MjA3MzI1MzIyNH0.HA9VzmLuCUVe35iKNJqrBGZ6rWXcu_q7GPrNJAMUytQ";
export const supabase = createClient(supabaseUrl, supabaseKey);
