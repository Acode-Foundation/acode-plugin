(()=>{var i={$schema:"https://acode.app/schema/plugin/v0.1.0.json",id:"com.degrace.templates",name:"Templates",main:"dist/main.js",version:"1.0.0",icon:"icon.png",minVersionCode:290,license:"MIT",price:0,keywords:["template","html","php","javascript"],author:{name:"Hacker2.0",email:"kiminoudegrace64@gmail.com",github:"Degrace15"},description:"Create HTML, PHP and JavaScript project templates in Acode."};function n(c,d,p){let o=acode.require("commands"),s=acode.require("select"),r=acode.require("fsOperation");o.addCommand({name:"templates",description:"Create project templates",exec:async()=>{let t=await s("Choose a template",[["html","HTML5 Template"],["php","PHP Template"],["js","JavaScript Template"]]);if(!t)return;let a=addedFolder[0];if(!a){acode.alert("Error","Please open a folder in Acode first.");return}try{let e=await r(a.url);t==="html"?(await e.createFile("index.html",`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>My Project</title>
<link rel="stylesheet" href="style.css">
</head>

<body>

<h1>Hello Acode \u{1F680}</h1>

<script src="script.js"><\/script>

</body>
</html>`),await e.createFile("style.css",`body {
  margin: 0;
  padding: 20px;
  font-family: Arial, sans-serif;
}`),await e.createFile("script.js",'console.log("JavaScript loaded successfully");')):t==="php"?await e.createFile("index.php",`<?php

echo "Hello PHP \u{1F680}";

?>`):t==="js"&&await e.createFile("index.js",'console.log("Hello JavaScript \u{1F680}");'),a.reload(),window.toast("Template created successfully \u2705")}catch(e){acode.alert("Error",e.message)}}})}function m(){acode.require("commands").removeCommand("templates")}acode.setPluginInit(i.id,n);acode.setPluginUnmount(i.id,m);})();
