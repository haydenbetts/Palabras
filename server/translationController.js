const { translationQuickStart } = require('../helpers/apiHelpers.js');

module.exports = {
  post: (req, res) => {
    // [ { text: 'argentino' }, { text: 'solo' } ]
    var words = req.body.words;
    var justWords = words.map((word) => {
      return word.text;
    }).join(',');

    translationQuickStart(justWords, (response) => {
      // TODO this is NOT RESTFUL!!
      res.json(JSON.parse(response)[0].translations[0].text)
    });
  }
}