(()=>{var i={$schema:"https://acode.app/schema/plugin/v0.1.0.json",id:"com.degrace.templates",name:"Templates",main:"dist/main.js",version:"1.1.0",readme:"readme.md",changelogs:"CHANGELOG.md",repository:"https://github.com/Degrace15/acode-templates",icon:"icon.png",minVersionCode:290,license:"MIT",price:0,keywords:["template","html","css","php","javascript","python","c","cpp","java","project-generator"],author:{name:"Hacker2.0",email:"kiminoudegrace64@gmail.com",github:"Degrace15"},description:"Create complete project templates for HTML, PHP, JavaScript, Python, C, C++, Java in Acode."};function n(o,m,d){let c=acode.require("commands"),r=acode.require("select"),s=acode.require("fsOperation");c.addCommand({name:"templates",description:"Create project templates",exec:async()=>{let a=await r("Choose a template",[["html","HTML5 Project"],["php","PHP Project"],["javascript","JavaScript Project"],["python","Python Project"],["c","C Project"],["cpp","C++ Project"],["java","Java Project"]]);if(!a)return;let t=addedFolder[0];if(!t){acode.alert("Error","Please open a folder in Acode first.");return}try{let e=await s(t.url);a==="html"?(await e.createFile("index.html",`<!DOCTYPE html>
<html>
<head>
<title>My Website</title>
<link rel="stylesheet" href="style.css">
</head>

<body>

<h1>Hello Acode \u{1F680}</h1>

<script src="script.js"><\/script>

</body>
</html>`),await e.createFile("style.css",`body {
  margin: 0;
  padding: 20px;
  font-family: Arial;
}`),await e.createFile("script.js",'console.log("JavaScript loaded");')):a==="php"?(await e.createFile("index.php",`<?php

echo "Hello PHP \u{1F680}";

?>`),await e.createFile("config.php",`<?php

$host = "localhost";
$user = "root";
$password = "";
$database = "database";

?>`)):a==="javascript"?await e.createFile("index.js",'console.log("Hello JavaScript \u{1F680}");'):a==="python"?(await e.createFile("main.py",'print("Hello Python \u{1F680}")'),await e.createFile("requirements.txt","")):a==="c"?await e.createFile("main.c",`#include <stdio.h>

int main(){

    printf("Hello C \u{1F680}");

    return 0;
}`):a==="cpp"?await e.createFile("main.cpp",`#include <iostream>

using namespace std;

int main(){

    cout << "Hello C++ \u{1F680}";

    return 0;
}`):a==="java"&&await e.createFile("Main.java",`public class Main {

    public static void main(String[] args){

        System.out.println("Hello Java \u{1F680}");

    }

}`),t.reload(),window.toast("Template created successfully \u2705")}catch(e){acode.alert("Error",e.message)}}})}function p(){acode.require("commands").removeCommand("templates")}acode.setPluginInit(i.id,n);acode.setPluginUnmount(i.id,p);})();
