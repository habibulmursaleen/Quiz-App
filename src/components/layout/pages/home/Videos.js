import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import UseVideoList from "../../../../hooks/UseVideoList";
import Video from "./Video";

const Videos = () => {
  const [page, setPage] = useState(1);
  const { loading, error, videos, hasMore } = UseVideoList(page);

  return (
    <div>
      {videos.length > 0 && (
        <InfiniteScroll
          dataLength={videos.length}
          next={() => setPage(page + 10)}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
        >
          {videos.map((video) =>
            video.noq > 0 ? (
              <Link to={`/quiz/${video.youtubeID}`} key={video.youtubeID}>
                <Video
                  title={video.title}
                  id={video.youtubeID}
                  noq={video.noq}
                />
              </Link>
            ) : (
              <Video title={video.title} id={video.youtubeID} noq={video.noq} />
            )
          )}
        </InfiniteScroll>
      )}
      {!loading && videos.length === 0 && <div> No data found</div>}
      {error && <div>There was an error!</div>}
      {loading && <div> Loading...</div>}
    </div>
  );
};

export default Videos;
