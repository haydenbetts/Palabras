const { Word, User } = require('../database/models.js')


module.exports = {
  get: (req, res) => {
    User.findAll({
      where: {
        username: req.query.username
      }
    }).then((user) => {
      console.log(user)
      res.status(200).json(user);
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
        res.status(201).send(result);
      })
    })
  },
  delete: (req, res) => {
    res.send('hi from user delete')
  }
}