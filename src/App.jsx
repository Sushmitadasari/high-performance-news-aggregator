import React, { Suspense, useState } from "react";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import SortButton from "./components/SortButton";
import VirtualizedList from "./components/VirtualizedList";
import StatsPanel from "./components/StatsPanel";
import useNews from "./hooks/useNews";

const HeavyInfoPanel = React.lazy(() =>
  import("./components/HeavyInfoPanel")
);

export default function App() {
  const [ascending, setAscending] = useState(false);

  const {
    stories,
    filteredStories,
    loading,
    search,
    setSearch
  } = useNews(ascending);

  return (
    <div className="app">
      <Hero />

      <div className="toolbar">
        <SearchBar value={search} onChange={setSearch} />

        <SortButton
          ascending={ascending}
          onToggle={() => setAscending((prev) => !prev)}
        />
      </div>

      <StatsPanel
        totalStories={stories.length}
        visibleStories={filteredStories.length}
      />

      <Suspense fallback={<div>Loading analytics panel...</div>}>
        <HeavyInfoPanel />
      </Suspense>

      {loading ? (
        <div className="loader">Loading stories...</div>
      ) : (
        <VirtualizedList stories={filteredStories} />
      )}
    </div>
  );
}