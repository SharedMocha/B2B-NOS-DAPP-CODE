import React from "react";
import injectSheet from "react-jss";
import PropTypes from "prop-types";

import Header from "./../../components/Header";
import NOSActions from "./../../components/NOSActions";

const styles = {
  "@import": "https://fonts.googleapis.com/css?family=Source+Sans+Pro",
  "@global html, body": {
    fontFamily: "Source Sans Pro",
    margin: 0,
    padding: 0,
    backgroundColor: "white"
  },
  App: {
    textAlign: "center"
  },
  intro: {
    fontSize: "large",
    color: "black",
    width: "100%",
    textAlign: "center",
    fontSize: "1.3em",
    fontWeight: 'bold',

  },
  lineBreak: {
    width: "75%",
    borderTop: "1px solid #333333",
    margin: "32px auto"
  }
};


const App = ({ classes }) => (
  <div className={classes.App}>
      <div className={classes.logoContainer}>
    <img src="https://i.imgur.com/E4G0Fex.png" alt="nOS logo" align="center" alt="Trulli" width="100%" height="300px" key="nosLogo" />
  </div>
     <p className={classes.intro}>
      A Business To Business (B2B) Messaging dAPP that helps companies in managing assets in a secure and trusted way without any third party
      </p>
    <NOSActions />
   
  </div>
);

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(App);