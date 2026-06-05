export default function SearchBar({
  value,
  onChange
}) {
  return (
    <input
      className="search-input"
      placeholder="Search stories..."
      value={value}
      onChange={(e) =>
        onChange(e.target.value)
      }
    />
  );
}