// Simple hub registration — stores in KV or returns a generated ID
export async function onRequestPost(context) {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  };

  try {
    const body = await context.request.json();
    const id = `regenmon-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`;

    return new Response(
      JSON.stringify({ id, registered: true, profile: body }),
      { headers: corsHeaders }
    );
  } catch {
    return new Response(
      JSON.stringify({ error: "Error al registrar" }),
      { status: 500, headers: corsHeaders }
    );
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
