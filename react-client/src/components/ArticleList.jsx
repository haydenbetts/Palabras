const React = require('react');
const ArticleListEntry = require('./ArticleListEntry.jsx');

const ArticleList = (props) => {
    // 
    return (
        <div>
            <ul className="article-list">
                {props.articles.map((article, id) => {
                    return (
                    <li key={id}>
                        <ArticleListEntry article={article} addWordToList={props.addWordToList}/>
                    </li>
                    )
                })
                }
            </ul>
        </div>)
};

module.exports = ArticleList;