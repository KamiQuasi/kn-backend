import { serve } from "https://deno.land/std@0.178.0/http/server.ts";
import { PathParser } from "./src/PathParser.js";
const port = Deno.env.get('PORT') ?? '8080';
const graph = Deno.env.get('CPX_GRAPH') ?? 'oxigraph:7878';
const hostname = "0.0.0.0";

const handler = (request) => {
  const reqUrl = new URL(request.url);
  const asset = new PathParser(reqUrl);
  const status = 200;
  const headers = new Headers();
  headers.set('Content-Type','application/json');
  let resp;

  switch (request.method) {
    case 'POST':
      // curl -X POST -H 'Content-Type: application/sparql-update' --data 'DELETE WHERE { <http://example.com/s> ?p ?o }' http://localhost:7878/update
      resp = new Response(JSON.stringify({result:'success'}), {status,headers});
      break;
    default:
      // curl -X POST -H 'Content-Type:application/sparql-query' --data 'SELECT * WHERE { ?s ?p ?o } LIMIT 10' http://localhost:7878/query
      // curl -X POST -H 'Content-Type:application/sparql-query' --data 'SELECT * WHERE { ?s ?p ?o } LIMIT 10' http://localhost:7878/query
      resp = new Response(JSON.stringify({asset:asset,method:request.method}), {status,headers} );
  }
  
  return resp;
}

await serve(handler, {hostname,port});
console.log(`HTTP webserver running.  Access it at:  http://localhost:${port}/`);
