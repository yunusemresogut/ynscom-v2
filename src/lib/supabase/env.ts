/** Project root URL only — not /rest/v1/ (that path is added by the SDK). */
export function getSupabaseUrl(): string {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
  return url.replace(/\/rest\/v1\/?$/i, "").replace(/\/$/, "");
}

export function getSupabaseAnonKey(): string {
  return process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";
}
