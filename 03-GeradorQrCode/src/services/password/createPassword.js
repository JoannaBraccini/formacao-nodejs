import chalk from "chalk";
import { handlePassword } from "./handlePassword.js";

export async function createPassword() {
  console.log(chalk.green.bold("Gerando senha..."));
  const password = await handlePassword();
  console.log(chalk.green.bold("Senha gerada com sucesso:\n"));
  console.log(chalk.blue(password));
}
