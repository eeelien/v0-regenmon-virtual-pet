var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// api/hub/feed.js
async function onRequestGet() {
  return new Response(JSON.stringify([]), {
    headers: { "Access-Control-Allow-Origin": "*", "Content-Type": "application/json" }
  });
}
__name(onRequestGet, "onRequestGet");

// api/hub/leaderboard.js
async function onRequestGet2() {
  return new Response(JSON.stringify([]), {
    headers: { "Access-Control-Allow-Origin": "*", "Content-Type": "application/json" }
  });
}
__name(onRequestGet2, "onRequestGet");

// api/hub/register.js
async function onRequestPost(context) {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json"
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
__name(onRequestPost, "onRequestPost");
async function onRequestOptions() {
  return new Response(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    }
  });
}
__name(onRequestOptions, "onRequestOptions");

// api/hub/sync.js
async function onRequestPost2(context) {
  const body = await context.request.json();
  return new Response(JSON.stringify({ ok: true }), {
    headers: { "Access-Control-Allow-Origin": "*", "Content-Type": "application/json" }
  });
}
__name(onRequestPost2, "onRequestPost");
async function onRequestOptions2() {
  return new Response(null, {
    headers: { "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "POST, OPTIONS", "Access-Control-Allow-Headers": "Content-Type" }
  });
}
__name(onRequestOptions2, "onRequestOptions");

// api/chat.js
async function onRequestPost3(context) {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json"
  };
  try {
    const body = await context.request.json();
    const { message, petName, petType, petStage, stats, memories } = body;
    if (!message) {
      return new Response(JSON.stringify({ error: "Falta el mensaje" }), {
        status: 400,
        headers: corsHeaders
      });
    }
    const apiKey = context.env.OPENAI_API_KEY;
    if (!apiKey) {
      return new Response(
        JSON.stringify({
          reply: `*${petName || "tu mascota"} te mira con curiosidad* No puedo hablar ahorita... (falta API key)`,
          fallback: true
        }),
        { headers: corsHeaders }
      );
    }
    const typeEmoji = { semilla: "\u{1F331}", gota: "\u{1F4A7}", chispa: "\u2728" };
    const emoji = typeEmoji[petType] || "\u{1F95A}";
    const stageLabel = { baby: "Beb\xE9", young: "Joven", adult: "Adulto" };
    const stage = stageLabel[petStage] || petStage;
    let memoryInfo = "";
    if (memories && memories.length > 0) {
      const memParts = memories.map((m) => `${m.key}: ${m.value}`);
      memoryInfo = `
Recuerdos que tienes del usuario: ${memParts.join(", ")}`;
    }
    const hungerNote = (stats?.hunger ?? 50) < 25 ? "(tienes MUCHA hambre!)" : "";
    const energyNote = (stats?.energy ?? 50) < 25 ? "(estas MUY cansado!)" : "";
    const happyVal = stats?.happiness ?? 50;
    const happyNote = happyVal < 30 ? "(estas triste...)" : happyVal > 70 ? "(estas super feliz!)" : "";
    const systemPrompt = `Eres ${petName}, una mascota virtual tipo ${petType} ${emoji} en etapa ${stage} del juego Regenmon.

Tu personalidad:
- Eres tierno, jugueton y curioso
- Hablas en espa\xF1ol informal, como un amiguito
- Usas emojis ocasionalmente pero no exageres
- Tus respuestas son CORTAS (1-2 oraciones max)
- Reaccionas segun tus stats actuales

Stats actuales:
- Hambre: ${stats?.hunger ?? 50}/100 ${hungerNote}
- Energia: ${stats?.energy ?? 50}/100 ${energyNote}
- Felicidad: ${stats?.happiness ?? 50}/100 ${happyNote}
${memoryInfo}

Reglas:
- Si el usuario dice su nombre, recu\xE9rdalo y \xFAsalo
- Si te preguntan como estas, responde basandote en tus stats
- Si tienes hambre baja, mencionalo naturalmente
- Si tienes energia baja, actua cansadito
- NO rompas personaje, eres una mascota, no un asistente de IA
- Responde SOLO en espa\xF1ol`;
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: message }
        ],
        max_tokens: 150,
        temperature: 0.9
      })
    });
    if (!response.ok) {
      return new Response(
        JSON.stringify({
          reply: `*${petName} ladea la cabeza* Hmm... no me salen las palabras. Intentalo de nuevo!`,
          fallback: true
        }),
        { headers: corsHeaders }
      );
    }
    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || `*${petName} te mira confundido*`;
    return new Response(JSON.stringify({ reply, fallback: false }), {
      headers: corsHeaders
    });
  } catch (e) {
    return new Response(
      JSON.stringify({ reply: "Ups! Algo salio mal... intentalo de nuevo!", fallback: true }),
      { headers: corsHeaders }
    );
  }
}
__name(onRequestPost3, "onRequestPost");
async function onRequestOptions3() {
  return new Response(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    }
  });
}
__name(onRequestOptions3, "onRequestOptions");

