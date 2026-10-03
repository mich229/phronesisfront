export async function submitForm(endpoint: string, data: Record<string, string>) {
  const res = await fetch(endpoint, {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("L'envoi a échoué");
}