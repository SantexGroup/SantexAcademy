const { google } = require('googleapis');

/* Configuracion de Google */
const CLIENT_ID = '14975470431-136qdlcg13b84d3n4o8jsc67u64dm55u.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = '1//04HjaUOb2qFQGCgYIARAAGAQSNwF-L9Irl4QjQsb4jLdo5NxhZbcHbZPDvgQTiT5gtVOZkIBRxg0t_WFKcoKQ1r3HL2v0NaoixEA';

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI,
);

oauth2Client.setCredentials({
  refresh_token: REFRESH_TOKEN,
});

module.exports = oauth2Client;
