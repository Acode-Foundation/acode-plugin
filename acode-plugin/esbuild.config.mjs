import esbuild from "esbuild";
import path from "path";

esbuild.build({
  entryPoints: [
    path.resolve("src/main.js")
  ],
  bundle: true,
  outfile: "dist/main.js",
  format: "iife",
  platform: "browser",
  minify: true,
  sourcemap: false
}).catch(() => process.exit(1));
