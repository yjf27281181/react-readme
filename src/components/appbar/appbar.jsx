import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "components/custombuttons/Button.jsx";
import Header from "./Header.jsx";

import appbarStyle from "assets/jss/components/appbar/appbarStyle";

class AppBar extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div id="navbar" className={classes.navbar}>
        <Header
          brand="Info Color" color="info"
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
                  color="transparent">
                  Profile
                </Button>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Button
                  href="#pablo"
                  className={classes.navLink}
                  onClick={e => e.preventDefault()}
                  color="transparent">
                  Settings
                </Button>
              </ListItem>
            </List>
            }
          />

      </div>
    )
  }
  
}

AppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(appbarStyle)(AppBar);
