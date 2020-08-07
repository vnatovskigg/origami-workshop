import React, { useState, useContext, useEffect } from "react";
import PageWrapper from "../../components/page-wrapper";
import Origamis from "../../components/origamis";
import UserContext from "../../Context";
import { useHistory, useParams } from "react-router-dom";

const Profile = () => {
  const [username, setUsername] = useState(null);
  const [posts, setPosts] = useState(null);
  const context = useContext(UserContext);
  const history = useHistory();
  const params = useParams();

  const logOut = () => {
    context.logOut();
    history.push("/");
  };

  const getData = async (id) => {
    const res = await fetch(`http://localhost:9999/api/user?id=${id}`);
    if (!res.ok) {
      history.push("/error");
    } else {
      const user = await res.json();
      setUsername(user.username);
      setPosts(user.posts && user.posts.length);
    }
  };

  useEffect(() => {
    const id = params.userid;
    getData(id);
  }, []);

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
        <button onClick={logOut}>Logout</button>
      </div>
      <Origamis length={3} />
    </PageWrapper>
  );
};

export default Profile;
