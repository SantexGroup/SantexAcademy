const fs = require('fs');
const request = require('request');
const path = require('path');

function download(url, callback) {
  const filePath = path.join((__dirname, '..', '..', 'public/download'), 'profile.jpeg');

  request.head(url, () => {
    request(url).pipe(fs.createWriteStream(filePath)).on('close', () => {
      callback(null, filePath);
    });
  });
}

module.exports = download;
