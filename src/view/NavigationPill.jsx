import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";

// core components
import GridContainer from "components/grid/GridContainer.jsx";
import GridItem from "components/grid/GridItem.jsx";
import NavPills from "components/navpills/NavPills.jsx";
import pillStyle from "assets/jss/components/navigationpill/navigationPillStyle.jsx";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "components/custombuttons/Button.jsx";
import Avatar from "@material-ui/core/Avatar";
import { connect } from "react-redux";
import colorUtil from "tool/colorUtil";
import { bindActionCreators } from "redux";
import { actions as frontActions } from "reducers/frontReducer";
import changeFormat from "tool/dateFormat"

class NavigationPill extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      recentQuestions: []
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      questions: nextProps.questions,
      recentQuestions: nextProps.recentQuestions
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <div id="navigation-pills">
            <GridContainer>
              <GridItem xs={12} sm={12} md={12} lg={12}>
                <NavPills
                  color="rose"
                  horizontal={{
                    tabsGrid: { xs: 12, sm: 4, md: 4, lg: 2 },
                    contentGrid: { xs: 12, sm: 8, md: 8, lg: 10 }
                  }}
                  tabs={[
                    {
                      tabButton: "Questions",
                      tabIcon: Dashboard,
                      tabContent: this.state.questions.map(
                        (question, index) => {
                          if(!question.id) return null;
                          return (
                            <Card style={{ margin: 5 }}>
                              <CardHeader
                                avatar={
                                  <Avatar
                                    aria-label="Recipe"
                                    className={classes.avatar}
                                    style={{
                                      backgroundColor: colorUtil(
                                        question.username
                                      )
                                    }}
                                  >
                                    {question.username.substring(0, 3)}
                                  </Avatar>
                                }
                                action={
                                  <Button
                                    color="primary"
                                    simple
                                    onClick={e => {
                                      this.props.changePdf(
                                        question.pdf_name,
                                        question.page_num
                                      );
                                      window.scroll({top: question.pos_y, left: 0, behavior: 'smooth' })
                                      this.props.changeActiveQuestion(question);
                                    }}
                                  >
                                    view
                                  </Button>
                                }
                                title={question.title}
                                
                                subheader={changeFormat(question.create_time.substring(0, 10))}
                              />
                            </Card>
                          );
                        }
                      )
                    },
                    {
                      tabButton: "most recent",
                      tabIcon: Schedule,
                      tabContent: this.state.recentQuestions.map(
                        (question, index) => {
                          if(!question.id) return null;
                          return (
                            <Card style={{ margin: 5 }}>
                              <CardHeader
                                avatar={
                                  <Avatar
                                    aria-label="Recipe"
                                    className={classes.avatar}
                                    style={{
                                      backgroundColor: colorUtil(
                                        question.username
                                      )
                                    }}
                                  >
                                    {question.username.substring(0, 3)}
                                  </Avatar>
                                }
                                action={
                                  <Button
                                    color="primary"
                                    simple
                                    onClick={e => {
                                      this.props.changePdf(
                                        question.pdf_name,
                                        question.page_num
                                      );
                                      window.scroll({top: question.pos_y, left: 0, behavior: 'smooth' })
                                      this.props.changeActiveQuestion(question);
                                    }}
                                  >
                                    view
                                  </Button>
                                }
                                title={question.title}
                                subheader={changeFormat(question.create_time.substring(0, 10))}
                              />
                            </Card>
                          );
                        }
                      )
                    }
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    questions: state.front.questions,
    recentQuestions: state.front.recentQuestions
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changePdf: bindActionCreators(frontActions.change_pdf, dispatch),
    changeActiveQuestion: bindActionCreators(
      frontActions.change_active_question,
      dispatch
    )
  };
}

NavigationPill = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationPill);

export default withStyles(pillStyle)(NavigationPill);
