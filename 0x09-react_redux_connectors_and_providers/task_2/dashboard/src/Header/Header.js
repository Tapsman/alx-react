import React from "react";
import logo from ".../assets/holberton-logo.jpg";
import { StyleSheet, css } from "aphrodite";

/* Header function */

function Header() {
  return (
    <>
      <div className={css(styles["App-header"])}>
        <img src={logo} className={css(styles.img)} alt="logo" />
	<h1>School dashboard</h1>
      </div>
    </>
  );
}

/* Styles */

const styles = StyleShhet.create({
  "App-header": {
    fontSize: "1.4",
    color: "#e0354b",
    display: "flex",
    alignItems: "center",
    borderBottom: "3px solid #e0354b",
  },

  img: {
    width: "200px",
    height: "200px",
  },
});

const styles = StyleSheet.create({
  header: {
    display: "flex",
    alignItems: "center",
    color: cssVars.mainColor,
    fontSize: "16px",
  },

  headerImg: {
    width: "150px",
  },

  logOutSection: {
    color: "black",
    position: "absolute",
    right: 0,
    paddingRight: "16px",
    alignSelf: flex-end",
  },

  logOutSectionSpan: {
    fontStyle: "italic",
    curser: "pointer",
  },
});

Header.contextType = AppContext;

Header.defaultProps = {
  user: null,
  logout: () => {},
};

Header.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    user: state.get("user"),
  };
};

const mapDispatchToProps = {
  logout,
};

/* Export the default header */

export default connect(mapStateToProps, mapDispatchToProps)(Header);
