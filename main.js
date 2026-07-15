import plugin from "./plugin.json";

function init(baseUrl, $page, cache) {
  const commands = acode.require("commands");

  commands.addCommand({
    name: "project-creator",
    description: "Open Project Creator",
    exec: async () => {
      try {
        const openFolder = acode.require("openFolder");
        const select = acode.require("select");
        const fsOperation = acode.require("fsOperation");
        const fileList = acode.require("fileList");

        const currentFolder = openFolder.target;

        if (!currentFolder || !currentFolder.url) {
          acode.alert(
            "Erreur",
            "Veuillez d'abord ouvrir ou sélectionner un dossier dans le gestionnaire de fichiers d'Acode."
          );
          return;
        }

        const options = [
          ["html", "Template Web HTML5 (index.html, style.css, script.js)"],
          ["php", "Template PHP (index.php)"],
          ["js", "Template JavaScript (index.js)"]
        ];

        const choice = await select("Créer un modèle de projet", options);
        if (!choice) return;

        const fs = fsOperation(currentFolder.url);

        if (choice === "html") {
          await fs.createFile("index.html", `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mon Projet HTML</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Projet HTML5 initialisé ! 🚀</h1>
    <script src="script.js"></script>
</body>
</html>`);

          await fs.createFile("style.css", `/* Styles du projet */
body {
  font-family: sans-serif;
  background-color: #f0f0f0;
}`);

          await fs.createFile("script.js", `// Code JavaScript
console.log("Le script est chargé !");`);

          window.toast("Structure HTML5 créée avec succès ! ✔️");
        } else if (choice === "php") {
          await fs.createFile("index.php", `<?php
// Template PHP
echo "<h1>Hello depuis PHP ! 🐘</h1>";
?>`);

          window.toast("Template PHP créé avec succès ! ✔️");
        } else if (choice === "js") {
          await fs.createFile("index.js", `// Template JavaScript
console.log("Hello Node.js / JS !");`);

          window.toast("Template JS créé avec succès ! ✔️");
        }

        if (fileList?.refresh) {
          fileList.refresh();
        }
      } catch (error) {
        acode.alert(
          "Erreur de création",
          "Impossible de générer les fichiers : " + error.message
        );
      }
    }
  });
}

function unmount() {
  const commands = acode.require("commands");
  commands.removeCommand("project-creator");
}

acode.setPluginInit(plugin.id, init);
acode.setPluginUnmount(plugin.id, unmount);
