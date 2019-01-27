import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "components/custombuttons/Button.jsx";
import Header from "components/appbar/Header.jsx";

import appbarStyle from "assets/jss/components/appbar/appbarStyle";
import { connect } from "react-redux";
import Email from "@material-ui/icons/Email";
import CustomDropdown from "components/customdropdown/CustomDropdown";
import profileImage from "assets/img/usc.png";

class AppBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenLogin: true
    };
  }
  render() {
    const { classes, userInfo } = this.props;
    return (
      <div id="navbar" className={classes.navbar}>
        <Header
          brand="UNIVERSITY OF SOUTHERN CALIFORNIA"
          color="info"
          rightLinks={
            <List className={classes.list}>
              <ListItem className={classes.listItem}>
                <Button
                  href="#pablo"
                  className={classes.navLink + " " + classes.navLinkActive}
                  onClick={e => e.preventDefault()}
                  color="transparent"
                >
                  INF553
                </Button>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Button
                  href="#pablo"
                  className={classes.navLink}
                  onClick={e => e.preventDefault()}
                  color="transparent"
                >
                  CSCI570
                </Button>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Button
                  justIcon
                  round
                  href="#pablo"
                  className={classes.notificationNavLink}
                  onClick={e => e.preventDefault()}
                  color="rose"
                >
                  <Email className={classes.icons} />
                </Button>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Button
                  href="#pablo"
                  className={classes.navLink}
                  onClick={e => e.preventDefault()}
                  color="info"
                >
                  login
                </Button>
              </ListItem>

              <ListItem className={classes.listItem}>
                <CustomDropdown
                  left
                  caret={false}
                  hoverColor="black"
                  dropdownHeader="Dropdown Header"
                  buttonText={
                    <img
                      src={profileImage}
                      className={classes.img}
                      alt="profile"
                    />
                  }
                  buttonProps={{
                    className:
                      classes.navLink + " " + classes.imageDropdownButton,
                    color: "transparent"
                  }}
                  dropdownList={["Me", "Settings and other stuff", "Sign out"]}
                />
              </ListItem>
            </List>
          }
        />
      </div>
    );
  }
}

AppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    userInfo: state.globalState.userInfo
  };
}

AppBar = connect(mapStateToProps)(AppBar);

export default withStyles(appbarStyle)(AppBar);
