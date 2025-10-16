import readline from "readline/promises";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({ input, output });

let a = parseFloat(await rl.question("Enter the value of a: "));

if (a >= 80) {
  // Blockklammern
  console.log("Die Zahl ist groß");
} else if (a >= 40) {
  console.log("Die Zahl ist positiv aber klein");
} else {
  console.log("Die Zahl ist klein");
}

rl.close();
