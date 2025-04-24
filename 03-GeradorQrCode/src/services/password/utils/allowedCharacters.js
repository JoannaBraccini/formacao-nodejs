export async function allowedCharacters() {
  let allowed = [];

  if (process.env.UPPERCASE_LETTERS == "true")
    allowed.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ");

  if (process.env.LOWERCASE_LETTERS == "true")
    allowed.push(..."abcdefghijklmnopqrstuvwxyz");

  if (process.env.NUMBERS == "true") allowed.push(..."0123456789");

  if (process.env.SPECIAL_CHARACTERS == "true")
    allowed.push(..."!@#$%^&*()_-+=~`{}[]|:;\"'<>,.?/");

  return allowed;
}
