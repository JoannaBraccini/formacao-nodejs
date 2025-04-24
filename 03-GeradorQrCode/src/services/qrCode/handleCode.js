import chalk from "chalk";
import qr from "qrcode-terminal";

export async function handleCode(err, result) {
  if (err) {
    console.log("Error: ", err);
    return;
  }

  const isSmall = result.type == 2;
  qr.generate(result.link, { small: isSmall }, (qrcode) => {
    console.log(chalk.green.bold("QR Code gerado com sucesso:\n"));
    console.log(qrcode);
  });
}
