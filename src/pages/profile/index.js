import React, { Component } from "react";
import PageWrapper from "../../components/page-wrapper";
import Origamis from "../../components/origamis";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: null,
      posts: null,
    };
  }

  componentDidMount() {
    this.getUser(this.props.match.params.userid);
  }

  getUser = async (id) => {
    const res = await fetch(`http://localhost:9999/api/user?id=${id}`);
    if (!res.ok) {
      this.props.history.push("/error");
    }
    const user = await res.json();
    this.setState({
      username: user.username,
      posts: user.posts && user.posts.length,
    });
  };

  render() {
    const { username, posts } = this.state;

    if (!username) {
      return (
        <PageWrapper>
          <div>Loading...</div>
        </PageWrapper>
      );
    }

    return (
      <PageWrapper>
        <div>
          <p>User: {username}</p>
          <p>Posts: {posts}</p>
        </div>
        <Origamis length={3} />
      </PageWrapper>
    );
  }
}

export default Profile;