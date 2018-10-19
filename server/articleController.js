module.exports = {
    get: (req, res) => {
        res.send(process.env.NEWS_API_KEY)
    }
}