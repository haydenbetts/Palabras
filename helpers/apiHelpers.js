module.exports = {
    getTenArticles: (responseObject) => {
        return responseObject.articles.slice(0, 9);
    },
    getTenRandomArticles: (responseObject) => {
        // todo - at some point make these random
    }
}