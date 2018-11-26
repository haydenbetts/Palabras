const axios = require('axios');
const { getTenArticles, getTenRandomArticles } = require('../helpers/apiHelpers.js');

module.exports = {
  // TODO make language dynamic
  get: (req, res) => {
    const { language } = req.query;
    axios.get('https://newsapi.org/v2/top-headlines', {
      params: {
        apiKey: process.env.NEWS_API_KEY,
        language: language
      }
    })
      .then((response) => {
        res.json(getTenArticles(response.data));
      }).catch((error) => {
        console.log(error)
      })
  }
}