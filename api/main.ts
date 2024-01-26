import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";

async function timeout(ms: number) {
  await new Promise((resolve) => setTimeout(resolve, ms));
}

let count = 0

const router = new Router();
router
  .get('/keepalive/:id', async (context) => {
    const id = context.params.id
    await timeout(2000);
    count++
    console.log('count', count);
    context.response.body = `Book ${id}`
  })
  .post('/keepalive/:id', async (context) => {
    const id = context.params.id
    await timeout(2000);
    count++
    console.log('count', count);
    context.response.body = `Book ${id}`
  })


const app = new Application();
app.use(oakCors()); // Enable CORS for All Routes
app.use(router.routes());

console.info("CORS-enabled web server listening on port 8000");
await app.listen({ port: 8000 });
