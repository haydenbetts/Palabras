module.exports = {
    get: (req, res) => {
        res.send('hi from user get')
    },
    post: (req, res) => {
        res.send('hi from user post')
    },
    delete: (req, res) => {
        res.send('hi from user delete')
    }
}