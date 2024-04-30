await Bun.build({
  entrypoints: ["./src/index.html"],
  outdir: "./build",
  minify: false,
  plugins: [ /* ... */ ]
})
