module.exports = {
    get: (req, res) => {
        res.send('hi from word get')
    },
    post: (req, res) => {
        res.send('hi from word post')
    },
    delete: (req, res) => {
        res.send('hi from word delete')
    }
}