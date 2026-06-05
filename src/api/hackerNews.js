const API_BASE =
  import.meta.env.VITE_HN_API ||
  "https://hacker-news.firebaseio.com/v0";

export async function fetchTopStories() {
  const idsResponse = await fetch(
    `${API_BASE}/topstories.json`
  );

  const ids = await idsResponse.json();

  const stories = [];

  for (const id of ids.slice(0, 500)) {
    const response = await fetch(
      `${API_BASE}/item/${id}.json`
    );

    const story = await response.json();

    stories.push(story);
  }

  return stories.filter(Boolean);
}