import PostForm from "./components/PostForm";
import PostList from "./components/PostList";

const App = () => {
  return (
    <div className="py-12 bg-white max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:text-center">
        <h2 className="text-base text-purple-500 font-semibold tracking-wide uppercase">ZBlog</h2>
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          The best place to share your thoughts
        </p>
        <p className="max-w-2xl mt-4 text-xl text-gray-500 lg:mx-auto">
          Insert your post today and share it with millions of other people around the globe! (Which
          at the end of the day is like.... me and myself)
        </p>
      </div>

      <div className="mt-10 flex justify-center">
        <PostForm />
      </div>
      <div className="lg:text-center mt-10">
        <h2 className="text-gray-900 font-extrabold tracking-tight leading-8 text-2xl">Posts</h2>
        <p className="max-w-2xl mt-4 text-xl text-gray-500 lg:mx-auto mb-4">
          See the posts made by other users (me again) and comment your thoughts on them if you wish
        </p>
      </div>
      <div className="md:flex md:justify-center">
        <PostList />
      </div>
    </div>
  );
};

export default App;
