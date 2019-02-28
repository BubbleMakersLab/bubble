import green from "@material-ui/core/colors/green";

import backGround from "../../assets/img_bg.png";

export default theme => ({
  socialCardGroupContainer: {
    display: "flex",
    justifyContent: "space-around",
    width: "100%"
  },
  social: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    width: "100%",
    background: `url(${backGround}) no-repeat center top fixed`,
    alignItems: "flex-end",
    "-webkit-background-size": "cover",
    "-moz-background-size": "cover",
    "-o-background-size": "cover",
    "background-size": "cover"
  },
  nextButton: {
    backgroundColor: green[500],
    color: "white"
  },
  footer: {
    color: "white",
    display: "flex",
    width: "100%",
    justifyContent: "flex-end",
    marginRight: "200px",
    marginTop: "30px",
    marginBottom: "30px",
    alignItems: "center",
    marginLeft: "20px"
  },
  or: {
    margin: "0 40px"
  },
  passStep: {
    color: "white"
  }
});
