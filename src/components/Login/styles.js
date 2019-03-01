import backGround from "../../assets/bg1.png";

export default theme => ({
  login: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    background: `url(${backGround}) no-repeat center center fixed`,
    "-webkit-background-size": "cover",
    "-moz-background-size": "cover",
    "-o-background-size": "cover",
    "background-size": "cover"
  },
  loginButton: {
    marginLeft: theme.spacing.unit
  }
});
