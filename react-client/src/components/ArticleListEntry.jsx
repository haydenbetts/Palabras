const React = require('react');

const ArticleListEntry = (props) => {
  // 
  return (
    <div onClick={() => props.addWordToList()}>
      <div className="row">
        <h3> {props.article.title} </h3>
      </div>
      <div className="row">
        <div className="col-md-8">
          <p> <i> {props.article.source.name} </i> </p>
          <p> {props.article.url} </p>
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