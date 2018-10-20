const { Word, User } = require('../database/models.js')

module.exports = {
    get: (req, res) => {
        var userId = req.query.id;
        var username; // id like to be find by username

        Word.findAll({
            where: {
                userId: userId
            }
        }).then((words) => {
            res.status(200).send(words);
        })
    },
    post: (req, res) => {
        var userId = req.body.id;
        var words = req.body.words;

        // NOTE - only works with created users
        words.forEach(function (word, i) {
            Word.sync().then(Word.findOrCreate({
                where: {
                    text: word.text,
                    userId: userId
                }
            }).then((result) => {
                if (i === words.length - 1) {
                    res.status(201).send();
                }
            })
            )
        })
    },
    delete: (req, res) => {
        res.send('hi from word delete')
    }
}