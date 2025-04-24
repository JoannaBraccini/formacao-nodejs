import { allowedCharacters } from "./utils/allowedCharacters.js";

export async function handlePassword() {
  let characteres = [];
  let password = "";

  const passwordLength = process.env.PASSWORD_LENGTH;
  characteres = await allowedCharacters();

  for (let i = 0; i < passwordLength; i++) {
    const index = Math.floor(Math.random() * characteres.length);
    password += characteres[index];
  }

  return password;
}
