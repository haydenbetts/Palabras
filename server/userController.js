const { Word, User } = require('../database/models.js')


module.exports = {
    get: (req, res) => {
        User.findAll({}).then((users) => {
            console.log(users)
            res.status(200).json(users);
        })
    },
    post: (req, res) => {

        var username = req.body.username;
        // find or create by username
        User.sync().then(() => {
            User.findOrCreate({
                where: {
                    username: username
                }
            }).then((result) => {
                res.status(201).send();
            })
        })
    },
    delete: (req, res) => {
        res.send('hi from user delete')
    }
}