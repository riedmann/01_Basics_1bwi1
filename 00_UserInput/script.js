import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });

let name = await rl.question("Enter your name: ");
console.log("Hello " + name + "!");

name = await rl.question("Enter your name: ");
console.log("2:" + name);

rl.close();
