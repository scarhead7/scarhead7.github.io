/* Snell, Dallin
** 31 MAY 19
*/


var key = "!abcd1234!";

var encrypted = CryptoJS.AES.encrypt("Dallin", key).toString();

$("#ciphertext").html(encrypted);
$("#plaintext").html(CryptoJS.AES.decrypt(encrypted, key).toString());
