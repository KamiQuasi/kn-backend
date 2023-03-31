import { serve } from "https://deno.land/std@0.74.0/http/server.ts";
const port = Deno.env.get('PORT') ?? '8080';
const hostname = "0.0.0.0";
const server = serve({ hostname, port });
console.log(`HTTP webserver running.  Access it at:  http://localhost:${port}/`);

for await (const request of server) {
  const headers = new Headers();
  headers.set('Content-Type','application/json');
  request.respond({ 
    status: 200, 
    body: JSON.stringify([...request.headers]), 
    headers: headers
  });
}