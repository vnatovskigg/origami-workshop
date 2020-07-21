const getNavigation = (userid) => {
  const links = [
    {
      title: "Publications",
      link: "/",
    },
    {
      title: "Share Your Thoughts",
      link: "/share",
    },
    {
      title: "Profile",
      link: `/profile/${userid}`,
    },
    {
      title: "Register",
      link: "/register",
    },
    {
      title: "Login",
      link: "/login",
    },
    {
      title: "##########",
      link: "#",
    },
    {
      title: "##########",
      link: "#",
    },
    {
      title: "##########",
      link: "#",
    },
  ];

  return links;
};

export default getNavigation;
