import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav style={styles.navbar}>
      <NavLink to="/" style={styles.link} activeStyle={styles.active}>Home</NavLink>
      <NavLink to="/add-task" style={styles.link} activeStyle={styles.active}>Add Task</NavLink>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    gap: "15px",
    padding: "10px",
    background: "#282c34",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "18px",
  },
  active: {
    fontWeight: "bold",
    borderBottom: "2px solid white",
  },
};

export default NavBar;
