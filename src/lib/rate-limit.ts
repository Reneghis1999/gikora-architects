/* =========================================================
   LIMITEUR DE DÉBIT (en mémoire)
   Protection anti-spam "best effort" : chaque instance serveur
   garde son propre compteur. Suffisant pour un site vitrine,
   combiné au honeypot et à la validation côté serveur.
========================================================== */

type Bucket = { count: number; resetAt: number };

const buckets = new Map<string, Bucket>();
const MAX_KEYS = 5000;

export function rateLimit(
  key: string,
  { limit, windowMs }: { limit: number; windowMs: number }
) {
  const now = Date.now();

  // Nettoyage périodique pour éviter toute croissance mémoire illimitée
  if (buckets.size > MAX_KEYS) {
    for (const [k, bucket] of buckets) {
      if (bucket.resetAt <= now) buckets.delete(k);
    }
    if (buckets.size > MAX_KEYS) buckets.clear();
  }

  const bucket = buckets.get(key);

  if (!bucket || bucket.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true, retryAfter: 0 };
  }

  if (bucket.count >= limit) {
    return {
      allowed: false,
      retryAfter: Math.ceil((bucket.resetAt - now) / 1000),
    };
  }

  bucket.count += 1;
  return { allowed: true, retryAfter: 0 };
}

export function getClientIp(req: Request) {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();

  return req.headers.get("x-real-ip")?.trim() || "unknown";
}
