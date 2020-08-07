import React, { useState, useEffect } from "react";
import UserContext from "./Context";

function getCookie(name) {
  const cookieValue = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
  return cookieValue ? cookieValue[2] : null;
}

const App = (props) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const logIn = (user) => {
    setUser({
      ...user,
      loggedIn: true,
    });
  };

  const logOut = () => {
    document.cookie = "x-auth-token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
    setUser({
      loggedIn: false,
    });
  };

  useEffect(() => {
    const token = getCookie("x-auth-token");

    if (!token) {
      logOut();
      return;
    }

    fetch("http://localhost:9999/api/user/verify", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    })
      .then((promise) => {
        return promise.json();
      })
      .then((res) => {
        if (res.status) {
          logIn({
            username: res.user.username,
            id: res.user._id,
          });
        } else {
          logOut();
        }
        setLoading(false);
      });
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        logIn,
        logOut,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default App;
