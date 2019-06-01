/* Snell, Dallin
** 31 MAY 19
*/


function ENCRYPTING()
{
  var key = ($("#PASSKEY").val());
  var encrypted = CryptoJS.AES.encrypt($("#PLAINTEXT").val(), key);

  $("#CIPHERTEXT").html(encrypted.toString());
  
} // end of ENCRYPTING()

function DECRYPTING()
{
  var key = ($("#PASSKEY").val());
  var decrypted = CryptoJS.AES.decrypt($("#ENCRYPTED").val(), key);

  $("#DECRYPTED").html(decrypted.toString(CryptoJS.enc.Utf8));
} // end of DECRYPTING()
