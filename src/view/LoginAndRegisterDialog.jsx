import Button from "@material-ui/core/Button";
import React, { Component } from "react";
import Card from "components/card/Card.jsx";
import CardBody from "components/card/CardBody.jsx";
import CardHeader from "components/card/CardHeader.jsx";
import CardFooter from "components/card/CardFooter.jsx";
import CustomInput from "components/custominput/CustomInput.jsx";
import loginAndDialogPageStyle from "assets/jss/components/loginandregister/loginAndRegisterStyle.jsx";
import { withStyles } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
import People from "@material-ui/icons/People";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actions as IndexActions } from "reducers/index";

class LoginAndRegisterDialog extends Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",
      username: "",
      password1: "",
      password2: ""
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

  onChangeUsername = e => {
    this.setState({ username: e.target.value });
  };

  onChangePassword1 = e => {
    this.setState({ password1: e.target.value });
  };

  onChangePassword2 = e => {
    this.setState({ password2: e.target.value });
  };

  handleLoginAndRegister(e) {
    if (this.props.mode === "login") {
      this.props.login(this.state.username, this.state.password1);
    } else {
      if(this.state.password1 !== this.state.password2) {
        alert("password should be the same")
        return
      }
      this.props.register({username: this.state.username, password: this.state.password1});
    }
    e.preventDefault();
  }

  render() {
    const { open, mode } = this.props;
    const { classes, ...rest } = this.props;
    return (
      <Card className={classes[this.state.cardAnimaton]}>
        <Dialog
          open={open}
          aria-labelledby="form-dialog-title"
          style={{ width: "30%", margin: "auto" }}
          onClose={this.props.onClose}
        >
          <br />
          <DialogTitle id="form-dialog-title" />
          <form
            className={classes.form}
            onSubmit={(e, values) => this.handleLoginAndRegister(e)}
          >
            <CardHeader color="primary" className={classes.cardHeader}>
              {mode === "login" ? <h4>Login</h4> : <h4>Register</h4>}
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
                onChange={this.onChangeUsername}
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
                onChange={this.onChangePassword1}
              />
              {mode === "register" ? (
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
                  onChange={this.onChangePassword2}
                />
              ) : null}
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
  return {};
}
function mapDispatchToProps(dispatch) {
  return {
    login: bindActionCreators(IndexActions.get_login, dispatch),
    register: bindActionCreators(IndexActions.get_register, dispatch)
  };
}
LoginAndRegisterDialog = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginAndRegisterDialog);

export default withStyles(loginAndDialogPageStyle)(LoginAndRegisterDialog);
