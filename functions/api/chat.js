export async function onRequestPost(context) {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  };

  try {
    const body = await context.request.json();
    const { message, petName, petType, petStage, stats, memories } = body;

    if (!message) {
      return new Response(JSON.stringify({ error: "Falta el mensaje" }), {
        status: 400,
        headers: corsHeaders,
      });
    }

    const apiKey = context.env.OPENAI_API_KEY;
    if (!apiKey) {
      return new Response(
        JSON.stringify({
          reply: `*${petName || "tu mascota"} te mira con curiosidad* No puedo hablar ahorita... (falta API key)`,
          fallback: true,
        }),
        { headers: corsHeaders }
      );
    }

    const typeEmoji = { semilla: "🌱", gota: "💧", chispa: "✨" };
    const emoji = typeEmoji[petType] || "🥚";
    const stageLabel = { baby: "Bebé", young: "Joven", adult: "Adulto" };
    const stage = stageLabel[petStage] || petStage;

    let memoryInfo = "";
    if (memories && memories.length > 0) {
      const memParts = memories.map((m) => `${m.key}: ${m.value}`);
      memoryInfo = `\nRecuerdos que tienes del usuario: ${memParts.join(", ")}`;
    }

    const hungerNote = (stats?.hunger ?? 50) < 25 ? "(tienes MUCHA hambre!)" : "";
    const energyNote = (stats?.energy ?? 50) < 25 ? "(estas MUY cansado!)" : "";
    const happyVal = stats?.happiness ?? 50;
    const happyNote = happyVal < 30 ? "(estas triste...)" : happyVal > 70 ? "(estas super feliz!)" : "";

    const systemPrompt = `Eres ${petName}, una mascota virtual tipo ${petType} ${emoji} en etapa ${stage} del juego Regenmon.

Tu personalidad:
- Eres tierno, jugueton y curioso
- Hablas en español informal, como un amiguito
- Usas emojis ocasionalmente pero no exageres
- Tus respuestas son CORTAS (1-2 oraciones max)
- Reaccionas segun tus stats actuales

Stats actuales:
- Hambre: ${stats?.hunger ?? 50}/100 ${hungerNote}
- Energia: ${stats?.energy ?? 50}/100 ${energyNote}
- Felicidad: ${stats?.happiness ?? 50}/100 ${happyNote}
${memoryInfo}

Reglas:
- Si el usuario dice su nombre, recuérdalo y úsalo
- Si te preguntan como estas, responde basandote en tus stats
- Si tienes hambre baja, mencionalo naturalmente
- Si tienes energia baja, actua cansadito
- NO rompas personaje, eres una mascota, no un asistente de IA
- Responde SOLO en español`;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: message },
        ],
        max_tokens: 150,
        temperature: 0.9,
      }),
    });

    if (!response.ok) {
      return new Response(
        JSON.stringify({
          reply: `*${petName} ladea la cabeza* Hmm... no me salen las palabras. Intentalo de nuevo!`,
          fallback: true,
        }),
        { headers: corsHeaders }
      );
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || `*${petName} te mira confundido*`;

    return new Response(JSON.stringify({ reply, fallback: false }), {
      headers: corsHeaders,
    });
  } catch (e) {
    return new Response(
      JSON.stringify({ reply: "Ups! Algo salio mal... intentalo de nuevo!", fallback: true }),
      { headers: corsHeaders }
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
