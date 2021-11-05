import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import PropTypes from "prop-types";
import { useState } from "react";

const PostComment = ({ id }) => {
  const [{ content }, setFormData] = useState({
    content: "",
  });

  const [error, setError] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      `http://localhost:4001/posts/${id}/comments`,
      { content },
      { responseType: "json" }
    );
    if (res.status === 201) {
      alert("Comment added");
      setFormData({ content: "" });
    } else {
      setError(true);
    }
  };

  return (
    <form className="bg-white px-2 py-2" onSubmit={onSubmit}>
      <input
        type="text"
        id="content"
        value={content}
        onChange={(e) => setFormData({ content: e.target.value })}
        placeholder="Write a comment"
        className={`shadow appearance-none border rounded w-8/12 sm:w-4/6 md:w-4/6 lg:w-5/6 py-1 px-2 focus:outline-none focus:ring focus:ring-purple-300 ${
          error && "ring ring-red-500"
        }`}
        onFocus={() => setError(false)}
      />
      <button
        type="submit"
        className="border rounded mx-2 py-1 px-4 bg-purple-500 hover:bg-purple-800">
        <FontAwesomeIcon
          icon={faPaperPlane}
          fixedWidth
          className="inline-block text-white focus:outline-none focus:ring cursor-pointer hover:ring hover:ring-purple-700"
        />
      </button>
    </form>
  );
};

PostComment.propTypes = {
  id: PropTypes.string.isRequired,
};

export default PostComment;
