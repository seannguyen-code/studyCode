import axios from "axios";
import { useEffect, useState } from "react";

const Post = (props) => {
  console.log(props);
  const [post, setPost] = useState({});
  const postId = props.match.params.post_id;
  useEffect(() => {
    (async () => {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
      setPost(res.data);
    })();
  }, [postId]);

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">{postId}</h3>
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.body}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
