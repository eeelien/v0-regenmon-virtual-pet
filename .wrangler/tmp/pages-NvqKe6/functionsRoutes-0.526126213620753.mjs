import { onRequestGet as __api_hub_feed_js_onRequestGet } from "/tmp/v0-regenmon-virtual-pet/functions/api/hub/feed.js"
import { onRequestGet as __api_hub_leaderboard_js_onRequestGet } from "/tmp/v0-regenmon-virtual-pet/functions/api/hub/leaderboard.js"
import { onRequestOptions as __api_hub_register_js_onRequestOptions } from "/tmp/v0-regenmon-virtual-pet/functions/api/hub/register.js"
import { onRequestPost as __api_hub_register_js_onRequestPost } from "/tmp/v0-regenmon-virtual-pet/functions/api/hub/register.js"
import { onRequestOptions as __api_hub_sync_js_onRequestOptions } from "/tmp/v0-regenmon-virtual-pet/functions/api/hub/sync.js"
import { onRequestPost as __api_hub_sync_js_onRequestPost } from "/tmp/v0-regenmon-virtual-pet/functions/api/hub/sync.js"
import { onRequestOptions as __api_chat_js_onRequestOptions } from "/tmp/v0-regenmon-virtual-pet/functions/api/chat.js"
import { onRequestPost as __api_chat_js_onRequestPost } from "/tmp/v0-regenmon-virtual-pet/functions/api/chat.js"
import { onRequestOptions as __api_evaluate_js_onRequestOptions } from "/tmp/v0-regenmon-virtual-pet/functions/api/evaluate.js"
import { onRequestPost as __api_evaluate_js_onRequestPost } from "/tmp/v0-regenmon-virtual-pet/functions/api/evaluate.js"

export const routes = [
    {
      routePath: "/api/hub/feed",
      mountPath: "/api/hub",
      method: "GET",
      middlewares: [],
      modules: [__api_hub_feed_js_onRequestGet],
    },
  {
      routePath: "/api/hub/leaderboard",
      mountPath: "/api/hub",
      method: "GET",
      middlewares: [],
      modules: [__api_hub_leaderboard_js_onRequestGet],
    },
  {
      routePath: "/api/hub/register",
      mountPath: "/api/hub",
      method: "OPTIONS",
      middlewares: [],
      modules: [__api_hub_register_js_onRequestOptions],
    },
  {
      routePath: "/api/hub/register",
      mountPath: "/api/hub",
      method: "POST",
      middlewares: [],
      modules: [__api_hub_register_js_onRequestPost],
    },
  {
      routePath: "/api/hub/sync",
      mountPath: "/api/hub",
      method: "OPTIONS",
      middlewares: [],
      modules: [__api_hub_sync_js_onRequestOptions],
    },
  {
      routePath: "/api/hub/sync",
      mountPath: "/api/hub",
      method: "POST",
      middlewares: [],
      modules: [__api_hub_sync_js_onRequestPost],
    },
  {
      routePath: "/api/chat",
      mountPath: "/api",
      method: "OPTIONS",
      middlewares: [],
      modules: [__api_chat_js_onRequestOptions],
    },
  {
      routePath: "/api/chat",
      mountPath: "/api",
      method: "POST",
      middlewares: [],
      modules: [__api_chat_js_onRequestPost],
    },
  {
      routePath: "/api/evaluate",
      mountPath: "/api",
      method: "OPTIONS",
      middlewares: [],
      modules: [__api_evaluate_js_onRequestOptions],
    },
  {
      routePath: "/api/evaluate",
      mountPath: "/api",
      method: "POST",
      middlewares: [],
      modules: [__api_evaluate_js_onRequestPost],
    },
  ]