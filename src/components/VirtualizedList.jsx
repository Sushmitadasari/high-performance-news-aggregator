import { useRef } from "react";
import { useVirtualizer } from "@tanstack/react-virtual";

import ArticleItem from "./ArticleItem";

export default function VirtualizedList({
  stories
}) {
  const parentRef = useRef(null);

  const rowVirtualizer =
    useVirtualizer({
      count: stories.length,
      getScrollElement: () =>
        parentRef.current,
      estimateSize: () => 170,
      overscan: 5
    });

  return (
    <div
      data-testid="article-list"
      ref={parentRef}
      style={{
        height: "700px",
        overflow: "auto"
      }}
    >
      <div
        style={{
          height:
            rowVirtualizer.getTotalSize(),
          position: "relative"
        }}
      >
        {rowVirtualizer
          .getVirtualItems()
          .map((virtualRow) => {
            const story =
              stories[
                virtualRow.index
              ];

            return (
              <div
                key={story.id}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  transform: `translateY(${virtualRow.start}px)`
                }}
              >
                <ArticleItem
                  article={story}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}