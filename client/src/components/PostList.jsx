import { useEffect, useState } from "react";
import axios from "axios";
import PostComment from "./PostComment";
import Comments from "./Comments";

const PostList = () => {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:4002/posts", { responseType: "json" });
    console.log(res.data);
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <dl className="mt-10 space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:min-w-full">
      {posts ? (
        Object.values(posts).map((post) => (
          <div key={post.id} className="relative">
            <dt>
              <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                {post.id.substring(0, 1).toUpperCase()}
              </div>
              <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{post.id}</p>
            </dt>
            <dd className="mt-2 ml-16 text-base text-gray-500">{post.title}</dd>
            <Comments comments={post.comments} />
            <div className="w-full">
              <PostComment id={post.id} />
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-red-400 col-span-2">&times; Nothing found</p>
      )}
    </dl>
  );
};

export default PostList;
