export default function HeavyInfoPanel() {
  const data = Array.from(
    { length: 20000 },
    (_, i) => ({
      id: i,
      value: Math.random()
    })
  );

  const total = data.reduce(
    (sum, item) =>
      sum + item.value,
    0
  );

  return (
    <div className="article">
      <h3>
        Heavy Analytics Panel
      </h3>

      <p>
        Records:
        {data.length}
      </p>

      <p>
        Total:
        {total.toFixed(2)}
      </p>
    </div>
  );
}