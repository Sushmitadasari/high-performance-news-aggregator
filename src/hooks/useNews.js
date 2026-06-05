import { useEffect, useMemo, useState } from "react";
import _ from "lodash";

import { fetchTopStories } from "../api/hackerNews";

export default function useNews(ascending) {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function load() {
      setLoading(true);

      const data = await fetchTopStories();

      setStories(data);

      setLoading(false);
    }

    load();
  }, []);

  const filteredStories = useMemo(() => {
    let result = stories.filter((story) =>
      story?.title
        ?.toLowerCase()
        .includes(search.toLowerCase())
    );

    result = _.sortBy(result, "score");

    if (!ascending) {
      result.reverse();
    }

    return result;
  }, [stories, search, ascending]);

  return {
    stories,
    filteredStories,
    loading,
    search,
    setSearch
  };
}