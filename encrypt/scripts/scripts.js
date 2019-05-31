/* Snell, Dallin
** 31 MAY 19
*/


$("#ciphertext").html(CryptoJS.AES.encrypt("Dallin", "P4ssword!").toString());
$("#plaintext").html(CryptoJS.AES.decrypt(CryptoJS.AES.encrypt("Dallin", "P4ssword!")).toString());
