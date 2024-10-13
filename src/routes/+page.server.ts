import { supabase } from "$lib/supabaseClient";

export async function load() {
  const { data } = await supabase.from("countries").select();
  const data2 = await supabase.from("todo_list").select();
  return {
    countries : data ?? [],
    todos : data2.data ?? [],
  };
}
