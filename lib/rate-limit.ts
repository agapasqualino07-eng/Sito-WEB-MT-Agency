/**
 * Rate limiting in memoria, per IP, per il form di contatto.
 *
 * Limite: best-effort. Su Vercel ogni istanza serverless ha la propria
 * memoria e può essere riciclata in qualsiasi momento, quindi questo NON è
 * un limite affidabile al 100% contro un attacco distribuito o persistente.
 * È comunque efficace contro spam/bot semplici che colpiscono una singola
 * istanza calda. Per una protezione robusta e distribuita, sostituire con
 * Vercel KV / Upstash Redis, oppure aggiungere Cloudflare Turnstile davanti
 * al form (vedi README).
 */

const WINDOW_MS = 10 * 60 * 1000; // 10 minuti
const MAX_REQUESTS = 5;

const hits = new Map<string, number[]>();

export function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (hits.get(ip) ?? []).filter(
    (t) => now - t < WINDOW_MS
  );

  if (timestamps.length >= MAX_REQUESTS) {
    hits.set(ip, timestamps);
    return true;
  }

  timestamps.push(now);
  hits.set(ip, timestamps);

  // Pulizia occasionale per non far crescere la mappa indefinitamente.
  if (hits.size > 5000) {
    for (const [key, values] of hits) {
      const fresh = values.filter((t) => now - t < WINDOW_MS);
      if (fresh.length === 0) hits.delete(key);
      else hits.set(key, fresh);
    }
  }

  return false;
}
