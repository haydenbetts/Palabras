let fs = require('fs');
let https = require('https');

module.exports = {
    getTenArticles: (responseObject) => {
        return responseObject.articles.slice(0, 9);
    },
    getTenRandomArticles: (responseObject) => {
        // todo - at some point make these random
    },
    translationQuickStart: (word) => {
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
                console.log(json);
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

        let Translate = function (content) {
            let request_params = {
                method: 'POST',
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
        }

        let content = JSON.stringify([{ 'Text': text }]);
        Translate (content);
    }

}