import { container, title } from "assets/jss/material-kit-react.jsx";


const pillsStyle = theme => ({
  section: {
    padding: "70px 0",
    backgroundColor: theme.palette.background.paper,
    marginTop: 20
  },
  container,
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

export default pillsStyle;
