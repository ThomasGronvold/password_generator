export function generatePassword(iPasswordLength:number, bSpecialChars:boolean) {
   const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
   const specialCharset = "!@#$%^&*()_+[]{}|;:,.<>?";
   const pool = bSpecialChars ? charset + specialCharset : charset;
   let sGeneratedPassword = "";

   for (let i=0; i<iPasswordLength; i++) {
      const randomChar = (Math.floor(Math.random() * pool.length));

      sGeneratedPassword += pool[randomChar];
   }

   return sGeneratedPassword;
}