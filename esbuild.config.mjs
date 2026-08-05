import esbuild from "esbuild";
import { execSync } from "child_process";

esbuild.build({
  entryPoints: ["src/main.js"],
  bundle: true,
  outfile: "dist/main.js",
  format: "iife",
  platform: "browser",
  minify: true,
  sourcemap: false
}).then(() => {
  console.log("Build completed. Creating plugin ZIP...");

  execSync("node pack-zip.js", {
    stdio: "inherit"
  });

  console.log("plugin.zip created successfully.");
}).catch(() => process.exit(1));
