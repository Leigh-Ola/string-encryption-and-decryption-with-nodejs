require("dotenv").config();

function dec() {
  const Cryptr = require("cryptr");
  const cryptr_secret = process.env.CRYPTR_SECRET;
  const encryption = process.env.EMAIL_PASSWORD;

  const cryptr = new Cryptr(cryptr_secret);
  console.log(`Secret: ${cryptr_secret}`);
  console.log(`Encryption : ${encryption}`);

  const decryptedString = cryptr.decrypt(encryption);
  console.log(`Decrypted : ${decryptedString}`);
}
dec();
