const { google } = require('googleapis');
const apiData = require('../../providers/googleJSON.json');

/* Configuracion de Google */
const SCOPE = ['https://www.googleapis.com/auth/drive'];

async function googleValidation() {
  const googleJWT = new google.auth.JWT(
    apiData.client_email,
    null,
    apiData.private_key,
    SCOPE,
  );

  await googleJWT.authorize();

  return googleJWT;
}

module.exports = googleValidation;
