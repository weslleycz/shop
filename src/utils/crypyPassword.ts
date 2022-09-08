import CryptoJS from "crypto-js";

const crypyPassword = (password: string) => {
    const encrypted = CryptoJS.AES.encrypt(password, "RFMW$e@7g5e9").toString();
    return encrypted
  };

  export {crypyPassword}