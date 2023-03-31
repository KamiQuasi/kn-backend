

import { serve } from "https://deno.land/std@0.178.0/http/server.ts";
import { PathParser } from "./src/PathParser.js";
const port = Deno.env.get('PORT') ?? '8080';
const hostname = "0.0.0.0";

const handler = (request) => {
  const reqUrl = new URL(request.url);
  const asset = new PathParser(reqUrl);
  const status = 200;
  const headers = new Headers();
  headers.set('Content-Type','application/json');

  return new Response(JSON.stringify(asset), {status,headers} );
}

await serve(handler, {hostname,port});
console.log(`HTTP webserver running.  Access it at:  http://localhost:${port}/`);
