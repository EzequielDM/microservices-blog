import { useState } from "react";
import axios from "axios";

const PostForm = () => {
  const [formData, setFormData] = useState({
    content: "",
  });

  const { content } = formData;

  const onSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:4000/posts", { title: content }, { responseType: "json" });

    setFormData({ content: "" });
  };

  return (
    <div className="w-full max-w-lg">
      <form onSubmit={onSubmit} className="bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label htmlFor="content" className="block text-gray-700 text-sm font-bold mb-2">
            Post content
          </label>
          <textarea
            id="content"
            placeholder="How are you feeling today?"
            rows={3}
            value={content}
            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring focus:ring-purple-300"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="shadow bg-purple-600 hover:bg-purple-800 border rounded py-2 px-4 text-white font-bold focus:outline-none focus:ring focus:ring-purple-300">
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostForm;
