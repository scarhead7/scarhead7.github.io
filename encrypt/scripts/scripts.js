/* Snell, Dallin
** 31 MAY 19
*/


function ENCRYPTING()
{
  // get the password
  var key = ($('#PASSKEY').val());
  // do the actual encrypting
  var encrypted = CryptoJS.AES.encrypt($('#PLAINTEXT').val(), key);

  // place the encrypted string where the user can see
  $('#CIPHERTEXT').html(encrypted.toString());
  // blank out the password
  $("#PASSKEY").val('');
  // blank out plaintext string
  $('#PLAINTEXT').val('');
} // end of ENCRYPTING()

function DECRYPTING()
{
  // get the password
  var key = ($('#PASSKEY').val());
  // decrypt string
  var decrypted = CryptoJS.AES.decrypt($('#ENCRYPTED').val(), key);

  // place the decrypted string where the user can see
  $('#DECRYPTED').html(decrypted.toString(CryptoJS.enc.Utf8));
  // blank out the password
  $('#PASSKEY').val('');
} // end of DECRYPTING()
