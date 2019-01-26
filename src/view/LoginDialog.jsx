import Button from "@material-ui/core/Button";
import React, { Component } from "react";
import Card from "components/card/Card.jsx";
import CardBody from "components/card/CardBody.jsx";
import CardHeader from "components/card/CardHeader.jsx";
import CardFooter from "components/card/CardFooter.jsx";
import CustomInput from "components/custominput/CustomInput.jsx";
import loginPageStyle from "assets/jss/components/login/loginDialogStyle.jsx";
import { withStyles } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {actions as IndexActions} from 'reducers/index'



class LoginDialog extends Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden"
    };
  }
  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }

  handleLogin (e) {
    console.log("test login");
    this.props.login("admin","123");
    e.preventDefault();
  }

  render() {
    const { open } = this.props;
    const { classes, ...rest } = this.props;
    return (
      <Card className={classes[this.state.cardAnimaton]} >
        <Dialog open={open} aria-labelledby="form-dialog-title" style={{width: "30%", margin: "auto"}}>
          <br/>
          <DialogTitle id="form-dialog-title"></DialogTitle>
          <form className={classes.form} onSubmit={(e, values) => this.handleLogin(e)}>
            <CardHeader color="primary" className={classes.cardHeader}>
              <h4>Login</h4>
              <div className={classes.socialLine}>
                <Button
                  justIcon
                  href="#pablo"
                  target="_blank"
                  color="transparent"
                  onClick={e => e.preventDefault()}
                >
                  <i className={"fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  href="#pablo"
                  target="_blank"
                  color="transparent"
                  onClick={e => e.preventDefault()}
                >
                  <i className={"fab fa-facebook"} />
                </Button>
                <Button
                  justIcon
                  href="#pablo"
                  target="_blank"
                  color="transparent"
                  onClick={e => e.preventDefault()}
                >
                  <i className={"fab fa-google-plus-g"} />
                </Button>
              </div>
            </CardHeader>
            <p className={classes.divider}>Or Be Classical</p>
            <CardBody>
              <CustomInput
                labelText="First Name..."
                id="first"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  type: "text",
                  endAdornment: (
                    <InputAdornment position="end">
                      <People className={classes.inputIconsColor} />
                    </InputAdornment>
                  )
                }}
              />
              <CustomInput
                labelText="Email..."
                id="email"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  type: "email",
                  endAdornment: (
                    <InputAdornment position="end">
                      <Email className={classes.inputIconsColor} />
                    </InputAdornment>
                  )
                }}
              />
              <CustomInput
                labelText="Password"
                id="pass"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  type: "password",
                  endAdornment: (
                    <InputAdornment position="end">
                      <Icon className={classes.inputIconsColor}>
                        lock_outline
                      </Icon>
                    </InputAdornment>
                  )
                }}
              />
            </CardBody>
            <CardFooter className={classes.cardFooter}>
              <Button type="submit" simple color="primary" size="lg">
                Get started
              </Button>
            </CardFooter>
          </form>
        </Dialog>
      </Card>
    );
  }
}

function mapStateToProps(state) {
  return{
  }
}
function mapDispatchToProps(dispatch) {
  return{
      login: bindActionCreators(IndexActions.get_login, dispatch),
      //register: bindActionCreators(IndexActions.get_register, dispatch)
  }
}
LoginDialog = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginDialog)

export default withStyles(loginPageStyle)(LoginDialog);
