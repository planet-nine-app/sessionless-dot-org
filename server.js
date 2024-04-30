const server = Bun.serve({
  port: 3000,
  fetch(request) {
console.log(request.url);
    const url = new URL(request.url);
    console.log(url);
    if(url.pathname === "/") {
      return new Response(Bun.file("./src/index.html"));
    } else {
      return new Response(Bun.file("./src/styles/lit.css"));
    }
  },
});

console.log(`Listening on localhost:${server.port}`);
