import { handleCode } from "./handleCode.js";
import prompt from "prompt";
import { promptSchemaQRCode } from "../../promptsSchema/promptSchemaQrcode.js";

export async function createQRCode() {
  prompt.get(promptSchemaQRCode, handleCode);

  prompt.start();
}
