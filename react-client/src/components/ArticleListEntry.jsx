const React = require('react');

const ArticleListEntry = (props) => {
  // 
  return (
    <div onClick={() => props.addWordToList()}>
      <div className="row">
        <div className="col-md-8">
          <a href={props.article.url} className="article-title"> {props.article.title} </a>
          <p className="publisher"> <i> {props.article.source.name} </i> </p>
          {/* TODO currently parsing away part of article content here
          This should not done on the front-end, or should at least be
          abstracted into a helper
           */}
          <p> {props.article.content.split("[")[0]} </p>

        </div>
        <div className="col-md-4 article-image">
          <img className="img-fluid" src={props.article.urlToImage} alt="Girl in a jacket" />
        </div>
      </div>
    </div>
  )
};

module.exports = ArticleListEntry;