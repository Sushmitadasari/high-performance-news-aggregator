export default function StatsPanel({
  totalStories,
  visibleStories
}) {
  return (
    <div className="stats">
      <h3>Stats</h3>

      <p>
        Total Stories: {totalStories}
      </p>

      <p>
        Visible Stories:
        {visibleStories}
      </p>
    </div>
  );
}