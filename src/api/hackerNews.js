const API_BASE =
  import.meta.env.VITE_HN_API ||
  "https://hacker-news.firebaseio.com/v0";

export async function fetchTopStories() {
  const idsResponse = await fetch(
    `${API_BASE}/topstories.json`
  );

  const ids = await idsResponse.json();

  const stories = await Promise.all(
    ids.slice(0, 500).map(async (id) => {
      const response = await fetch(
        `${API_BASE}/item/${id}.json`
      );

      return response.json();
    })
  );

  return stories.filter(Boolean);
}