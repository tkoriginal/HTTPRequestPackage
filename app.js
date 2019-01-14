const request = require('request');
const fs = require('fs');

request('https://sytantris.github.io/http-examples/future.jpg')
  .on('error', (err) => {
    throw err;
  })
  .pipe(fs.createWriteStream('./future.jpg'))
  .on('response', (response) => {
    console.log('ResponseCode: ', response.statusCode);
    console.log('Status Message: ', response.statusMessage);
    console.log('Response Content-type', response.headers['content-type']);
  })
  

