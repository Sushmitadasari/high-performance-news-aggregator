export default function SearchBar({
  value,
  onChange
}) {
  return (
    <input
      className="search-input"
      placeholder="Search..."
      value={value}
      onChange={(e) =>
        onChange(e.target.value)
      }
    />
  );
}