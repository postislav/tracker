import { access } from "node:fs/promises";

const requiredFiles = ["index.html", "src/main.js", "src/styles.css"];

await Promise.all(requiredFiles.map((file) => access(file)));
console.log("Static app check passed.");
