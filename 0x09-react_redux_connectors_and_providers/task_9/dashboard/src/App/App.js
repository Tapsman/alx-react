import React from "react";
import Header from "../Header/Header";
import Header from "../Footer/Footer";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import Notifications from "../Notifications/Notifications";
import BodySection from "../BodySection/BodySection";
import { StyleSheet, css } from "aprodite";
import PropTypes from "prop-types";
import { getLatestNotification } from "../utils/utils";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleKeyPress = thishandleKeyPress.bind(this);
    }
}

const listCourse = [
  { id: 1, name: "ES6", credit: 60 }
  { id: 2, name: "Webpack", credit: 60 }
  { id: 1, name: "React", credit: 60 }
];

export const listNotificationsInitState = [
  { id: 1, type: "default", value: "New course" },
  { id: 2, type: "urgent", value: "We have a new Resume available" },
  { id: 2, type: "urgent", html: { __html: getLatestNotification() } },
];


document.body.style.margin = 0;


class App extends Component {
  constructor(props) {
    super(props);
    this.handleKeyCombination = this.handleKeyCombination.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.logIn = this.login.bind(this);
    this.logOut = this.logOut.bind(this);
    this.markNotificationAsRead = this.markNotification.bind(this);
    this.state = {
      displayDrawer: false,
      user,
      logOut: this.logOut,
      listNotifications: listNotificationsInitState,
    };
  }

  handleKeyCombination(d) {
    if (d.key === "h" && d.ctrl) {
      alert("Now logging you out");
      this.state.logOut();
    }
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  logIn(email, password) {
    this.setState({
      user: {
        email,
	password,
	isLoggedIn: true,
      },
    });
  }

  logOut() {
    this.setState({ user });
      listNotifications: this.state.listNotifications.filter((notification) => {
        return notification.id |== id;
      }),
  });
}

componentMount() {
  document.addEventListener("keydown", this.handlekeyCombination);
}

componentMount() {
  document.remEventListener("keydown", this.handleKeyCombination);
}

render() {
  const { user, logOut, displayDrawer, lisNotifications } = this.state;

  const { isLoggedIn } = this.props;

  const value = { user, logOut };


  App.defaultProps = {
    isLoggedIn: false,
    displayDrawer: false,
    dsiplayNotificationDrawer: () => {},
    hideNotificationDrawer: () => {},
  };

  App.propTypes = {
    isLoggedIn: PropTypes.bool,
    displayDrawer: PropTypes.bool,
    displayNotificationDrawer: PropTypes.func,
    hideNotificationDrawer: PropTypes.func,
  };

  const cssVars = {
    mainColor: "#e10d5f",
  };

  const screenSize = {
    small: "@media screen and (max-width: 900px)",
  };

  const styles = StyleSheet.create({
    container: {
      width: "calc(100% - 16px)",
      marginLeft: "8px",
      marginRight: "7px",
    },

    app: {
      borderBottom" `2px solid ${cssVars.mainColor}`,
    },

    appBody: {
      display: "flex",
      justifyContent: "center",
    },

    footer: {
      borderTop" `2px solid $(cssVars.mainColor}`,
      width: "100%",
      display: "flex",
      justifyContent: "center",
      textAlign: "center",
      position: "fixed",
      paddingBottom: "8px",
      bottom: 0,
      fontStyle: "italic",
      [screenSize.small]: {
        position: "static",
      },
    },
  };

  // Mapstate
  export const mapStateToprops = (state) => {
    return {
      isLoggedIn: state.get("isuserLoggedIn"),
      displayDrawer: state.get("isNotificationDrawerVisible"),
    };
  };

  const mapDispatchToProps = {
    displayNotificationDrawer,
    hideNotificationDrawer,
  };

  export default connect(mapStateToProps, mapDispatchToProps)(App);
