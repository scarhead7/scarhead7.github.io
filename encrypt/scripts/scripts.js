/* Snell, Dallin
** 31 MAY 19
*/


function ENCRYPTING(key = "{R:}G7--tNy<3nP&")
{
  // do the actual encrypting
  var encrypted = CryptoJS.AES.encrypt($('#PLAINTEXT').val(), key);

  // place the encrypted string where the user can see
  $('#CIPHERTEXT').html(encrypted.toString());
  // blank out the password
  $("#PASSKEY").val('');
  // blank out plaintext string
  $('#PLAINTEXT').html('');
} // end of ENCRYPTING()

function DECRYPTING(key = "{R:}G7--tNy<3nP&")
{
  // decrypt string
  var decrypted = CryptoJS.AES.decrypt($('#ENCRYPTED').val(), key);

  // place the decrypted string where the user can see
  $('#DECRYPTED').html(decrypted.toString(CryptoJS.enc.Utf8));
  // blank out the password
  $('#PASSKEY').val('');
} // end of DECRYPTING()

function CLEAR()
{
  // removes the password
  $('#PASSKEY').html('');
  // removes plaintext string (when encrypting)
  $('#PLAINTEXT').html('');
  // removes ciphertext string (when encrypting)
  $('#CIPHERTEXT').html('');
  // removes ciphertext string (when decrypting)
  $('#ENCRYPTED').html('');
  // removes plaintext string (when decrypting)
  $('#DECRYPTED').html('');
} // end of CLEAR()
