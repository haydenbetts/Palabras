let fs = require('fs');
let https = require('https');
let axios = require('axios');

module.exports = {
  getTenArticles: (responseObject) => {
    //article.content
    var response = [];
    for (let i = 0; i < 10; i++) {
      if (responseObject.articles[i].content) {
        response.push(responseObject.articles[i]);
      }
    }
    return response;
  },
  getTenRandomArticles: (responseObject) => {
    // todo - at some point make these random
  },
  translationQuickStart: (word, callback) => {
    let subscriptionKey = process.env.TEXT_TRANSLATE_KEY;

    let host = 'api.cognitive.microsofttranslator.com';
    let path = '/translate?api-version=3.0';

    // Translate to German and Italian.
    let params = '&to=en';

    let text = word;

    let response_handler = function (response) {
      let body = '';
      response.on('data', function (d) {
        body += d;
      });
      response.on('end', function () {
        let json = JSON.stringify(JSON.parse(body), null, 4);
        callback(json);
      });
      response.on('error', function (e) {
        console.log('Error: ' + e.message);
      });
    };

    let get_guid = function () {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    }

    let Translate = function (content, callback) {
      let request_params = {
        method: 'POST',
        url: 'api.cognitive.microsofttranslator.com/translate?api-version=3.0',
        hostname: host,
        path: path + params,
        headers: {
          'Content-Type': 'application/json',
          'Ocp-Apim-Subscription-Key': subscriptionKey,
          'X-ClientTraceId': get_guid(),
        }
      };

      let req = https.request(request_params, response_handler);
      req.write(content);
      req.end();
      // axios.post('https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=en', {
      //     headers: {
      //         'Content-Type': 'application/json',
      //         'Ocp-Apim-Subscription-Key': subscriptionKey,
      //         'X-ClientTraceId': get_guid(),
      //     }
      // }).then((data) => {
      //     console.log(data.data);
      // }).catch((error) => {
      //     console.log(error);
      // })
    }

    let content = JSON.stringify([{ 'Text': text }]);
    Translate(content);
  }

}