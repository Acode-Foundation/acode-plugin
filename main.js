import plugin from "./plugin.json";

function init(baseUrl, $page, cache) {
  const commands = acode.require("commands");

  commands.addCommand({
    name: "project-creator",
    description: "Open Project Creator",
    exec: async () => {
      // 1. Récupérer le dossier actuellement ouvert dans l'éditeur
      const currentFolder = acode.getFolder();
      if (!currentFolder) {
        acode.alert("Erreur", "Veuillez d'abord ouvrir un dossier dans Acode pour y créer le projet.");
        return;
      }

      // 2. Définir les options du menu
      const options = [
        ["html", "Template Web HTML5 (index.html, style.css, script.js)"],
        ["php", "Template PHP (index.php)"],
        ["js", "Template JavaScript (index.js)"]
      ];

      // 3. Afficher le sélecteur natif d'Acode
      const choice = await acode.select("Créer un modèle de projet", options);
      if (!choice) return; // L'utilisateur a annulé

      try {
        const fs = fsOperation(currentFolder.url);

        if (choice === "html") {
          // Création d'une structure HTML5 de base
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
          await fs.createFile("style.css", `/* Styles du projet */\nbody {\n  font-family: sans-serif;\n  background-color: #f0f0f0;\n}`);
          await fs.createFile("script.js", `// Code JavaScript\nconsole.log("Le script est chargé !");`);
          
          window.toast("Structure HTML5 créée avec succès ! ✔️");
        } 
        
        else if (choice === "php") {
          // Création d'un fichier PHP de base
          await fs.createFile("index.php", `<?php\n// Template PHP\necho "<h1>Hello depuis PHP ! 🐘</h1>";\n?>`);
          window.toast("Template PHP créé avec succès ! ✔️");
        } 
        
        else if (choice === "js") {
          // Création d'un fichier JS de base
          await fs.createFile("index.js", `// Template JavaScript\nconsole.log("Hello Node.js / JS ! JS");`);
          window.toast("Template JS créé avec succès ! ✔️");
        }

        // Rafraîchir l'arborescence des fichiers pour afficher les nouveautés
        acode.refreshFileList();

      } catch (error) {
        acode.alert("Erreur de création", "Impossible de générer les fichiers : " + error.message);
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
