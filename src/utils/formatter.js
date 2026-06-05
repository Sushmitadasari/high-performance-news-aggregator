const formatter =
  new Intl.DateTimeFormat(
    "en-US",
    {
      dateStyle: "medium",
      timeStyle: "short"
    }
  );

export function formatDate(
  unixTimestamp
) {
  return formatter.format(
    new Date(unixTimestamp * 1000)
  );
}