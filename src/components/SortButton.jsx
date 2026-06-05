export default function SortButton({
  ascending,
  onToggle
}) {
  return (
    <button
      className="sort-btn"
      onClick={onToggle}
    >
      Sort Score:
      {ascending ? " ASC" : " DESC"}
    </button>
  );
}