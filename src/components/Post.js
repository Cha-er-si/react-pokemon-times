import React, { Component } from "react";
import { useParams } from "react-router-dom";

function PostWrapper() {
  const params = useParams();

  return <Post post_id={params.post_id} />;
}

export class Post extends Component {
  state = {
    id: null,
  };

  componentDidMount() {
    // const props = useParams();
    const { post_id } = this.props;
    let id = post_id;
    this.setState({
      id,
    });
  }

  render() {
    return (
      <div className="container">
        <h4>{this.state.id}</h4>
      </div>
    );
  }
}

export default PostWrapper;
