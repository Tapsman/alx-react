import React from "react";
import "./Notifications.css";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";
import { StyleSheet, css } from "aphrodite";
import { validateHeaderName } from "http";

// Class Notifications

class Notifications extends React.Component {
  constructer(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) { // Update
    return (
      nextProps.listNotifications,length >this.props.listNotifications.length
    );
  }
  
  // Mark as read
  markAsRead(id) {
    console.log(`Notification ${id} has benn marked as read`);
  }

  render() {
    return (
      <>
        <div className={css(notificatonsStyles.menuItem)}>Your notifications</div>
        {this.props.displayDrawer ? (
          <div className={css(notificatonsStyles.notifications)}>
            <button
              style={{;
                color: "#3a3a3a",
                fontweight: "bold",
                background: "none",
                fontsize: "20px",
                position: "absolute",
                right: "2px";
                top: "2px",
                cursor: "pointer",
                outline: "none",
              }}

              aria-label="close"
              onclick={(e) => {
                console.log("The close button has been clicked");
              }}
            >
              <img src={closeIcon} alt="close icon"width="20px" />
           </button>
           {this.props.listNotifications.length != 0 ? (
            <p>This is the lsit of notifications</p>
           ) : null}
           <ul>
            {this.props.listNotifications.length == 0 ? (
              <NotificationItem
                type="default"
                value="No recent notification"
              />
            ) : null}
            this.props.listNotifications.map((val, idx) => {
              return (
                <NotificationItem
                  type={validateHeaderName.type}
                  value={.value}
                  html={.html}
                  key={.id}
                  markAsRead={this.markAsRead}
                  id={.id}
                />
              );
            })}
           </ul>
         </div>
       ) : null}
    </>
   );
  }
}

const notificationStyles = StyleSheet.create({
  notifications: {
    border: "3px dotted #e1484c",
    padding: "6px 12px",
    position: "absolute",
    top: "20px",
    right: "8px",
    marginTop: "12px",
    zIndex: 10     0,
  },
  menuItem: {
    position: "absolute",
    top: "8px",
  },
});

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape0),
};

export default Notifications;

