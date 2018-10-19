const React = require('react');

const ArticleListEntry = (props) => {
    // 
    return (
        <div>
            <h3> {props.article.title} </h3>
            <p> {props.article.description} </p>
        </div>
    )
};

module.exports = ArticleListEntry;