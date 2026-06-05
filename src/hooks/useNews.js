import { useEffect, useMemo, useState } from "react";
import sortBy from "lodash/sortBy";

import { fetchTopStories } from "../api/hackerNews";
import useDebounce from "./useDebounce";

export default function useNews(ascending) {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search, 300);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);

        const data = await fetchTopStories();

        setStories(data);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  const filteredStories = useMemo(() => {
    let result = stories.filter((story) =>
      story?.title
        ?.toLowerCase()
        .includes(debouncedSearch.toLowerCase())
    );

    result = sortBy(result, "score");

    if (!ascending) {
      result.reverse();
    }

    return result;
  }, [stories, debouncedSearch, ascending]);

  return {
    stories,
    filteredStories,
    loading,
    search,
    setSearch
  };
}