const React = require('react');

const ArticleListEntry = (props) => {
    // 
    return (
        <div>
            <div className="row">
                    <h3> {props.article.title} </h3>
            </div>
            <div className="row">
                <div className="col-md-8">
                    <p> {props.article.content} </p>
                </div>
                <div className="col-md-4">
                    <img className="img-fluid" src={props.article.urlToImage} alt="Girl in a jacket" />
                </div>
            </div>
        </div>
    )
};

module.exports = ArticleListEntry;