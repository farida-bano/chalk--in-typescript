/*import chalk from 'chalk';

console.log(chalk.blue('Hello world!'));*/

import chalk from "chalk";

// underline
let prompt = require("prompt-sync")();
let name1 = prompt ("what is your name?");
let name2 = prompt ("what is your father's name?");
console.log(
    chalk.underline("your name is :"),
chalk.underline.blueBright(name1));

console.log(
    chalk.underline("your father,sname is :"),
chalk.underline.blueBright(name2));
