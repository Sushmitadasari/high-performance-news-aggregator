export default function HeavyInfoPanel() {
  const metrics = Array.from(
    { length: 5000 },
    (_, i) => ({
      id: i,
      value: Math.random()
    })
  );

  const average =
    metrics.reduce(
      (sum, item) =>
        sum + item.value,
      0
    ) / metrics.length;

  return (
    <div
      style={{
        background: "#fff",
        padding: "20px",
        borderRadius: "10px",
        marginBottom: "20px"
      }}
    >
      <h3>Performance Analytics</h3>

      <p>
        Dataset Size:
        {metrics.length}
      </p>

      <p>
        Average Value:
        {average.toFixed(4)}
      </p>

      <p>
        Lazy loaded using
        React.lazy + Suspense.
      </p>
    </div>
  );
}