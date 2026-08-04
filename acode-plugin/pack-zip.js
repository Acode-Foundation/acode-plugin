import fs from "fs";
import JSZip from "jszip";

const zip = new JSZip();

const files = [
  "plugin.json",
  "README.md",
  "CHANGELOG.md",
  "icon.png",
  "dist/main.js"
];

for (const file of files) {
  if (fs.existsSync(file)) {
    zip.file(file, fs.readFileSync(file));
  }
}

const content = await zip.generateAsync({
  type: "nodebuffer"
});

fs.writeFileSync(
  "plugin.zip",
  content
);

console.log("plugin.zip created successfully.");
