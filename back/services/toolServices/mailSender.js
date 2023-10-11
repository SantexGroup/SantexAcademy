/* const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;

const googleTransport = require('../../providers/googleTransport.json')

const mailSender = async (callback)=>{
    const OAuthClient = new OAuth2(
        googleTransport.auth.clientId,
        googleTransport.auth.clientSecret,
        "https://developers.google.com/oauthplayground",
    );

    OAuthClient.setCredentials({
        refresh_token: googleTransport.auth.refreshToken,
        tls:{
            rejectUnauthorized : false
        }
    });

    OAuthClient.getAccessToken((err, token) => {
        if(err){
            return console.log(err)
        }
        googleTransport.auth.accessToken = token;
        callback(nodemailer.createTransport(googleTransport));
    });
}

function mailHeader(mail){

    const mailOptions = {
        from: {
            name: 'CV-Assistant',
            address: '6bitscv@gmail.com'
        },
        to: mail,
        subject: "Reseteo de contraseña",

    }

}

module.exports = mailSender */
