import { objectOf, string } from "prop-types";
import { Redirect } from "react-router-dom";
import Button from "@material-ui/core/Button/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent/CardContent";
import CardHeader from "@material-ui/core/CardHeader/CardHeader";
import Input from "@material-ui/core/Input/Input";
import React from "react";

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
        <Card style={{ marginTop: "50px" }}>
          <CardHeader title="Identifie toi" />

          <CardContent style={{ display: "flex", flexDirection: "column" }}>
            <Input
              type="text"
              onChange={this.handleChange}
              onKeyPress={this.handleKeyPress}
              placeholder="Nom d'utilisateur"
              style={{ margin: "20px" }}
            />
            <Input type="text" placeholder="Mot de passe" style={{ margin: "20px" }} />
            <Button className={classes.loginButton} variant="contained" onClick={this.handleClick} style={{ margin: "20px" }}>
              Connexion
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }
}
