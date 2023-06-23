import axios from "axios";
import React, { Component } from "react";
import { useParams } from "react-router-dom";

function PostWrapper() {
  const params = useParams();

  return <Post post_id={params.post_id} />;
}

export class Post extends Component {
  state = {
    post: null,
  };

  componentDidMount() {
    // const props = useParams();
    const { post_id } = this.props;
    let id = post_id;
    axios
      .get("https://jsonplaceholder.typicode.com/posts/" + id)
      .then((res) => {
        this.setState({
          post: res.data,
        });
      });
  }

  render() {
    const { post } = this.state;
    const postElement = post ? (
      <div className="post">
        <h4 className="center">{post.title}</h4>
        <p>{post.body}</p>
      </div>
    ) : (
      <div className="center">Loading post...</div>
    );

    return <div className="container">{postElement}</div>;
  }
}

export default PostWrapper;
