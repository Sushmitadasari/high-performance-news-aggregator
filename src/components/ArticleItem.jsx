import React from "react";
import { formatDate } from "../utils/formatter";

function ArticleItem({ article }) {
  return (
    <div
      className="article"
      data-testid="article-item"
    >
      <a
        href={article.url}
        target="_blank"
        rel="noreferrer"
      >
        <h3>{article.title}</h3>
      </a>

      <p>
        Score: {article.score}
      </p>

      <p>
        By: {article.by}
      </p>

      <p>
        {formatDate(article.time)}
      </p>
    </div>
  );
}

export default React.memo(ArticleItem);