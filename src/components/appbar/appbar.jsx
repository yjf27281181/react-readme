import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "components/custombuttons/Button.jsx";
import Header from "./Header.jsx";

import appbarStyle from "assets/jss/components/appbar/appbarStyle";
import LoginDialog from "../login/LoginDialog.jsx";
import { connect } from "react-redux";

class AppBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenLogin: true
    };
  }
  render() {
    const { classes, userInfo } = this.props;
    console.log(this.props);
    return (
      <div id="navbar" className={classes.navbar}>
        <Header
          brand="Info Color"
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
                  Discover
                </Button>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Button
                  href="#pablo"
                  className={classes.navLink}
                  onClick={e => e.preventDefault()}
                  color="transparent"
                >
                  Profile
                </Button>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Button
                  href="#pablo"
                  className={classes.navLink}
                  onClick={e => e.preventDefault()}
                  color="transparent"
                >
                  Settings
                </Button>
                <LoginDialog open={!this.props.userInfo.username} />
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
  console.log(state)
  return {
    userInfo: state.globalState.userInfo
  };
}

AppBar = connect(mapStateToProps)(AppBar);

export default withStyles(appbarStyle)(AppBar);