// api/evaluate.js
var CATEGORY_PROMPTS = {
  codigo: "Evalua esta imagen de codigo. Criterios: organizacion del codigo, buenas practicas, complejidad, legibilidad y estructura.",
  diseno: "Evalua esta imagen de diseno UI/UX o grafico. Criterios: estetica, uso de colores, tipografia, creatividad y composicion visual.",
  proyecto: "Evalua esta imagen de un proyecto completo. Criterios: funcionalidad aparente, calidad visual, complejidad y nivel profesional.",
  aprendizaje: "Evalua esta imagen de notas o ejercicios de estudio. Criterios: esfuerzo visible, comprension del tema, aplicacion practica y organizacion."
};
function parseScore(text) {
  const match2 = text.match(/Score:\s*(\d+)/i);
  if (match2) {
    const score = parseInt(match2[1], 10);
    if (score >= 0 && score <= 100) return score;
  }
  const altMatch = text.match(/(\d{1,3})\s*\/\s*100/);
  if (altMatch) {
    const score = parseInt(altMatch[1], 10);
    if (score >= 0 && score <= 100) return score;
  }
  return -1;
}
__name(parseScore, "parseScore");
function getDefaultScore() {
  return Math.floor(Math.random() * 21) + 40;
}
__name(getDefaultScore, "getDefaultScore");
async function onRequestPost4(context) {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json"
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
Score: [0-100]/100. [1-2 oraciones de feedback constructivo en espa\xF1ol]`;
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
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
                  detail: "low"
                }
              }
            ]
          }
        ],
        max_tokens: 300,
        temperature: 0.7
      })
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
__name(onRequestPost4, "onRequestPost");
async function onRequestOptions4() {
  return new Response(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    }
  });
}
__name(onRequestOptions4, "onRequestOptions");

// ../.wrangler/tmp/pages-anAQIX/functionsRoutes-0.5936059485152763.mjs
var routes = [
  {
    routePath: "/api/hub/feed",
    mountPath: "/api/hub",
    method: "GET",
    middlewares: [],
    modules: [onRequestGet]
  },
  {
    routePath: "/api/hub/leaderboard",
    mountPath: "/api/hub",
    method: "GET",
    middlewares: [],
    modules: [onRequestGet2]
  },
  {
    routePath: "/api/hub/register",
    mountPath: "/api/hub",
    method: "OPTIONS",
    middlewares: [],
    modules: [onRequestOptions]
  },
  {
    routePath: "/api/hub/register",
    mountPath: "/api/hub",
    method: "POST",
    middlewares: [],
    modules: [onRequestPost]
  },
  {
    routePath: "/api/hub/sync",
    mountPath: "/api/hub",
    method: "OPTIONS",
    middlewares: [],
    modules: [onRequestOptions2]
  },
  {
    routePath: "/api/hub/sync",
    mountPath: "/api/hub",
    method: "POST",
    middlewares: [],
    modules: [onRequestPost2]
  },
  {
    routePath: "/api/chat",
    mountPath: "/api",
    method: "OPTIONS",
    middlewares: [],
    modules: [onRequestOptions3]
  },
  {
    routePath: "/api/chat",
    mountPath: "/api",
    method: "POST",
    middlewares: [],
    modules: [onRequestPost3]
  },
  {
    routePath: "/api/evaluate",
    mountPath: "/api",
    method: "OPTIONS",
    middlewares: [],
    modules: [onRequestOptions4]
  },
  {
    routePath: "/api/evaluate",
    mountPath: "/api",
    method: "POST",
    middlewares: [],
    modules: [onRequestPost4]
  }
];

// ../../../home/dumbleclaw/.npm/_npx/32026684e21afda6/node_modules/path-to-regexp/dist.es2015/index.js
function lexer(str) {
  var tokens = [];
  var i = 0;
  while (i < str.length) {
    var char = str[i];
    if (char === "*" || char === "+" || char === "?") {
      tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
      continue;
    }
    if (char === "\\") {
      tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
      continue;
    }
    if (char === "{") {
      tokens.push({ type: "OPEN", index: i, value: str[i++] });
      continue;
    }
    if (char === "}") {
      tokens.push({ type: "CLOSE", index: i, value: str[i++] });
      continue;
    }
    if (char === ":") {
      var name = "";
      var j = i + 1;
      while (j < str.length) {
        var code = str.charCodeAt(j);
        if (
          // `0-9`
          code >= 48 && code <= 57 || // `A-Z`
          code >= 65 && code <= 90 || // `a-z`
          code >= 97 && code <= 122 || // `_`
          code === 95
        ) {
          name += str[j++];
          continue;
        }
        break;
      }
      if (!name)
        throw new TypeError("Missing parameter name at ".concat(i));
      tokens.push({ type: "NAME", index: i, value: name });
      i = j;
      continue;
    }
    if (char === "(") {
      var count = 1;
      var pattern = "";
      var j = i + 1;
      if (str[j] === "?") {
        throw new TypeError('Pattern cannot start with "?" at '.concat(j));
      }
      while (j < str.length) {
        if (str[j] === "\\") {
          pattern += str[j++] + str[j++];
          continue;
        }
        if (str[j] === ")") {
          count--;
          if (count === 0) {
            j++;
            break;
          }
        } else if (str[j] === "(") {
          count++;
          if (str[j + 1] !== "?") {
            throw new TypeError("Capturing groups are not allowed at ".concat(j));
          }
        }
        pattern += str[j++];
      }
      if (count)
        throw new TypeError("Unbalanced pattern at ".concat(i));
      if (!pattern)
        throw new TypeError("Missing pattern at ".concat(i));
      tokens.push({ type: "PATTERN", index: i, value: pattern });
      i = j;
      continue;
    }
    tokens.push({ type: "CHAR", index: i, value: str[i++] });
  }
  tokens.push({ type: "END", index: i, value: "" });
  return tokens;
}
__name(lexer, "lexer");
function parse(str, options) {
  if (options === void 0) {
    options = {};
  }
  var tokens = lexer(str);
  var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a, _b = options.delimiter, delimiter = _b === void 0 ? "/#?" : _b;
  var result = [];
  var key = 0;
  var i = 0;
  var path = "";
  var tryConsume = /* @__PURE__ */ __name(function(type) {
    if (i < tokens.length && tokens[i].type === type)
      return tokens[i++].value;
  }, "tryConsume");
  var mustConsume = /* @__PURE__ */ __name(function(type) {
    var value2 = tryConsume(type);
    if (value2 !== void 0)
      return value2;
    var _a2 = tokens[i], nextType = _a2.type, index = _a2.index;
    throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
  }, "mustConsume");
  var consumeText = /* @__PURE__ */ __name(function() {
    var result2 = "";
    var value2;
    while (value2 = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")) {
      result2 += value2;
    }
    return result2;
  }, "consumeText");
  var isSafe = /* @__PURE__ */ __name(function(value2) {
    for (var _i = 0, delimiter_1 = delimiter; _i < delimiter_1.length; _i++) {
      var char2 = delimiter_1[_i];
      if (value2.indexOf(char2) > -1)
        return true;
    }
    return false;
  }, "isSafe");
  var safePattern = /* @__PURE__ */ __name(function(prefix2) {
    var prev = result[result.length - 1];
    var prevText = prefix2 || (prev && typeof prev === "string" ? prev : "");
    if (prev && !prevText) {
      throw new TypeError('Must have text between two parameters, missing text after "'.concat(prev.name, '"'));
    }
    if (!prevText || isSafe(prevText))
      return "[^".concat(escapeString(delimiter), "]+?");
    return "(?:(?!".concat(escapeString(prevText), ")[^").concat(escapeString(delimiter), "])+?");
  }, "safePattern");
  while (i < tokens.length) {
    var char = tryConsume("CHAR");
    var name = tryConsume("NAME");
    var pattern = tryConsume("PATTERN");
    if (name || pattern) {
      var prefix = char || "";
      if (prefixes.indexOf(prefix) === -1) {
        path += prefix;
        prefix = "";
      }
      if (path) {
        result.push(path);
        path = "";
      }
      result.push({
        name: name || key++,
        prefix,
        suffix: "",
        pattern: pattern || safePattern(prefix),
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    var value = char || tryConsume("ESCAPED_CHAR");
    if (value) {
      path += value;
      continue;
    }
    if (path) {
      result.push(path);
      path = "";
    }
    var open = tryConsume("OPEN");
    if (open) {
      var prefix = consumeText();
      var name_1 = tryConsume("NAME") || "";
      var pattern_1 = tryConsume("PATTERN") || "";
      var suffix = consumeText();
      mustConsume("CLOSE");
      result.push({
        name: name_1 || (pattern_1 ? key++ : ""),
        pattern: name_1 && !pattern_1 ? safePattern(prefix) : pattern_1,
        prefix,
        suffix,
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    mustConsume("END");
  }
  return result;
}
__name(parse, "parse");
function match(str, options) {
  var keys = [];
  var re = pathToRegexp(str, keys, options);
  return regexpToFunction(re, keys, options);
}
__name(match, "match");
function regexpToFunction(re, keys, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.decode, decode = _a === void 0 ? function(x) {
    return x;
  } : _a;
  return function(pathname) {
    var m = re.exec(pathname);
    if (!m)
      return false;
    var path = m[0], index = m.index;
    var params = /* @__PURE__ */ Object.create(null);
    var _loop_1 = /* @__PURE__ */ __name(function(i2) {
      if (m[i2] === void 0)
        return "continue";
      var key = keys[i2 - 1];
      if (key.modifier === "*" || key.modifier === "+") {
        params[key.name] = m[i2].split(key.prefix + key.suffix).map(function(value) {
          return decode(value, key);
        });
      } else {
        params[key.name] = decode(m[i2], key);
      }
    }, "_loop_1");
    for (var i = 1; i < m.length; i++) {
      _loop_1(i);
    }
    return { path, index, params };
  };
}
__name(regexpToFunction, "regexpToFunction");
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
__name(escapeString, "escapeString");
function flags(options) {
  return options && options.sensitive ? "" : "i";
}
__name(flags, "flags");
function regexpToRegexp(path, keys) {
  if (!keys)
    return path;
  var groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
  var index = 0;
  var execResult = groupsRegex.exec(path.source);
  while (execResult) {
    keys.push({
      // Use parenthesized substring match if available, index otherwise
      name: execResult[1] || index++,
      prefix: "",
      suffix: "",
      modifier: "",
      pattern: ""
    });
    execResult = groupsRegex.exec(path.source);
  }
  return path;
}
__name(regexpToRegexp, "regexpToRegexp");
function arrayToRegexp(paths, keys, options) {
  var parts = paths.map(function(path) {
    return pathToRegexp(path, keys, options).source;
  });
  return new RegExp("(?:".concat(parts.join("|"), ")"), flags(options));
}
__name(arrayToRegexp, "arrayToRegexp");
function stringToRegexp(path, keys, options) {
  return tokensToRegexp(parse(path, options), keys, options);
}
__name(stringToRegexp, "stringToRegexp");
function tokensToRegexp(tokens, keys, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function(x) {
    return x;
  } : _d, _e = options.delimiter, delimiter = _e === void 0 ? "/#?" : _e, _f = options.endsWith, endsWith = _f === void 0 ? "" : _f;
  var endsWithRe = "[".concat(escapeString(endsWith), "]|$");
  var delimiterRe = "[".concat(escapeString(delimiter), "]");
  var route = start ? "^" : "";
  for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
    var token = tokens_1[_i];
    if (typeof token === "string") {
      route += escapeString(encode(token));
    } else {
      var prefix = escapeString(encode(token.prefix));
      var suffix = escapeString(encode(token.suffix));
      if (token.pattern) {
        if (keys)
          keys.push(token);
        if (prefix || suffix) {
          if (token.modifier === "+" || token.modifier === "*") {
            var mod = token.modifier === "*" ? "?" : "";
            route += "(?:".concat(prefix, "((?:").concat(token.pattern, ")(?:").concat(suffix).concat(prefix, "(?:").concat(token.pattern, "))*)").concat(suffix, ")").concat(mod);
          } else {
            route += "(?:".concat(prefix, "(").concat(token.pattern, ")").concat(suffix, ")").concat(token.modifier);
          }
        } else {
          if (token.modifier === "+" || token.modifier === "*") {
            throw new TypeError('Can not repeat "'.concat(token.name, '" without a prefix and suffix'));
          }
          route += "(".concat(token.pattern, ")").concat(token.modifier);
        }
      } else {
        route += "(?:".concat(prefix).concat(suffix, ")").concat(token.modifier);
      }
    }
  }
  if (end) {
    if (!strict)
      route += "".concat(delimiterRe, "?");
    route += !options.endsWith ? "$" : "(?=".concat(endsWithRe, ")");
  } else {
    var endToken = tokens[tokens.length - 1];
    var isEndDelimited = typeof endToken === "string" ? delimiterRe.indexOf(endToken[endToken.length - 1]) > -1 : endToken === void 0;
    if (!strict) {
      route += "(?:".concat(delimiterRe, "(?=").concat(endsWithRe, "))?");
    }
    if (!isEndDelimited) {
      route += "(?=".concat(delimiterRe, "|").concat(endsWithRe, ")");
    }
  }
  return new RegExp(route, flags(options));
}
__name(tokensToRegexp, "tokensToRegexp");
function pathToRegexp(path, keys, options) {
  if (path instanceof RegExp)
    return regexpToRegexp(path, keys);
  if (Array.isArray(path))
    return arrayToRegexp(path, keys, options);
  return stringToRegexp(path, keys, options);
}
__name(pathToRegexp, "pathToRegexp");

// ../../../home/dumbleclaw/.npm/_npx/32026684e21afda6/node_modules/wrangler/templates/pages-template-worker.ts
var escapeRegex = /[.+?^${}()|[\]\\]/g;
function* executeRequest(request) {
  const requestPath = new URL(request.url).pathname;
  for (const route of [...routes].reverse()) {
    if (route.method && route.method !== request.method) {
      continue;
    }
    const routeMatcher = match(route.routePath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const mountMatcher = match(route.mountPath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const matchResult = routeMatcher(requestPath);
    const mountMatchResult = mountMatcher(requestPath);
    if (matchResult && mountMatchResult) {
      for (const handler of route.middlewares.flat()) {
        yield {
          handler,
          params: matchResult.params,
          path: mountMatchResult.path
        };
      }
    }
  }
  for (const route of routes) {
    if (route.method && route.method !== request.method) {
      continue;
    }
    const routeMatcher = match(route.routePath.replace(escapeRegex, "\\$&"), {
      end: true
    });
    const mountMatcher = match(route.mountPath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const matchResult = routeMatcher(requestPath);
    const mountMatchResult = mountMatcher(requestPath);
    if (matchResult && mountMatchResult && route.modules.length) {
      for (const handler of route.modules.flat()) {
        yield {
          handler,
          params: matchResult.params,
          path: matchResult.path
        };
      }
      break;
    }
  }
}
__name(executeRequest, "executeRequest");
var pages_template_worker_default = {
  async fetch(originalRequest, env, workerContext) {
    let request = originalRequest;
    const handlerIterator = executeRequest(request);
    let data = {};
    let isFailOpen = false;
    const next = /* @__PURE__ */ __name(async (input, init) => {
      if (input !== void 0) {
        let url = input;
        if (typeof input === "string") {
          url = new URL(input, request.url).toString();
        }
        request = new Request(url, init);
      }
      const result = handlerIterator.next();
      if (result.done === false) {
        const { handler, params, path } = result.value;
        const context = {
          request: new Request(request.clone()),
          functionPath: path,
          next,
          params,
          get data() {
            return data;
          },
          set data(value) {
            if (typeof value !== "object" || value === null) {
              throw new Error("context.data must be an object");
            }
            data = value;
          },
          env,
          waitUntil: workerContext.waitUntil.bind(workerContext),
          passThroughOnException: /* @__PURE__ */ __name(() => {
            isFailOpen = true;
          }, "passThroughOnException")
        };
        const response = await handler(context);
        if (!(response instanceof Response)) {
          throw new Error("Your Pages function should return a Response");
        }
        return cloneResponse(response);
      } else if ("ASSETS") {
        const response = await env["ASSETS"].fetch(request);
        return cloneResponse(response);
      } else {
        const response = await fetch(request);
        return cloneResponse(response);
      }
    }, "next");
    try {
      return await next();
    } catch (error) {
      if (isFailOpen) {
        const response = await env["ASSETS"].fetch(request);
        return cloneResponse(response);
      }
      throw error;
    }
  }
};
var cloneResponse = /* @__PURE__ */ __name((response) => (
  // https://fetch.spec.whatwg.org/#null-body-status
  new Response(
    [101, 204, 205, 304].includes(response.status) ? null : response.body,
    response
  )
), "cloneResponse");
export {
  pages_template_worker_default as default
};
