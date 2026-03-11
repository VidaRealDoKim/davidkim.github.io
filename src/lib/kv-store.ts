type KvResponse<T> = {
  result: T;
};

function getKvConfig() {
  return {
    url: process.env.KV_REST_API_URL?.trim() ?? "",
    token: process.env.KV_REST_API_TOKEN?.trim() ?? "",
  };
}

export function isKvConfigured(): boolean {
  const { url, token } = getKvConfig();
  return url.length > 0 && token.length > 0;
}

async function kvFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const { url, token } = getKvConfig();

  if (!url || !token) {
    throw new Error("KV nao configurado. Defina KV_REST_API_URL e KV_REST_API_TOKEN.");
  }

  const response = await fetch(`${url}/${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "text/plain;charset=UTF-8",
      ...(init?.headers ?? {}),
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Falha no KV (${response.status}).`);
  }

  const payload = (await response.json()) as KvResponse<T>;
  return payload.result;
}

export async function kvGetJson<T>(key: string): Promise<T | null> {
  const value = await kvGetString(key);
  if (!value) {
    return null;
  }

  try {
    return JSON.parse(value) as T;
  } catch {
    return null;
  }
}

export async function kvSetJson(key: string, value: unknown): Promise<void> {
  await kvSetString(key, JSON.stringify(value));
}

export async function kvGetString(key: string): Promise<string | null> {
  return kvFetch<string | null>(`get/${encodeURIComponent(key)}`);
}

export async function kvSetString(key: string, value: string): Promise<void> {
  await kvFetch(`set/${encodeURIComponent(key)}`, {
    method: "POST",
    body: value,
  });
}