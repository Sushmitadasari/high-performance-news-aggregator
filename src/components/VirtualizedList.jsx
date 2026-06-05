import ArticleItem from "./ArticleItem";

export default function VirtualizedList({
  stories
}) {
  return (
    <div data-testid="article-list">
      {stories.map((story) => (
        <ArticleItem
          key={story.id}
          article={story}
        />
      ))}
    </div>
  );
}