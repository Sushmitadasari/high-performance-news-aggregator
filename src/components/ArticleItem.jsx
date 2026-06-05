import React from "react";
import { formatDate } from "../utils/formatter";
function ArticleItem({ article }) {
  return (
    <div className="article">
      <a
        href={article.url}
        target="_blank"
        rel="noreferrer"
      >
        <h3>{article.title}</h3>
      </a>

      <p>Score: {article.score}</p>

      <p>By: {article.by}</p>

      <p>
        {
          new Date(
            article.time * 1000
          ).toLocaleString()
        }
      </p>
    </div>
  );
}

export default ArticleItem;