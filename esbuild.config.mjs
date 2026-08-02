import esbuild from "esbuild";

esbuild.build({
  entryPoints: ["src/main.js"],
  bundle: true,
  outfile: "dist/main.js",
  format: "iife",
  platform: "browser",
  minify: true,
  sourcemap: false
}).catch(() => process.exit(1));
