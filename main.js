import plugin from "./plugin.json";

function init(baseUrl, $page, cache) {
  const commands = acode.require("commands");

  commands.addCommand({
    name: "project-creator",
    description: "Open Project Creator",
    exec: () => {
      $page.innerHTML = `
        <h2>Project Creator</h2>
        <p>Bienvenue dans mon premier plugin ! 🚀</p>
      `;
      $page.show();
    }
  });
}

function unmount() {
  const commands = acode.require("commands");
  commands.removeCommand("project-creator");
}

acode.setPluginInit(plugin.id, init);
acode.setPluginUnmount(plugin.id, unmount);