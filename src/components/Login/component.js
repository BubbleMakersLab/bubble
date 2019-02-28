import { objectOf, string } from "prop-types";
import { Redirect } from "react-router-dom";
import Button from "@material-ui/core/Button/Button";
import Input from "@material-ui/core/Input/Input";
import React from "react";
import Typography from "@material-ui/core/Typography/Typography";

export default class Login extends React.Component {
  static propTypes = {
    classes: objectOf(string)
  };

  static defaultProps = {
    classes: {}
  };

  state = {
    redirect: false,
    username: ""
  };

  handleChange = e => {
    this.setState({ username: e.target.value });
  };

  handleClick = () => {
    const { username } = this.state;

    if (username !== "") {
      this.setState({ redirect: true });
    }
  };

  handleKeyPress = e => {
    if (e.key === "Enter") {
      this.handleClick();
    }
  };

  render() {
    const { classes } = this.props;
    const { redirect, username } = this.state;

    if (redirect) {
      return <Redirect to={`/social?username=${username}`} />;
    }

    return (
      <div className={classes.login}>
        <Typography variant="h2" gutterBottom>
          Login
        </Typography>
        <div>
          <Input type="text" onChange={this.handleChange} onKeyPress={this.handleKeyPress} />
          <Button className={classes.loginButton} variant="contained" onClick={this.handleClick}>
            Go!
          </Button>
        </div>
      </div>
    );
  }
}
