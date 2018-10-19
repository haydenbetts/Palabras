const sequelize = require('./index.js');
const Sequelize = require('sequelize');

const User = sequelize.define('user', {
    username: {
        type: Sequelize.STRING
    }
});

const Word = sequelize.define('word', {
    text: {
        type: Sequelize.STRING
    }
});

Word.belongsTo(User);
User.hasMany(Word);

User.sync().then(() => {
    console.log('synced user!')
}).catch(() => {
    console.log('failed to sync user!')
});

Word.sync().then(() => {
    console.log('synced word!')
}).catch(() => {
    console.log('failed to sync word!')
});

module.exports.Word = Word;
module.exports.User = User;