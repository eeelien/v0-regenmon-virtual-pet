// Returns mock leaderboard data for now
export async function onRequestGet() {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  };

  return new Response(
    JSON.stringify({
      leaderboard: [],
      total: 0,
      message: "Leaderboard coming soon — sé el primero en registrarte!",
    }),
    { headers: corsHeaders }
  );
}
