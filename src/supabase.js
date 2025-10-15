import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ylxzvtjjwrxuudroozdy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlseHp2dGpqd3J4dXVkcm9vemR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA1NDM5MTgsImV4cCI6MjA3NjExOTkxOH0.u5PW4oC5aABB0obPIZQZApDWrO0iYBKVYbL4TSfLMhk";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
