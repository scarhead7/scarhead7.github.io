/* Snell, Dallin
** 31 MAY 19
*/


function ENCRYPTING()
{
  var key = "abcd1234";
  var encrypted = CryptoJS.AES.encrypt($("#PLAINTEXT".html(), key);

  $("#ciphertext").html(encrypted.toString());
  
} // end of ENCRYPTING()

function DECRYPTING(encryptedMessage)
{
  var key = "abcd1234";
  var decrypted = CryptoJS.AES.decrypt(encryptedMessage, key);

  $("#plaintext").html(decrypted.toString(CryptoJS.enc.Utf8));
} // end of DECRYPTING()
