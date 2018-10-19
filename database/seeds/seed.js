const {User, Word} = require('../models.js');

Word.destroy({where: {}, truncate: true}).then(() => {
    console.log('cleared database');
})

User.destroy({where: {username: 'haydenbetts'}}).then(() => {
    console.log('cleared database');
})

Word.create({text: 'hola'}).then(word => {
    Word.create({text: 'adios'}).then(word1 => {
        User.create({
            username: 'haydenbetts'
        }).then(user => {
            user.setWords([word, word1])
        })
    })
})