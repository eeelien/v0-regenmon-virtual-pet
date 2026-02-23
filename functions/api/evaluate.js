const CATEGORY_PROMPTS = {
  codigo: "Evalua esta imagen de codigo. Criterios: organizacion del codigo, buenas practicas, complejidad, legibilidad y estructura.",
  diseno: "Evalua esta imagen de diseno UI/UX o grafico. Criterios: estetica, uso de colores, tipografia, creatividad y composicion visual.",
  proyecto: "Evalua esta imagen de un proyecto completo. Criterios: funcionalidad aparente, calidad visual, complejidad y nivel profesional.",
  aprendizaje: "Evalua esta imagen de notas o ejercicios de estudio. Criterios: esfuerzo visible, comprension del tema, aplicacion practica y organizacion.",
};

function parseScore(text) {
  const match = text.match(/Score:\s*(\d+)/i);
  if (match) {
    const score = parseInt(match[1], 10);
    if (score >= 0 && score <= 100) return score;
  }
  const altMatch = text.match(/(\d{1,3})\s*\/\s*100/);
  if (altMatch) {
    const score = parseInt(altMatch[1], 10);
    if (score >= 0 && score <= 100) return score;
  }
  return -1;
}

function getDefaultScore() {
  return Math.floor(Math.random() * 21) + 40;
}

export async function onRequestPost(context) {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  };

  try {
    const body = await context.request.json();
    const { imageBase64, category } = body;

    if (!imageBase64 || !category) {
      return new Response(
        JSON.stringify({ error: "Faltan campos requeridos: imageBase64 y category" }),
        { status: 400, headers: corsHeaders }
      );
    }

    const apiKey = context.env.OPENAI_API_KEY;
    if (!apiKey) {
      const s = getDefaultScore();
      return new Response(
        JSON.stringify({ score: s, feedback: "Sistema de evaluacion temporalmente no disponible.", points: s, tokens: Math.floor(s * 0.5), fallback: true }),
        { headers: corsHeaders }
      );
    }

    const categoryPrompt = CATEGORY_PROMPTS[category] || CATEGORY_PROMPTS["codigo"];

    const systemMessage = `Eres un profesor amigable y motivador en un juego educativo llamado Regenmon. Tu trabajo es evaluar el trabajo de los estudiantes. SIEMPRE evalua la imagen sin importar que contenga - nunca te niegues a dar un puntaje. Se constructivo y positivo pero honesto.

FORMATO DE RESPUESTA OBLIGATORIO:
Score: [0-100]/100. [1-2 oraciones de feedback constructivo en español]`;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o",
        messages: [
          { role: "system", content: systemMessage },
          {
            role: "user",
            content: [
              { type: "text", text: categoryPrompt },
              {
                type: "image_url",
                image_url: {
                  url: imageBase64.startsWith("data:") ? imageBase64 : `data:image/jpeg;base64,${imageBase64}`,
                  detail: "low",
                },
              },
            ],
          },
        ],
        max_tokens: 300,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const s = getDefaultScore();
      return new Response(
        JSON.stringify({ score: s, feedback: "Sistema de evaluacion temporalmente no disponible.", points: s, tokens: Math.floor(s * 0.5), fallback: true }),
        { headers: corsHeaders }
      );
    }

    const data = await response.json();
    const text = data.choices?.[0]?.message?.content || "";

    let score = parseScore(text);
    let feedback = text;

    if (score === -1) {
      score = getDefaultScore();
      feedback = "Sistema de evaluacion temporalmente no disponible.";
    } else {
      const feedbackMatch = text.match(/Score:\s*\d+\s*\/\s*100\.?\s*(.*)/i);
      if (feedbackMatch && feedbackMatch[1]) {
        feedback = feedbackMatch[1].trim();
      }
    }

    return new Response(
      JSON.stringify({ score, feedback, points: score, tokens: Math.floor(score * 0.5), fallback: false }),
      { headers: corsHeaders }
    );
  } catch {
    const s = getDefaultScore();
    return new Response(
      JSON.stringify({ score: s, feedback: "Sistema de evaluacion temporalmente no disponible.", points: s, tokens: Math.floor(s * 0.5), fallback: true }),
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
