import plugin from "../plugin.json";

function init(baseUrl, $page, cache) {

  const commands = acode.require("commands");
  const select = acode.require("select");
  const fsOperation = acode.require("fsOperation");

  commands.addCommand({

    name: "templates",
    description: "Create project templates",

    exec: async () => {

      const templates = [
        ["html", "HTML5 Template"],
        ["php", "PHP Template"],
        ["js", "JavaScript Template"]
      ];

      const choice = await select(
        "Choose a template",
        templates
      );

      if (!choice) return;


      const folder = addedFolder[0];

      if (!folder) {

        acode.alert(
          "Error",
          "Please open a folder in Acode first."
        );

        return;
      }


      try {

        const fs = await fsOperation(folder.url);


        if (choice === "html") {


          await fs.createFile(
            "index.html",
`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>My Project</title>
<link rel="stylesheet" href="style.css">
</head>

<body>

<h1>Hello Acode 🚀</h1>

<script src="script.js"></script>

</body>
</html>`
          );


          await fs.createFile(
            "style.css",
`body {
  margin: 0;
  padding: 20px;
  font-family: Arial, sans-serif;
}`
          );


          await fs.createFile(
            "script.js",
`console.log("JavaScript loaded successfully");`
          );


        }
        else if (choice === "php") {

          await fs.createFile(
            "index.php",
`<?php

echo "Hello PHP 🚀";

?>`
          );


        } else if (choice === "js") {

          await fs.createFile(
            "index.js",
`console.log("Hello JavaScript 🚀");`
          );

        }


        folder.reload();


        window.toast(
          "Template created successfully ✅"
        );


      } catch (error) {


        acode.alert(
          "Error",
          error.message
        );


      }


    }

  });


}


function unmount() {

  const commands = acode.require("commands");

  commands.removeCommand("templates");

}


acode.setPluginInit(
  plugin.id,
  init
);


acode.setPluginUnmount(
  plugin.id,
  unmount
);
