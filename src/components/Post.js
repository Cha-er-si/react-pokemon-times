import axios from "axios";
import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

function PostWrapper() {
  const params = useParams();

  const navigate = useNavigate();

  return <ConnectedComponent post_id={params.post_id} navigate={navigate} />;
}

export class Post extends Component {
  // state = {
  //   post: null,
  // };

  // componentDidMount() {
  //   // const props = useParams();
  //   const { post_id } = this.props;
  //   let id = post_id;
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts/" + id)
  //     .then((res) => {
  //       this.setState({
  //         post: res.data,
  //       });
  //     });
  // }

  handleClick = () => {
    this.props.deletePost(this.props.post.id);
    this.props.navigate("/");
    console.log(this.props);
  };

  render() {
    const { post } = this.props;
    // console.log(this.props);
    // console.log(this.props);
    const postElement = post ? (
      <div className="post">
        <h4 className="center">{post.title}</h4>
        <p>{post.body}</p>
        <div className="center">
          <button className="btn grey" onClick={this.handleClick}>
            Delete Post
          </button>
        </div>
      </div>
    ) : (
      <div className="center">Loading post...</div>
    );

    return <div className="container">{postElement}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  // let params = useParams();
  let id = ownProps.post_id;
  return {
    post: state.posts.find((post) => {
      return post.id === parseInt(id);
    }),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => {
      dispatch({ type: "DELETE_POST", id: id });
    },
  };
};

const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps)(Post);
export default PostWrapper;
