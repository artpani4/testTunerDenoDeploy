import Tuner from "@artpani/tuner";
import { AppCfgType } from "./config/app.tuner.ts";
import { serve } from "https://deno.land/std/http/server.ts";

// Load the configuration
const c = await Tuner.use.loadConfig<AppCfgType>({});
console.log(c);

console.log(Deno.env.get("config"));

// Create a simple HTTP server
const handler = (req: Request): Response => {
  const body = JSON.stringify(
    {
      adminId: c.data.adminId,
      botName: c.data.botName,
      appName: c.data.appName,
      logLevel: c.data.logLevel,
      someCommonField: c.data.someCommonField,
      token: c.env.TOKEN,
      someEnv: c.env.SOME_ENV,
    },
    null,
    2,
  );

  return new Response(body, {
    status: 200,
    headers: {
      "content-type": "application/json",
    },
  });
};

// Listen on port 8000
console.log("Server running on http://localhost:8000");
await serve(handler, { port: 8000 });
