"use strict";
/*import chalk from 'chalk';

console.log(chalk.blue('Hello world!'));*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
// underline
let prompt = require("prompt-sync")();
let name1 = prompt("what is your name?");
let name2 = prompt("what is your father's name?");
console.log(chalk_1.default.underline("your name is :"), chalk_1.default.underline.blueBright(name1));
console.log(chalk_1.default.underline("your father,sname is :"), chalk_1.default.underline.blueBright(name2));
