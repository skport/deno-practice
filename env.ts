// deno run env.ts

import { load } from "https://deno.land/std@0.178.0/dotenv/mod.ts";

const env = await load();
const app_env = env["APP_ENV"];

console.log(app_env);