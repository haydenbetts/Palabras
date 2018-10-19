const { Word, User } = require('../database/models.js')

module.exports = {
    get: (req, res) => {
        // should take a userid and return all words and a user id in query
        var userId = req.query.id;

        Word.findAll({
            where: {
                userId: userId
            }
        }).then((words) => {
            res.status(200).send(words);
        })

        // res.send('hi from word get')
    },
    post: (req, res) => {
        // should take an array of words and a user id.
        // should findOrCreate words for that user id
    },
    delete: (req, res) => {
        res.send('hi from word delete')
    }
}