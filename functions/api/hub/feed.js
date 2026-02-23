export async function onRequestGet() {
  return new Response(JSON.stringify([]), {
    headers: { "Access-Control-Allow-Origin": "*", "Content-Type": "application/json" },
  });
}
