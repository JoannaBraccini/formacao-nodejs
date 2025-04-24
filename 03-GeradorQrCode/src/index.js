import { createPassword } from "./services/password/createPassword.js";
import { createQRCode } from "./services/qrCode/createCode.js";
import prompt from "prompt";
import { promptSchemaMain } from "./promptsSchema/promptSchemaMain.js";

async function main() {
  prompt.get(promptSchemaMain, async (err, choice) => {
    if (choice.select == 1) await createQRCode();
    if (choice.select == 2) await createPassword();
    if (err) {
      console.error("Error:", err);
      return;
    }
  });

  prompt.start();
}

main();
