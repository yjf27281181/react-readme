import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "components/custombuttons/Button.jsx";
import Header from "components/appbar/Header.jsx";

import appbarStyle from "assets/jss/components/appbar/appbarStyle";
import Email from "@material-ui/icons/Email";
import CustomDropdown from "components/customdropdown/CustomDropdown";
import uscImage from "assets/img/usc.png";
import LoginAndRegisterDialog from "view/LoginAndRegisterDialog.jsx";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions as frontActions } from "reducers/frontReducer";
import { actions as IndexActions } from "reducers/index";
import FaceIcon from "@material-ui/icons/Face";
class AppBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenDialog: false,
      userInfo: {},
      mode: "",
      inf553pdfs: [],
      csci570pdfs: []
    };
    this.props.getPDFNames("INF553");
    this.props.getPDFNames("CSCI570");

    this.handleChooseItem = this.handleChooseItem.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.pdfData.courseName === "INF553") {
      this.setState({
        userInfo: nextProps.userInfo,
        inf553pdfs: nextProps.pdfData.pdfNames
      });
    }

    if (nextProps.pdfData.courseName === "CSCI570") {
      this.setState({
        userInfo: nextProps.userInfo,
        csci570pdfs: nextProps.pdfData.pdfNames
      });
    }

    if(nextProps.msg.type===1 && nextProps.msg.content ==='register success') {
      this.setState({isOpenDialog:false})
    }
  }

  handleChooseItem(item) {
    if(item === 'Sign out') {
      this.props.userSignout();
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div id="navbar" className={classes.navbar}>
        <Header
          brand="UNIVERSITY OF SOUTHERN CALIFORNIA"
          color="info"
          leftLinks={
            <List className={classes.list}>
              <ListItem className={classes.listItem}>
                <img src={uscImage} className={classes.img} alt="profile" />
              </ListItem>
            </List>
          }
          rightLinks={
            <List className={classes.list}>
              <ListItem className={classes.listItem}>
                <CustomDropdown
                  left
                  caret={false}
                  hoverColor="black"
                  dropdownHeader="INF 553"
                  buttonText={"INF 553"}
                  buttonProps={{
                    className: classes.navLink,
                    color: "transparent"
                  }}
                  onClick={(name) => {
                    this.props.changePdf(name,1)
                    this.props.changeActiveQuestion(null)
                  }
                }
                  dropdownList={this.state.inf553pdfs}
                />
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
              {this.state.userInfo.username ? (
                <ListItem className={classes.listItem}>
                  <CustomDropdown
                    left
                    caret={false}
                    hoverColor="black"
                    dropdownHeader={this.state.userInfo.username}
                    buttonText={<FaceIcon />}
                    onClick={this.handleChooseItem}
                    buttonProps={{
                      className: classes.navLink,
                      color: "transparent"
                    }}
                    dropdownList={[
                      "Me",
                      "Sign out"
                    ]}
                  />
                </ListItem>
              ) : (
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={e => {
                        this.setState({ isOpenDialog: true, mode: "login" });
                      }}
                      color="info"
                    >
                      login
                    </Button>
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={e => {
                        this.setState({ isOpenDialog: true, mode: "register" });
                      }}
                      color="info"
                    >
                      register
                    </Button>
                  </ListItem>

              )}
            </List>
          }
        />
        <LoginAndRegisterDialog
          open={!this.state.userInfo.username && this.state.isOpenDialog}
          mode={this.state.mode}
          onClose={() => {this.setState({isOpenDialog: false})}}
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
    userInfo: state.globalState.userInfo,
    pdfData: state.front.pdfData,
    msg: state.globalState.msg
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getPDFNames: bindActionCreators(frontActions.get_pdf_names, dispatch),
    userSignout: bindActionCreators(IndexActions.user_signout, dispatch),
    changePdf: bindActionCreators(frontActions.change_pdf, dispatch),
    changeActiveQuestion: bindActionCreators(frontActions.change_active_question, dispatch),
  };
}

AppBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppBar);

export default withStyles(appbarStyle)(AppBar);
