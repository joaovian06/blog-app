import React, { useState, useEffect } from "react";
import PinnedPost from "../../components/pinned-post";
import PostList from "../../components/post-list";
import NewPostButton from "../../components/new-post-button";

export default function Home() {
  const [posts, setPosts] = useState("");

  async function getPosts() {
    const response = await fetch("/api/v1/posts", {
      headers: {
        Accept: "application/json",
      },
    });

    const data = await response.json();
    setPosts(data.data);
  }

  useEffect(() => {
    getPosts([]);
  }, []);

  return (
    <div>
      <NewPostButton />
      {posts && posts.length > 0 && <PinnedPost post={posts[0].attributes} />}

      <PostList posts={posts} />
    </div>
  );
}
